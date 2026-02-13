

# Alinhar botao do WhatsApp ao centro

O titulo e o paragrafo ja possuem `text-center`, mas o link com o botao do WhatsApp nao esta centralizado porque o `<a>` e um elemento inline sem alinhamento definido.

## Alteracao

**Arquivo:** `src/components/CTASection.tsx` (linha 38)

Adicionar `className="flex justify-center"` na tag `<a>` que envolve o botao, ou alternativamente adicionar `text-center` na `motion.div` pai (linha 26) -- porem como o `<a>` e um elemento inline-block, a forma mais direta e envolver ou estilizar o link.

A solucao mais simples: adicionar uma `div` com `flex justify-center` ao redor do link, ou adicionar `text-center` diretamente na `motion.div` pai para que o botao herde o alinhamento central.

Como o `h2` e o `p` ja tem `text-center` individualmente, a abordagem mais limpa e adicionar `className="text-center"` na `motion.div` (linha 26), o que centralizara o botao automaticamente sem precisar de wrappers extras.

