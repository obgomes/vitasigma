

# Restringir acesso de leitura nas tabelas chat_leads e chat_messages

## Problema

As tabelas `chat_leads` e `chat_messages` possuem politicas de SELECT que permitem qualquer usuario autenticado ler todos os registros. Isso expoe dados pessoais sensiveis (nomes, emails, telefones) de todos os leads.

## Analise do codigo

O frontend **nunca faz SELECT** nessas tabelas diretamente. O unico caso e o `.select("id").single()` encadeado apos um INSERT na tabela `chat_leads`, que retorna apenas o registro recem-inserido (funciona com a politica de INSERT, nao precisa de SELECT separado no Supabase quando encadeado ao insert com RLS).

Na verdade, o `.select().single()` apos INSERT **precisa** de uma politica SELECT para funcionar. Porem, podemos restringi-la para que o usuario anonimo so veja o registro que acabou de inserir.

## Solucao

### 1. Remover as politicas SELECT permissivas atuais

Remover as politicas "Allow authenticated select" de ambas as tabelas, pois nenhum usuario autenticado precisa ler esses dados via frontend.

### 2. Adicionar politica SELECT restrita para chat_leads

Adicionar uma politica que permite SELECT anonimo **apenas para o proprio registro recem-inserido**. Como nao temos `user_id`, a abordagem mais segura e permitir SELECT anonimo somente quando encadeado ao INSERT (o Supabase permite isso nativamente).

Na pratica, a solucao mais simples e: manter uma politica de SELECT anonimo mas **restritiva** -- porem sem `user_id` na tabela, nao ha como filtrar por usuario. A alternativa pratica e **remover a politica SELECT completamente** e ajustar o frontend para nao depender do retorno do ID via `.select()`.

### 3. Ajuste no frontend (`src/components/ChatBot.tsx`)

Alterar o insert de `chat_leads` para usar `.select("id").single()` com o header `Prefer: return=representation` (que ja e o padrao do Supabase para `.select()` apos insert). Como alternativa mais segura, podemos gerar o UUID no frontend antes do insert, eliminando a necessidade do SELECT.

**Abordagem escolhida**: Gerar o `id` no frontend com `crypto.randomUUID()` e envia-lo no INSERT. Assim, nao precisamos de politica SELECT nenhuma.

## Alteracoes

### Migration SQL

```sql
-- Remover politicas SELECT permissivas
DROP POLICY IF EXISTS "Allow authenticated select on chat_leads" ON public.chat_leads;
DROP POLICY IF EXISTS "Allow authenticated select on chat_messages" ON public.chat_messages;
```

### `src/components/ChatBot.tsx`

Na funcao `submitLead`, gerar o UUID antes do insert:

```typescript
const generatedId = crypto.randomUUID();
const { error } = await supabase.from("chat_leads").insert({
  id: generatedId,
  nome: lead.nome.trim(),
  email: lead.email.trim(),
  telefone: lead.telefone.trim(),
} as any);
if (!error) {
  savedLeadId = generatedId;
  setLeadId(generatedId);
}
```

Isso remove a necessidade do `.select("id").single()` e portanto nenhuma politica SELECT e necessaria.

## Resumo

| Alteracao | Arquivo/Local |
|-----------|---------------|
| Remover SELECT policies | Migration SQL (ambas tabelas) |
| Gerar UUID no frontend | `src/components/ChatBot.tsx` |
| Resultado | Nenhum usuario pode ler dados de leads ou mensagens via API |

