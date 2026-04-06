import Link from 'next/link';
import { courseModules, getTotalLessons } from '@/lib/courseData';

const MODULE_ICONS: Record<string, string> = {
  'modulo-1': '🔑',
  'modulo-2': '⚙️',
  'modulo-3': '🏗️',
  'modulo-4': '🏭',
  'modulo-5': '✍️',
  'modulo-6': '🖥️',
  'modulo-7': '💰',
  'modulo-8': '🚀',
  'modulo-bonus': '🎁',
};

export default function Home() {
  const totalLessons = getTotalLessons();
  const totalModules = courseModules.length;

  return (
    <div className="home-wrap">
      {/* Eyebrow */}
      <div className="home-eyebrow">
        ✦ Curso Completo — Claude Code
      </div>

      {/* Hero */}
      <h1 className="home-title">
        Bem-vindo à <span>Fábrica de<br />Infoprodutos com IA</span>
      </h1>
      <p className="home-desc">
        Crie, lance e venda produtos digitais 100% com Claude Code.
        {' '}{totalModules} módulos, {totalLessons} aulas — do setup ao primeiro anúncio no ar.
      </p>

      {/* Start CTA */}
      <Link href="/aula/modulo-1/aula-1" className="start-cta">
        ▶ Começar pelo Módulo 1
      </Link>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{totalLessons}</div>
          <div className="stat-label">Aulas no total</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{totalModules}</div>
          <div className="stat-label">Módulos</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">7d</div>
          <div className="stat-label">Prazo de lançamento</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">9</div>
          <div className="stat-label">Skills incluídas</div>
        </div>
      </div>

      {/* Module list */}
      <div className="section-heading">
        <h2 className="section-title">Todos os módulos</h2>
        <span className="section-count">{totalModules} módulos</span>
      </div>

      <div className="modules-grid">
        {courseModules.map((mod) => (
          <Link
            key={mod.id}
            href={`/aula/${mod.id}/${mod.lessons[0].id}`}
            className="module-card"
          >
            <div className="module-card-icon">
              {MODULE_ICONS[mod.id] ?? '📚'}
            </div>
            <div className="module-card-body">
              <div className="module-card-meta">
                <span className="module-card-num">M{mod.number}</span>
                <span className="module-card-level">{mod.level}</span>
              </div>
              <div className="module-card-title">{mod.title}</div>
              <div className="module-card-lessons">{mod.lessons.length} aulas</div>
            </div>
            <span className="module-card-arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
