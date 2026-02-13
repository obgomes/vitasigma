

# Corrigir gravacao de mensagens no banco de dados

## Problema identificado

O componente `ChatBot.tsx` ja possui o codigo para gravar leads e mensagens no banco de dados. Porem, as politicas de seguranca (RLS) das tabelas so permitem **INSERT**, nao **SELECT**. Isso causa uma falha silenciosa:

1. Ao inserir o lead, o codigo faz `.select("id").single()` para obter o ID gerado
2. Como nao ha politica de SELECT, essa chamada falha
3. O `leadId` nunca e salvo no state
4. Sem `leadId`, nenhuma mensagem e gravada (a condicao `if (leadId)` nunca e verdadeira)

## Solucao

Adicionar politicas de **SELECT** nas duas tabelas para que o usuario anonimo possa ler os registros que acabou de inserir.

## Secao tecnica

**Migracao SQL a ser executada:**

```sql
CREATE POLICY "Allow anonymous select on chat_leads"
  ON public.chat_leads FOR SELECT
  TO anon USING (true);

CREATE POLICY "Allow anonymous select on chat_messages"
  ON public.chat_messages FOR SELECT
  TO anon USING (true);
```

Nenhuma alteracao no codigo do componente e necessaria - a logica de gravacao ja esta correta.
