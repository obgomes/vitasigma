
# Ajustes Visuais, Sistema SOC, Dashboard, WhatsApp e Assistente Virtual

## 1. Cabecalho (Navbar)
- Fundo sempre branco solido (`bg-white`) em vez de `bg-white/90`
- Fonte dos links em negrito (`font-bold`)
- Trocar o logo atual (`logo-vitasigma.jpg`) pelo novo logo azul enviado (`Azul_Completo.png`), salvo como `src/assets/logo-vitasigma-azul.png`
- Usar esse mesmo logo no rodape

## 2. Logo do Navbar e Rodape
- Copiar `user-uploads://Azul_Completo.png` para `src/assets/logo-vitasigma-azul.png`
- Atualizar imports no Navbar e Footer para usar esse novo logo

## 3. Secao de Exames - Sistema SOC
- Adicionar mencao ao Sistema SOC na descricao: "Utilizamos o Sistema SOC, especialista em Medicina e Seguranca do Trabalho"
- Centralizar o subtitulo "Exames que gerenciamos" (remover `flex items-center` e usar `text-center`)

## 4. Dashboard - Nova imagem
- Copiar `user-uploads://image-3.png` para `src/assets/dashboard-screenshot.png`
- No `TechnologySection.tsx`, substituir o mock dashboard (div com stats simuladas) pela imagem real do dashboard
- Manter os personagens Vita e Dr. Sigma ao lado

## 5. Botao WhatsApp no CTA
- Atualizar o link do WhatsApp na secao de contato para `https://wa.me/5511983737163` com mensagem padrao

## 6. Assistente Virtual (Dr. Sigma Chatbot)
- Criar um botao flutuante no canto inferior direito com a imagem do Dr. Sigma (o usuario vai enviar a imagem depois)
- Ao clicar, abrir um modal/drawer de chat com a IA
- Antes de iniciar o chat, solicitar nome, e-mail e telefone do visitante
- Enviar esses dados por e-mail para contato@vitasigma.com.br via edge function
- O chatbot usara Lovable AI (Gemini Flash) com prompt restrito a SST e servicos da VitaSigma
- Criar edge function `chat` para comunicacao com Lovable AI
- Criar edge function `send-lead-email` para enviar e-mail com dados do lead (usando Resend ou similar - sera necessario configurar)
- Por enquanto, usar a imagem existente `vita-dr-sigma.png` como placeholder do botao ate o usuario enviar a imagem definitiva

## 7. Preparacao para KingHost
- O site ja e uma SPA React/Vite que gera arquivos estaticos
- Para publicar na KingHost, basta fazer o build (`npm run build`) e enviar a pasta `dist` para o servidor
- Nenhuma alteracao de codigo e necessaria, apenas configurar o servidor para redirecionar todas as rotas para `index.html` (SPA fallback)

---

## Detalhes Tecnicos

**Novos arquivos:**
- `src/assets/logo-vitasigma-azul.png` - logo azul horizontal
- `src/assets/dashboard-screenshot.png` - screenshot do dashboard real
- `src/components/ChatBot.tsx` - componente do chatbot flutuante com formulario de lead e chat IA
- `supabase/functions/chat/index.ts` - edge function para Lovable AI
- `supabase/functions/send-lead-email/index.ts` - edge function para enviar e-mail com dados do lead

**Arquivos modificados:**
- `src/components/Navbar.tsx` - fundo branco, logo azul, fonte negrito
- `src/components/Footer.tsx` - logo azul
- `src/components/ExamsSection.tsx` - mencao ao SOC, centralizar titulo
- `src/components/TechnologySection.tsx` - imagem real do dashboard
- `src/components/CTASection.tsx` - WhatsApp para (11) 983737163
- `src/pages/Index.tsx` - adicionar ChatBot

**Observacao sobre o envio de e-mail:** Para enviar e-mails automaticamente com os dados do lead, sera necessario configurar um servico de e-mail (como Resend). A captura dos dados sera implementada e armazenada, e o envio pode ser ativado assim que o servico estiver configurado.

**Observacao sobre a imagem do chatbot:** O usuario informou que vai enviar uma imagem especifica do Dr. Sigma para o botao. Por enquanto, usaremos a imagem existente como placeholder.
