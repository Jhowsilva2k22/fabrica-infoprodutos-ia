export interface Lesson {
  id: string;
  title: string;
  description: string;
}

export interface Module {
  id: string;
  number: string;
  title: string;
  level: string;
  lessons: Lesson[];
}

export const courseModules: Module[] = [
  {
    id: 'modulo-1',
    number: '01',
    title: 'A Virada de Chave',
    level: 'Fundamentos',
    lessons: [
      { id: 'aula-1', title: 'Por Que 99% das Pessoas Usam IA Errado', description: 'A diferença entre Usuário e Arquiteto de IA' },
      { id: 'aula-2', title: 'Claude Opus 4.6 vs. O Mercado', description: 'Por que esta IA domina para criadores de infoprodutos' },
      { id: 'aula-3', title: 'O Modelo Mental da Fábrica', description: 'Como pensar em sistemas, não em tarefas' },
      { id: 'aula-4', title: 'Sua Primeira Conversa Produtiva com o Claude', description: 'Técnicas de prompt avançado' },
    ],
  },
  {
    id: 'modulo-2',
    number: '02',
    title: 'Setup da Fábrica',
    level: 'Básico-Intermediário',
    lessons: [
      { id: 'aula-1', title: 'O Que é o Claude Code e Por Que Ele Muda Tudo', description: 'Skills, MCP, Background Agents, /loop' },
      { id: 'aula-2', title: 'Instalação e Configuração do Zero', description: 'Windows, Mac e Linux — passo a passo completo' },
      { id: 'aula-3', title: 'CLAUDE.md: O Arquivo Que Transforma o Claude no Seu Funcionário', description: 'Auto-memória e contexto persistente' },
      { id: 'aula-4', title: 'Estrutura de Pastas de um Projeto Profissional', description: 'Organize antes de criar' },
      { id: 'aula-5', title: 'Skills: Comandos Personalizados Que Automatizam Seu Fluxo', description: 'Crie sua primeira skill do zero' },
    ],
  },
  {
    id: 'modulo-3',
    number: '03',
    title: 'Construindo o Produto',
    level: 'Intermediário',
    lessons: [
      { id: 'aula-1', title: 'Validação de Nicho com IA', description: 'Saber se seu curso vai vender antes de criar' },
      { id: 'aula-2', title: 'Posicionamento Imbatível', description: 'Framework "Único Por Que Você"' },
      { id: 'aula-3', title: 'Skill criar-estrutura-curso', description: 'Módulos e aulas prontos em minutos' },
      { id: 'aula-4', title: 'Revisão Estratégica', description: 'Avaliar e ajustar para máxima retenção' },
    ],
  },
  {
    id: 'modulo-4',
    number: '04',
    title: 'Produção em Escala',
    level: 'Intermediário',
    lessons: [
      { id: 'aula-1', title: 'O Prompt Perfeito Para Conteúdo Didático', description: 'Como o Claude escreve igual a um professor' },
      { id: 'aula-2', title: 'Gerando Módulo por Módulo', description: 'Background Agents e paralelismo' },
      { id: 'aula-3', title: 'Revisão Inteligente', description: 'Claude revisando o próprio conteúdo' },
      { id: 'aula-4', title: 'Criando o Ebook Bônus', description: 'Um produto extra em 1 hora' },
    ],
  },
  {
    id: 'modulo-5',
    number: '05',
    title: 'Copy que Vende',
    level: 'Intermediário-Avançado',
    lessons: [
      { id: 'aula-1', title: 'Os 7 Gatilhos Mentais Que Mais Vendem no Brasil', description: 'Urgência, escassez, autoridade e mais' },
      { id: 'aula-2', title: 'Skill escrever-copy-vendas', description: 'Página de vendas completa em minutos' },
      { id: 'aula-3', title: 'Ajustando a Copy', description: 'Injetar sua voz e testar variações' },
      { id: 'aula-4', title: 'Sequência de Emails de Lançamento', description: '7 emails estilo Jeff Walker/Russell Brunson' },
    ],
  },
  {
    id: 'modulo-6',
    number: '06',
    title: 'A Vitrine Digital',
    level: 'Avançado',
    lessons: [
      { id: 'aula-1', title: 'Anatomia de Uma Landing Page Que Converte', description: 'Os 12 elementos obrigatórios' },
      { id: 'aula-2', title: 'Skill montar-pagina-vendas', description: 'Do copy ao HTML em minutos' },
      { id: 'aula-3', title: 'Publicando na Vercel via GitHub', description: 'Deploy automático em 5 minutos' },
      { id: 'aula-4', title: 'Criando o App Web com Next.js 16.2', description: 'Produto digital profissional' },
    ],
  },
  {
    id: 'modulo-7',
    number: '07',
    title: 'Publicação e Monetização',
    level: 'Avançado',
    lessons: [
      { id: 'aula-1', title: 'Por Que a Kiwify é a Melhor Plataforma em 2026', description: 'Análise completa de plataformas' },
      { id: 'aula-2', title: 'Skill configurar-kiwify', description: 'Checklist completo de configuração' },
      { id: 'aula-3', title: 'Checkout de Alta Conversão', description: 'Order bumps, upsells e pixel' },
      { id: 'aula-4', title: 'Conectando Tudo', description: 'Kiwify + Vercel + Email + Página no mesmo fluxo' },
    ],
  },
  {
    id: 'modulo-8',
    number: '08',
    title: 'Tráfego Pago',
    level: 'Avançado',
    lessons: [
      { id: 'aula-1', title: 'Meta Ads Para Infoprodutos em 2026', description: 'Estrutura de campanha com motor Andromeda' },
      { id: 'aula-2', title: 'Skill gerar-criativos-ads', description: '5 variações de anúncio em minutos' },
      { id: 'aula-3', title: 'Segmentação com Advantage+', description: 'Como o Meta encontra seu comprador ideal' },
      { id: 'aula-4', title: 'Analisando Resultados e Escalando', description: 'Do primeiro venda ao lucro consistente' },
    ],
  },
  {
    id: 'modulo-bonus',
    number: 'B',
    title: 'Módulo Bônus — Acelerador',
    level: 'Extra',
    lessons: [
      { id: 'aula-1', title: 'Lançamento Perpétuo vs. Lançamento Semente', description: 'Qual estratégia usar primeiro' },
      { id: 'aula-2', title: 'Criando Seu Segundo Produto em 48 Horas', description: 'Usando o sistema já construído' },
      { id: 'aula-3', title: '/loop, Background Agents e Computer Use', description: 'Automação avançada' },
      { id: 'aula-4', title: 'Comunidade, Suporte e Atualizações', description: 'Sua jornada não para aqui' },
    ],
  },
];

export function getTotalLessons(): number {
  return courseModules.reduce((acc, mod) => acc + mod.lessons.length, 0);
}

export function getModuleById(moduleId: string): Module | undefined {
  return courseModules.find((m) => m.id === moduleId);
}

export function getLessonIndex(moduleId: string, lessonId: string): number {
  let index = 0;
  for (const mod of courseModules) {
    for (const lesson of mod.lessons) {
      if (mod.id === moduleId && lesson.id === lessonId) return index;
      index++;
    }
  }
  return -1;
}

export function getLessonNav(moduleId: string, lessonId: string) {
  const allLessons: { moduleId: string; lessonId: string; title: string }[] = [];
  for (const mod of courseModules) {
    for (const lesson of mod.lessons) {
      allLessons.push({ moduleId: mod.id, lessonId: lesson.id, title: lesson.title });
    }
  }
  const idx = allLessons.findIndex((l) => l.moduleId === moduleId && l.lessonId === lessonId);
  return {
    prev: idx > 0 ? allLessons[idx - 1] : null,
    next: idx < allLessons.length - 1 ? allLessons[idx + 1] : null,
    current: allLessons[idx] || null,
    index: idx,
    total: allLessons.length,
  };
}
