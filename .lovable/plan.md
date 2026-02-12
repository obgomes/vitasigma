

# Ajustes Visuais e Estruturais do Site VitaSigma

## Resumo
Conjunto de ajustes visuais, estruturais e de conteudo em todas as secoes do site, incluindo logica de logo dinamico no menu, reorganizacao de secoes e adicao de redes sociais.

---

## 1. Logo branco e menu dinamico (Navbar)

- Adicionar o logo branco (imagem enviada) ao projeto como `src/assets/logo-vitasigma-branco.png`
- Quando a pagina estiver no topo (area azul do hero), usar o logo branco e texto/botao com cores claras
- Quando rolar e o fundo ficar branco, trocar para o logo colorido (atual) com texto/botao azul
- O botao "Falar com especialista" segue a mesma logica de cores
- Adicionar icones de redes sociais (Instagram, LinkedIn, Linktree) no header

## 2. Hero Section

- Remover a imagem dos personagens (Vita e Dr. Sigma) do hero
- Centralizar o texto (titulo, subtitulo, botoes)
- Reduzir a altura vertical da secao (diminuir padding)
- O texto "Tech & SSO" ja faz parte, subir o conteudo para eliminar espaco em branco do cabecalho
- Corrigir cores dos botoes: garantir contraste adequado (fonte e fundo visiveis)
- Botao "Solicitar diagnostico" leva para nova secao de diagnosticos (por agora, scroll para "#diagnosticos")

## 3. Secao "O Problema" (ProblemSection)

- Remover a frase/label "O Problema"
- Manter o restante (titulo, subtitulo, cards)
- Nos cards, trocar icones para cor azul (em vez de vermelho/destructive)
- Centralizar textos e icones dentro dos cards

## 4. Secao "A Solucao" (SolutionSection)

- Remover a frase/label "A Solucao"
- Diminuir o tamanho da caixa "Gestao 360" e reduzir espaco vertical geral da secao

## 5. Secao "Servicos" (ServicesSection)

- Remover a palavra/label "Servicos"
- Centralizar icones e textos dentro dos cards (PGR, PCMSO, LTCAT, etc.)

## 6. Secao "Exames" (ExamsSection)

- Remover a palavra/label "Destaque"
- Alinhar o texto ao topo da caixa azul (subir conteudo)

## 7. Secao "Tecnologia" (TechnologySection)

- Diminuir o tamanho/padding vertical da secao
- Mover os personagens (Vita e Dr. Sigma) para esta secao

## 8. Secao "Diferenciais" (DifferentialsSection)

- Remover a palavra/label "Diferenciais"
- Fundo azul (gradient-blue) com fontes brancas

## 9. Secao "Segmentos" (SegmentsSection)

- Remover a palavra/label "Segmentos"
- Manter o restante como esta

## 10. Secao "Blog" (BlogPreviewSection)

- Remover a palavra/label "Blog"
- Manter a estrutura de cards pronta para receber artigos do backend

## 11. CTA / Contato (CTASection)

- Adicionar icone do WhatsApp no botao (usando icone SVG do WhatsApp via lucide ou inline)

## 12. Rodape (Footer)

- Adicionar links de redes sociais com icones: Instagram, LinkedIn, Linktree
  - Instagram: https://www.instagram.com/vitasigmatechsso/
  - LinkedIn: https://www.linkedin.com/company/vitasigma
  - Linktree: https://linktr.ee/VitaSigmaTechSSO

---

## Detalhes Tecnicos

**Arquivos modificados:**
- `src/assets/logo-vitasigma-branco.png` - novo arquivo (logo branco)
- `src/components/Navbar.tsx` - logica de logo/cores dinamicas + redes sociais
- `src/components/HeroSection.tsx` - remover personagens, centralizar, reduzir altura, corrigir botoes
- `src/components/ProblemSection.tsx` - remover label, icones azuis, centralizar cards
- `src/components/SolutionSection.tsx` - remover label, reduzir caixa 360
- `src/components/ServicesSection.tsx` - remover label, centralizar cards
- `src/components/ExamsSection.tsx` - remover label "Destaque", alinhar ao topo
- `src/components/TechnologySection.tsx` - reduzir padding, adicionar personagens
- `src/components/DifferentialsSection.tsx` - remover label, fundo azul, fontes brancas
- `src/components/SegmentsSection.tsx` - remover label
- `src/components/BlogPreviewSection.tsx` - remover label
- `src/components/CTASection.tsx` - icone WhatsApp no botao
- `src/components/Footer.tsx` - redes sociais com icones

