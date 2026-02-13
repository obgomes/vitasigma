
# Corrigir titulo cortado ao navegar pelo menu

## Problema

A barra de navegacao e fixa (`position: fixed`) e ocupa aproximadamente 70-80px no topo da tela. Quando o menu rola a pagina ate uma secao, o `scrollIntoView` posiciona o topo da secao exatamente no topo da janela -- ficando atras da navbar, cortando o titulo.

## Solucao

Adicionar `scroll-margin-top` em todas as secoes do site via CSS global. Isso faz o navegador considerar um deslocamento ao rolar para um elemento ancorado, compensando a altura da navbar.

## Secao tecnica

**Arquivo alterado:** `src/index.css`

Adicionar uma regra CSS que aplica `scroll-margin-top` a todas as secoes com `id`:

```css
section[id] {
  scroll-margin-top: 5rem; /* 80px - altura da navbar */
}
```

Essa unica regra resolve o problema para todas as secoes (`#hero`, `#servicos`, `#exames`, `#tecnologia`, `#diferenciais`, `#blog`, `#contato`) sem precisar alterar nenhum componente individualmente.
