
# VitaSigma – Site Institucional Tech & SSO

## Visão Geral
Site institucional one-page moderno, tecnológico e premium para a VitaSigma, com blog indexável e chatbot IA. Paleta azul institucional + cinza tecnológico + branco. Uso dos personagens Engenheira Vita e Dr. Sigma. Backend com Lovable Cloud para blog e chatbot.

---

## Fase 1 – Estrutura Base e Identidade Visual

- Configurar paleta de cores (azul institucional, cinza tech, branco) e tipografia premium
- Adicionar logo VitaSigma e imagens dos personagens ao projeto
- Criar layout base one-page com navegação fixa no topo (scroll suave entre seções)
- Responsivo para desktop e mobile

## Fase 2 – Seções do One Page

### Hero
- Título: "Tecnologia e Engenharia aplicadas à Segurança do Trabalho"
- Subtítulo sobre gestão estratégica
- Dois CTAs: "Falar com especialista" (WhatsApp + formulário) e "Solicitar diagnóstico"
- Imagem da Engenheira Vita

### O Problema
- Seção com dores do mercado de SST (desorganização, multas, riscos)

### A Solução VitaSigma
- Como a VitaSigma resolve com tecnologia + expertise

### Serviços
- Cards/grid com: PGR, PCMSO, LTCAT, eSocial SST, SESMT Terceirizado, NR-1 Riscos Psicossociais, Treinamentos, Auditorias

### Gestão de Exames com Abrangência Nacional
- Seção de destaque visual forte
- Lista de exames (admissionais, periódicos, etc.)
- Controle de vencimentos, convocação, integração eSocial
- Destaque: abrangência nacional via rede credenciada

### Tecnologia – VitaSigma Dashboard
- Visual estilo SaaS moderno
- Features: controle de vencimentos, indicadores, gestão documental, alertas, relatórios, acesso centralizado

### Diferenciais
- Tecnologia própria, abrangência nacional, equipe especializada, atendimento humanizado

### Segmentos Atendidos
- Indústria, construção civil, saúde, comércio, etc.

### CTA Final
- Formulário de contato/lead + botão WhatsApp
- Formulário captura: nome, empresa, email, telefone, mensagem

### Rodapé
- Logo, links, contato, redes sociais

## Fase 3 – Blog com Backend (Lovable Cloud)

- Ativar Lovable Cloud com banco de dados
- Tabela de artigos: título, slug, resumo, conteúdo, imagem, tempo de leitura, meta description, data
- Seção Blog no one-page com cards dos artigos mais recentes
- Páginas individuais com URL própria (/blog/slug-do-artigo)
- SEO: H1, H2, meta tags, schema de artigo
- Painel admin simples para criar/editar artigos (rota protegida)
- Artigos iniciais de exemplo sobre PGR, NR-1, exames ocupacionais

## Fase 4 – Chatbot IA (Engenheira Vita)

- Ativar Lovable AI
- Criar edge function para chatbot com system prompt especializado em NRs, PGR, PCMSO, eSocial SST, serviços VitaSigma
- Botão flutuante com avatar da Engenheira Vita
- Chat com streaming de respostas
- Respostas em markdown renderizado
- Escopo restrito a temas de SST e serviços VitaSigma
