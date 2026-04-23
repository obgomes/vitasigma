

# Reposicionar ícones nos cards de "Solicite seu Diagnóstico"

## Mudanças visuais

Inspirado na imagem de referência, os ícones serão movidos para o **canto direito** do card (em vez de centralizados no topo), aparecendo como **ilustrações grandes e translúcidas** que decoram o fundo. O card permanecerá **branco**, e o texto ficará alinhado à esquerda.

## Layout proposto

```text
┌─────────────────────────────┐
│ Título do Diagnóstico   ◐   │  ← ícone grande no canto direito
│ Descrição em duas         ◐ │     (colorido, semi-transparente)
│ linhas alinhada à esq.      │
│                             │
│ Acessar →                   │
└─────────────────────────────┘
```

## Detalhes de design

- **Fundo do card**: branco (`bg-card`) — mantido conforme solicitado
- **Ícone**: 
  - Posicionado absolutamente no canto direito vertical-centro
  - Tamanho grande (~96-112px)
  - Cor primária (azul da marca) com opacidade reduzida (~20-25%)
  - Sem o quadrado de fundo arredondado atual
- **Texto**: alinhado à esquerda (atualmente centralizado), com `z-index` acima do ícone para garantir legibilidade
- **Hover**: ícone aumenta levemente a opacidade e o card ganha sombra suave (mantém o comportamento existente)
- **Borda/sombra**: borda sutil mantida, com elevação no hover

## Arquivo afetado

- `src/components/DiagnosticsSection.tsx` — refatorar o JSX do card para:
  1. Adicionar `relative overflow-hidden` ao container
  2. Mover o ícone para um wrapper `absolute right-0 top-1/2 -translate-y-1/2` com opacidade reduzida
  3. Trocar `text-center` por `text-left` e adicionar `relative z-10` ao bloco de texto
  4. Remover o quadrado de fundo (`bg-primary/10`) ao redor do ícone

Nenhum outro arquivo precisa ser alterado.

