import Link from 'next/link';
import { courseModules, getTotalLessons } from '@/lib/courseData';

export default function Home() {
  const totalLessons = getTotalLessons();
  const totalModules = courseModules.length;

  return (
    <>
      {/* Hero */}
      <div className="home-hero">
        <h1>
          Bem-vindo à <span>Fábrica de<br />Infoprodutos com IA</span>
        </h1>
        <p>
          Crie, lance e venda produtos digitais 100% com Claude Code.
          {totalModules} módulos, {totalLessons} aulas — do setup ao primeiro anúncio no ar.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{totalLessons}</div>
          <div className="stat-label">Aulas no total</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{totalModules}</div>
          <div className="stat-label">Módulos</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">7d</div>
          <div className="stat-label">Prazo médio de lançamento</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">9</div>
          <div className="stat-label">Skills incluídas</div>
        </div>
      </div>

      {/* Start CTA */}
      <div style={{ marginBottom: '2rem' }}>
        <Link
          href="/aula/modulo-1/aula-1"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 2rem',
            background: 'var(--green)',
            color: '#000',
            borderRadius: '8px',
            fontWeight: '700',
            fontSize: '0.9rem',
            textDecoration: 'none',
          }}
        >
          ▶ Começar do Módulo 1
        </Link>
      </div>

      {/* Module grid */}
      <h2 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
        Todos os módulos
      </h2>
      <div className="modules-grid">
        {courseModules.map((mod) => (
          <Link
            key={mod.id}
            href={`/aula/${mod.id}/${mod.lessons[0].id}`}
            className="module-card"
          >
            <div className="mod-num">Módulo {mod.number}</div>
            <div className="mod-title">{mod.title}</div>
            <div className="mod-lessons">{mod.lessons.length} aulas · {mod.level}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
