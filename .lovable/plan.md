

# Proteger a Edge Function /chat

A funcao `/chat` atualmente aceita qualquer requisicao sem validacao. Vamos adicionar camadas de seguranca para prevenir abuso.

## Contexto importante

Este chatbot e publico (visitantes do site usam sem login), entao **nao podemos exigir JWT de usuario autenticado**. Em vez disso, vamos usar outras estrategias de protecao.

## Alteracoes

### 1. Validacao e sanitizacao de entrada (`supabase/functions/chat/index.ts`)

- **Validar estrutura do `messages`**: verificar que e um array, cada item tem `role` (apenas "user" ou "assistant") e `content` (string).
- **Limitar quantidade de mensagens**: maximo de 20 mensagens por requisicao para evitar contextos enormes.
- **Limitar tamanho do conteudo**: maximo de 2000 caracteres por mensagem.
- **Rejeitar roles invalidos**: apenas "user" e "assistant" sao aceitos (nunca "system", prevenindo prompt injection via role).

### 2. Rate limiting por IP (`supabase/functions/chat/index.ts`)

- Implementar rate limiting em memoria usando um `Map` com IP do cliente.
- Limite: 10 requisicoes por minuto por IP.
- Limpar entradas expiradas periodicamente.
- Nota: em memoria funciona para uma unica instancia; em caso de escala, o rate limiting do proprio AI gateway (429) serve como fallback.

### 3. Validacao do API key do cliente (`supabase/functions/chat/index.ts`)

- Verificar que o header `Authorization` contem o `apikey` (anon key) do projeto, garantindo que a requisicao vem do frontend legitimo.
- Isso nao e autenticacao de usuario, mas impede chamadas sem a chave publica.

### 4. Atualizar o frontend (`src/components/ChatBot.tsx`)

- Nenhuma alteracao necessaria no frontend, pois ele ja envia o header `Authorization` com a anon key.

## Resumo tecnico

| Protecao | Implementacao |
|----------|--------------|
| Validacao de entrada | Array check, role whitelist, limites de tamanho |
| Rate limiting | Map em memoria, 10 req/min por IP |
| API key check | Verificar header Authorization com anon key |
| Prompt injection | Bloquear role "system" nas mensagens do cliente |

