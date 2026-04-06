import { readFileSync, existsSync } from 'fs';
import path from 'path';
import Link from 'next/link';
import { courseModules, getModuleById, getLessonNav } from '@/lib/courseData';
import LessonClient from './LessonClient';

export async function generateStaticParams() {
  const params: { modulo: string; aula: string }[] = [];
  for (const mod of courseModules) {
    for (const lesson of mod.lessons) {
      params.push({ modulo: mod.id, aula: lesson.id });
    }
  }
  return params;
}

interface Props {
  params: Promise<{ modulo: string; aula: string }>;
}

export default async function LessonPage({ params }: Props) {
  const { modulo, aula } = await params;

  const contentPath = path.join(process.cwd(), 'content', modulo, `${aula}.md`);
  let content = '';
  if (existsSync(contentPath)) {
    content = readFileSync(contentPath, 'utf-8');
  } else {
    content = `# Conteúdo em Breve\n\nEsta aula será publicada em breve. Fique de olho nas atualizações!`;
  }

  const mod = getModuleById(modulo);
  const lesson = mod?.lessons.find((l) => l.id === aula);
  const nav = getLessonNav(modulo, aula);

  return (
    <div className="lesson-wrap">
      {/* Topbar */}
      <div className="lesson-topbar">
        <div className="lesson-breadcrumb">
          <Link href="/">Início</Link>
          <span className="sep">›</span>
          <span>Módulo {mod?.number}</span>
          <span className="sep">›</span>
          <span className="current">{lesson?.title}</span>
        </div>
        <span className="lesson-badge">Módulo {mod?.number}</span>
        <span className="lesson-counter">Aula {nav.index + 1} de {nav.total}</span>
      </div>

      {/* Lesson header */}
      <div className="lesson-header">
        <h1 className="lesson-title">{lesson?.title ?? aula}</h1>
        {lesson?.description && (
          <p className="lesson-description">{lesson.description}</p>
        )}
      </div>

      {/* Content + completion */}
      <LessonClient
        content={content}
        lessonKey={`${modulo}/${aula}`}
      />

      {/* Navigation */}
      <div className="lesson-nav">
        {nav.prev ? (
          <Link
            href={`/aula/${nav.prev.moduleId}/${nav.prev.lessonId}`}
            className="nav-btn prev"
          >
            <span className="nav-btn-arrow">←</span>
            <div className="nav-btn-text">
              <div className="nav-btn-label">Aula anterior</div>
              <div className="nav-btn-title">{nav.prev.title}</div>
            </div>
          </Link>
        ) : (
          <Link href="/" className="nav-btn prev">
            <span className="nav-btn-arrow">←</span>
            <div className="nav-btn-text">
              <div className="nav-btn-label">Voltar</div>
              <div className="nav-btn-title">Dashboard</div>
            </div>
          </Link>
        )}

        {nav.next ? (
          <Link
            href={`/aula/${nav.next.moduleId}/${nav.next.lessonId}`}
            className="nav-btn next"
          >
            <span className="nav-btn-arrow">→</span>
            <div className="nav-btn-text">
              <div className="nav-btn-label">Próxima aula</div>
              <div className="nav-btn-title">{nav.next.title}</div>
            </div>
          </Link>
        ) : (
          <Link href="/" className="nav-btn next">
            <span className="nav-btn-arrow">→</span>
            <div className="nav-btn-text">
              <div className="nav-btn-label">Fim do curso</div>
              <div className="nav-btn-title">Ver dashboard</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
