

# Atualizar imagem e nome do assistente para Doutor Sigma

## Alteracoes

### 1. Nova imagem do botao
- Copiar a imagem enviada para `src/assets/dr-sigma-button.png` (sobrescreve a anterior)
- A imagem e quadrada e com fundo branco, ideal para o formato circular do botao

### 2. Renomear assistente de "Engenheira Vita" para "Doutor Sigma"
Atualizar todas as referencias no componente `ChatBot.tsx`:
- Header do chat: "Engenheira Vita" -> "Doutor Sigma"
- Subtitulo: "Assistente VitaSigma" (manter)
- Mensagem de boas-vindas: "Sou a Engenheira Vita" -> "Sou o Doutor Sigma"
- Aria-label do botao: manter "Abrir assistente virtual"

### 3. Atualizar o prompt do sistema na edge function `chat`
- No arquivo `supabase/functions/chat/index.ts`, trocar "Engenheira Vita" por "Doutor Sigma" no SYSTEM_PROMPT para que a IA se apresente corretamente

## Detalhes Tecnicos

**Arquivos modificados:**
- `src/assets/dr-sigma-button.png` - nova imagem (copia)
- `src/components/ChatBot.tsx` - linhas 108, 109 (header) e mensagem de boas-vindas na linha 33
- `supabase/functions/chat/index.ts` - linha 10 do SYSTEM_PROMPT

