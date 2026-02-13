

# Restringir acesso publico aos dados de leads e mensagens

## Problema

As tabelas `chat_leads` e `chat_messages` possuem politicas de RLS que permitem SELECT para qualquer pessoa (anonima), expondo dados pessoais sensiveis (nomes, emails, telefones) na internet publica.

## Solucao

Restringir o SELECT apenas a usuarios autenticados, mantendo o INSERT aberto para anonimos (necessario para o chatbot funcionar).

## Alteracoes no banco de dados (migration SQL)

```sql
-- Remover politicas de SELECT abertas
DROP POLICY "Allow anonymous select on chat_leads" ON public.chat_leads;
DROP POLICY "Allow anonymous select on chat_messages" ON public.chat_messages;

-- Criar politicas de SELECT restritas a usuarios autenticados
CREATE POLICY "Allow authenticated select on chat_leads"
  ON public.chat_leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated select on chat_messages"
  ON public.chat_messages
  FOR SELECT
  TO authenticated
  USING (true);
```

## Impacto no codigo

Nenhum. O chatbot no frontend apenas faz INSERT nas tabelas (para salvar leads e mensagens). O SELECT nao e utilizado pelo fluxo do chatbot - as mensagens da conversa sao gerenciadas em memoria (state do React) e as respostas vem via streaming da edge function. Portanto, remover o SELECT anonimo nao quebra nenhuma funcionalidade.

## Observacao

As politicas de INSERT permanecem abertas para anonimos, pois o chatbot precisa gravar dados sem autenticacao. No futuro, se voce criar um painel administrativo para visualizar os leads, bastara fazer login para ter acesso aos dados.

