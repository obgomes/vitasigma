CREATE POLICY "Allow anonymous select on chat_leads"
  ON public.chat_leads FOR SELECT
  TO anon USING (true);

CREATE POLICY "Allow anonymous select on chat_messages"
  ON public.chat_messages FOR SELECT
  TO anon USING (true);