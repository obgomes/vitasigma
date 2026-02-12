

# Ajustes Visuais e Nova Secao de Diagnosticos

## 1. Logo no Navbar - Aumentar e reposicionar

- Aumentar ambos os logos (branco e colorido) para o mesmo tamanho maior (`h-14 md:h-16`)
- Posicionar mais para a direita usando `ml-auto` ou ajuste no layout flex
- Quando scrollado (fundo branco), colocar o logo colorido dentro de uma caixa com borda arredondada e sombra leve para destaque visual

## 2. Hero - Trocar titulo

- Alterar "Tecnologia e Engenharia aplicadas a Seguranca do Trabalho" para **"Tecnologia, Medicina e Seguranca do Trabalho"**

## 3. Nova secao: Diagnosticos

- Criar componente `DiagnosticsSection.tsx` com `id="diagnosticos"`
- Posicionar entre o Hero e a secao Problema no `Index.tsx`
- 3 cards clicaveis que abrem links externos:
  - **Medicina e Seguranca** - link externo (placeholder por agora)
  - **NR-1 Psicossocial** - link externo (placeholder por agora)
  - **Diagnostico Inicial** - link externo (placeholder por agora)
- Cards com icones, titulo e breve descricao
- Visual limpo e compacto

## 4. Linhas separadoras entre secoes

- Adicionar `<Separator />` (ou `<hr>`) entre todas as secoes no `Index.tsx` para criar divisao visual horizontal

## 5. Reduzir altura/espacamento de todas as secoes

Reduzir o padding vertical de cada secao para ficar menos espacado:

| Componente | Atual | Novo |
|---|---|---|
| ProblemSection | `py-20 lg:py-28` | `py-12 lg:py-16` |
| SolutionSection | `py-14 lg:py-20` | `py-10 lg:py-14` |
| ServicesSection | `py-20 lg:py-28` | `py-12 lg:py-16` |
| ExamsSection | `py-20 lg:py-28` | `py-12 lg:py-16` |
| TechnologySection | `py-14 lg:py-20` | `py-10 lg:py-14` |
| DifferentialsSection | `py-20 lg:py-28` | `py-12 lg:py-16` |
| SegmentsSection | `py-20 lg:py-28` | `py-12 lg:py-16` |
| BlogPreviewSection | `py-20 lg:py-28` | `py-12 lg:py-16` |
| CTASection | `py-20 lg:py-28` | `py-12 lg:py-16` |

Tambem reduzir `mb-14` dos cabecalhos para `mb-8` em todas as secoes.

---

## Detalhes Tecnicos

**Arquivos modificados:**
- `src/components/Navbar.tsx` - logo maior, caixa quando scrollado
- `src/components/HeroSection.tsx` - novo titulo
- `src/components/DiagnosticsSection.tsx` - novo componente
- `src/pages/Index.tsx` - adicionar DiagnosticsSection + separadores entre secoes
- `src/components/ProblemSection.tsx` - reduzir padding
- `src/components/SolutionSection.tsx` - reduzir padding
- `src/components/ServicesSection.tsx` - reduzir padding
- `src/components/ExamsSection.tsx` - reduzir padding
- `src/components/TechnologySection.tsx` - reduzir padding
- `src/components/DifferentialsSection.tsx` - reduzir padding
- `src/components/SegmentsSection.tsx` - reduzir padding
- `src/components/BlogPreviewSection.tsx` - reduzir padding
- `src/components/CTASection.tsx` - reduzir padding
