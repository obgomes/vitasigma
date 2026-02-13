

# Gravar contatos e conversas do chatbot no banco de dados

## O que sera feito

1. Criar duas tabelas no banco de dados para armazenar os dados do chatbot:
   - **chat_leads**: dados de contato (nome, email, telefone) capturados ao iniciar conversa
   - **chat_messages**: mensagens trocadas entre o usuario e o Doutor Sigma

2. Atualizar o componente ChatBot para gravar os dados automaticamente.

## Detalhes

### 1. Criar tabelas via migracao

**Tabela `chat_leads`:**
- `id` (uuid, primary key)
- `nome` (text)
- `email` (text)
- `telefone` (text)
- `created_at` (timestamp com default now())

**Tabela `chat_messages`:**
- `id` (uuid, primary key)
- `lead_id` (uuid, referencia chat_leads)
- `role` (text - "user" ou "assistant")
- `content` (text)
- `created_at` (timestamp com default now())

Ambas as tabelas terao RLS desabilitado com politica permissiva para insercao anonima, ja que os visitantes do site nao fazem login.

### 2. Atualizar `src/components/ChatBot.tsx`

- Ao clicar em "Iniciar conversa", inserir o lead na tabela `chat_leads` e guardar o `lead_id` retornado
- Apos cada mensagem do usuario e cada resposta do assistente, inserir na tabela `chat_messages` com o `lead_id` correspondente

## Secao tecnica

**Migracao SQL:**
```sql
CREATE TABLE public.chat_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  email text NOT NULL,
  telefone text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE public.chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid REFERENCES public.chat_leads(id) ON DELETE CASCADE,
  role text NOT NULL CHECK (role IN ('user', 'assistant')),
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.chat_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert on chat_leads"
  ON public.chat_leads FOR INSERT
  TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous insert on chat_messages"
  ON public.chat_messages FOR INSERT
  TO anon WITH CHECK (true);
```

**Arquivo modificado:** `src/components/ChatBot.tsx`
- Importar o cliente Supabase
- Na funcao `submitLead`: inserir na tabela `chat_leads` e armazenar o `id` retornado em um state `leadId`
- Na funcao `sendMessage`: apos enviar a mensagem do usuario, inserir na `chat_messages`; apos receber a resposta completa do assistente, inserir tambem
- A mensagem inicial de boas-vindas do Doutor Sigma tambem sera gravada

