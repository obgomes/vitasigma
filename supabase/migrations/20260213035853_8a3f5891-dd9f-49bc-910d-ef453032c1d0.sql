
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
