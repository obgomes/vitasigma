export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  content: string; // markdown-like simple HTML paragraphs
  date: string; // ISO
  readTime: string;
  category: string;
  author: string;
}

// Datas das últimas 3 semanas (referência: 23/abr/2026)
export const blogPosts: BlogPost[] = [
  {
    slug: "nr-1-riscos-psicossociais-2026",
    title: "NR-1 e Riscos Psicossociais: o que muda em 2026",
    summary:
      "A atualização da NR-1 tornou obrigatória a avaliação de riscos psicossociais. Entenda como adequar o PGR da sua empresa e evitar passivos trabalhistas.",
    date: "2026-04-20",
    readTime: "7 min",
    category: "Segurança do Trabalho",
    author: "Equipe VitaSigma",
    content: `
<p>A nova redação da <strong>NR-1</strong> trouxe um marco para a saúde e segurança ocupacional no Brasil: a inclusão obrigatória dos <strong>riscos psicossociais</strong> no Programa de Gerenciamento de Riscos (PGR). Estresse crônico, assédio moral, sobrecarga de trabalho e burnout passam a ser tratados com o mesmo rigor de riscos físicos e químicos.</p>

<h2>O que são riscos psicossociais?</h2>
<p>São condições ligadas à organização do trabalho que podem afetar a saúde mental e física dos colaboradores. Incluem jornadas excessivas, falta de autonomia, conflitos interpessoais e ausência de reconhecimento.</p>

<h2>Como se adequar</h2>
<ul>
  <li>Atualizar o PGR incluindo a matriz de riscos psicossociais.</li>
  <li>Aplicar instrumentos validados de avaliação (questionários, entrevistas).</li>
  <li>Definir plano de ação com metas mensuráveis.</li>
  <li>Capacitar lideranças sobre saúde mental no trabalho.</li>
</ul>

<h2>Como a VitaSigma ajuda</h2>
<p>Nossa equipe integra <strong>tecnologia + medicina + SST</strong> para mapear riscos psicossociais com dashboards em tempo real, garantindo conformidade com a NR-1 e protegendo sua empresa de passivos.</p>
    `,
  },
  {
    slug: "agendamento-exames-ocupacionais-soc",
    title: "Agendamento de Exames Ocupacionais via Sistema SOC: guia completo",
    summary:
      "Admissionais, periódicos, demissionais e de retorno ao trabalho — descubra como o Sistema SOC integrado à VitaSigma agiliza toda a gestão de ASOs.",
    date: "2026-04-13",
    readTime: "6 min",
    category: "Medicina Ocupacional",
    author: "Equipe VitaSigma",
    content: `
<p>O <strong>Sistema SOC</strong> é referência nacional na gestão de saúde ocupacional. Integrado à plataforma VitaSigma, ele permite agendar, acompanhar e arquivar todos os exames exigidos pela legislação trabalhista de forma 100% digital.</p>

<h2>Tipos de exames ocupacionais</h2>
<ul>
  <li><strong>Admissional</strong> — antes do início das atividades.</li>
  <li><strong>Periódico</strong> — conforme PCMSO e idade do colaborador.</li>
  <li><strong>Mudança de função</strong> — quando há alteração de risco.</li>
  <li><strong>Retorno ao trabalho</strong> — após afastamento ≥ 30 dias.</li>
  <li><strong>Demissional</strong> — até 10 dias antes do desligamento.</li>
</ul>

<h2>Vantagens da gestão integrada</h2>
<p>Com o SOC + VitaSigma, sua empresa elimina planilhas, recebe alertas automáticos de vencimento de ASO e tem o eSocial sempre atualizado. Tudo isso com clínicas credenciadas em todo o território nacional.</p>

<h2>Comece agora</h2>
<p>Solicite seu diagnóstico gratuito e descubra como reduzir em até 60% o tempo gasto com gestão de exames ocupacionais.</p>
    `,
  },
  {
    slug: "esocial-sst-conformidade-digital",
    title: "eSocial SST: como garantir conformidade digital sem dor de cabeça",
    summary:
      "Eventos S-2210, S-2220 e S-2240: entenda os prazos, multas e como a tecnologia da VitaSigma automatiza o envio de informações de SST ao eSocial.",
    date: "2026-04-06",
    readTime: "5 min",
    category: "Tecnologia & Compliance",
    author: "Equipe VitaSigma",
    content: `
<p>O <strong>eSocial</strong> consolidou em uma única plataforma as obrigações trabalhistas, previdenciárias e fiscais. Para a área de SST, três eventos exigem atenção máxima:</p>

<h2>Eventos críticos de SST</h2>
<ul>
  <li><strong>S-2210</strong> — Comunicação de Acidente de Trabalho (CAT), até o 1º dia útil seguinte.</li>
  <li><strong>S-2220</strong> — Monitoramento da Saúde do Trabalhador (ASO).</li>
  <li><strong>S-2240</strong> — Condições Ambientais do Trabalho (agentes nocivos).</li>
</ul>

<h2>Multas por descumprimento</h2>
<p>Atrasos ou inconsistências podem gerar multas de R$ 1.812,87 a R$ 181.284,63 por evento, além de autuações em fiscalizações do MTE.</p>

<h2>Automação com VitaSigma</h2>
<p>Nossa plataforma gera os eventos automaticamente a partir dos dados de exames, laudos e CATs registrados, com validação em tempo real e dashboards de conformidade. Reduza retrabalho e durma tranquilo.</p>

<h2>Próximo passo</h2>
<p>Fale com nossos especialistas e descubra como integrar seu RH ao eSocial SST com segurança e agilidade.</p>
    `,
  },
];

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
