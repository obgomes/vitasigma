
# Atualizar dominio de vitasigma.lovable.app para www.vitasigma.com.br

## Por que isso importa para o SEO

- A **canonical URL** diz ao Google qual e o endereco oficial do site. Se ficar apontando para `vitasigma.lovable.app`, o Google pode indexar o dominio errado ou dividir a autoridade entre os dois.
- As tags **og:url** e **og:image** afetam como o link aparece quando compartilhado no WhatsApp, LinkedIn e Facebook.
- O **sitemap.xml** precisa apontar para o dominio correto para que os buscadores rastreiem as paginas certas.
- O **JSON-LD** (structured data) informa ao Google o site oficial da empresa.

## Arquivos afetados

### 1. index.html (8 ocorrencias)

Substituir todas as referencias de `https://vitasigma.lovable.app` por `https://www.vitasigma.com.br`:

- `<link rel="canonical">`
- `<meta property="og:url">`
- `<meta property="og:image">` (URL da imagem)
- `<meta name="twitter:image">` (URL da imagem)
- JSON-LD: campos `url` e `logo`

### 2. public/sitemap.xml (1 ocorrencia)

Atualizar a tag `<loc>` para `https://www.vitasigma.com.br/`

### 3. public/robots.txt (1 ocorrencia)

Atualizar a linha do Sitemap para `Sitemap: https://www.vitasigma.com.br/sitemap.xml`

## Observacao importante

Apos a implementacao, voce precisara:
1. **Conectar o dominio** `www.vitasigma.com.br` nas configuracoes do projeto (Settings > Domains)
2. **Publicar o site** para que as mudancas entrem em vigor
