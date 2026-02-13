

# Ajustes de layout na tela inicial do Doutor Sigma

## Alteracoes no arquivo `src/components/ChatBot.tsx`

### 1. Header do chat
- Aumentar o logo do Doutor Sigma de `w-8 h-8` para `w-11 h-11`
- Aumentar fonte do nome "Doutor Sigma" de `text-sm` para `text-base font-bold`
- Aumentar fonte do subtitulo "Assistente VitaSigma" de `text-xs` para `text-sm`

### 2. Formulario de lead (tela inicial antes de iniciar conversa)
- Colocar o texto "Para iniciar, preencha seus dados:" em **negrito** (`font-semibold`)
- Adicionar espacamento extra antes do botao "Iniciar conversa" com `mt-4` para empurra-lo mais para baixo
- Adicionar um pouco de espacamento vertical entre os campos (`space-y-4` em vez de `space-y-3`)

