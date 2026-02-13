

# Ajustes de layout mobile e rodape

## 1. Navbar - Logo centralizado no mobile

**Arquivo:** `src/components/Navbar.tsx`

Na linha 33, o container usa `justify-between`. No mobile, vamos centralizar o logo adicionando classes responsivas: no mobile o logo fica centralizado e o botao de menu fica posicionado com `absolute` a direita.

Alterar a `div` container (linha 33) para usar `justify-center lg:justify-between` e posicionar o botao de menu mobile com `absolute right-4`.

## 2. Footer - Remover secao de Servicos

**Arquivo:** `src/components/Footer.tsx`

Remover completamente o bloco das linhas 40-47 (coluna "Servicos" com PGR, PCMSO, etc.).

## 3. Footer - Centralizar tudo no mobile

Alterar o grid do rodape para centralizar o conteudo no mobile:
- Adicionar `text-center` nas colunas no mobile (`text-center sm:text-left`)
- Centralizar os icones sociais no mobile (`justify-center sm:justify-start`)
- Centralizar os itens de contato no mobile (`justify-center sm:justify-start`)
- Centralizar o logo no mobile (`mx-auto sm:mx-0`)

## 4. Footer - Aumentar tamanho da fonte

Alterar os textos do rodape de `text-sm` para `text-base` nos itens de Links e Contato. Os titulos de `text-sm` para `text-base` ou `text-lg`.

## 5. Footer - Link mailto no email

Na linha 85, transformar o texto `contato@vitasigma.com.br` em um link clicavel:

```html
<a href="mailto:contato@vitasigma.com.br" className="hover:text-primary transition-colors">
  contato@vitasigma.com.br
</a>
```

## Resumo das alteracoes

| Arquivo | Alteracao |
|---------|-----------|
| `Navbar.tsx` | Logo centralizado no mobile, botao menu reposicionado |
| `Footer.tsx` | Remover coluna Servicos, centralizar no mobile, fontes maiores, mailto no email |

