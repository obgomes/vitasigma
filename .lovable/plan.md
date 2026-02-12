
# Ajustes no Cabecalho, Rodape, Remocao de Secao e Imagem Gestao 360

## 1. Cabecalho (Navbar) - Sempre branco, fixo, fosco

- Remover toda a logica condicional de `scrolled` para cores/logo
- Fundo sempre branco com efeito fosco (frosted glass): `bg-white/90 backdrop-blur-md`
- Logo sempre o colorido (`logo-vitasigma.jpg`), sem caixa ao redor, solto no cabecalho
- Fonte dos links sempre preta (`text-foreground`)
- Botao "Falar com especialista" sempre no estilo padrao (azul)
- Para o icone do Linktree, usar a primeira imagem enviada (`image-2.png`) como logo proprio em vez do icone generico de link

## 2. Rodape (Footer) - Telefones com WhatsApp + Linktree com logo

- Transformar os telefones em links clicaveis que abrem o WhatsApp:
  - `https://wa.me/5511966308228`
  - `https://wa.me/5511983737163`
- Substituir o icone generico do Linktree pela imagem enviada (`image-2.png`)

## 3. Remover secao ProblemSection

- Remover completamente o componente `ProblemSection` e sua referencia no `Index.tsx`
- Remover o `<Separator />` correspondente

## 4. Secao Gestao 360 (SolutionSection) - Usar imagem enviada

- Substituir o card generico com icone pela imagem enviada (`ChatGPT_Image_12_de_fev._de_2026_19_06_11.png`)
- Manter o titulo e os bullet points do lado esquerdo

## 5. Arquivos a copiar

- `user-uploads://image-2.png` para `src/assets/linktree-icon.png`
- `user-uploads://ChatGPT_Image_12_de_fev._de_2026_19_06_11.png` para `src/assets/gestao-360.png`

## Detalhes Tecnicos

**Arquivos modificados:**
- `src/assets/linktree-icon.png` - novo (icone Linktree)
- `src/assets/gestao-360.png` - novo (imagem Gestao 360)
- `src/components/Navbar.tsx` - cabecalho fixo branco fosco, logo sem caixa, Linktree com imagem propria
- `src/components/Footer.tsx` - telefones com link WhatsApp, Linktree com imagem propria
- `src/components/SolutionSection.tsx` - imagem real no lugar do card generico
- `src/pages/Index.tsx` - remover ProblemSection e seu Separator
