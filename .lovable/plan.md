

# Melhorar o SEO do site

## O que sera feito

Adicionar elementos de SEO faltantes para melhorar posicionamento nos buscadores e aparencia ao compartilhar links em redes sociais.

## Alteracoes

### 1. index.html - Adicionar meta tags e JSON-LD

Inserir no `<head>`:
- `<link rel="canonical">` apontando para a URL publicada
- `og:url`, `og:locale` (pt_BR), `og:site_name`, `og:image` com dimensoes
- Twitter Cards (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- `<meta name="robots" content="index, follow">`
- JSON-LD com schema `Organization` contendo nome, URL, logo e descricao da empresa

### 2. public/og-image.png - Imagem de compartilhamento social

Copiar `src/assets/dashboard-screenshot.png` para `public/og-image.png` como imagem provisoria de compartilhamento. Idealmente, no futuro, substituir por imagem dedicada de 1200x630px.

### 3. public/sitemap.xml - Novo arquivo

Criar sitemap XML com a URL principal do site para facilitar indexacao pelos buscadores.

### 4. public/robots.txt - Adicionar referencia ao sitemap

Incluir linha `Sitemap: https://vitasigma.lovable.app/sitemap.xml` ao final do arquivo.

## Secao tecnica

**index.html** - Adicionar entre as linhas 11 e 12:

```html
<link rel="canonical" href="https://vitasigma.lovable.app/" />
<meta property="og:url" content="https://vitasigma.lovable.app/" />
<meta property="og:locale" content="pt_BR" />
<meta property="og:site_name" content="VitaSigma" />
<meta property="og:image" content="https://vitasigma.lovable.app/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="VitaSigma – Tech & SSO" />
<meta name="twitter:description" content="Tecnologia e Engenharia aplicadas à Segurança do Trabalho." />
<meta name="twitter:image" content="https://vitasigma.lovable.app/og-image.png" />
<meta name="robots" content="index, follow" />
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VitaSigma",
  "url": "https://vitasigma.lovable.app",
  "logo": "https://vitasigma.lovable.app/favicon.png",
  "description": "Soluções em segurança do trabalho e saúde ocupacional com tecnologia própria."
}
</script>
```

**public/sitemap.xml** (novo):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://vitasigma.lovable.app/</loc>
    <lastmod>2026-02-13</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

**public/robots.txt** - Adicionar ao final:

```
Sitemap: https://vitasigma.lovable.app/sitemap.xml
```

