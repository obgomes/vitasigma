

# Remover a secao de Blog do site

## O que sera feito

Remover a secao "Blog VitaSigma" da pagina principal, mantendo o componente salvo no codigo para reimplementacao futura.

## Alteracao

### Arquivo: `src/pages/Index.tsx`
- Remover a importacao do `BlogPreviewSection`
- Remover o `<BlogPreviewSection />` e o `<Separator />` que o precede da pagina

O arquivo `src/components/BlogPreviewSection.tsx` sera mantido no projeto para uso futuro.

