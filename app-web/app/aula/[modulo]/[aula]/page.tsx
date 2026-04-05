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
    content = `# Conteúdo em Breve\n\nEsta aula será publicada em breve.`;
  }

  const mod = getModuleById(modulo);
  const lesson = mod?.lessons.find((l) => l.id === aula);
  const nav = getLessonNav(modulo, aula);

  return (
    <div>
      {/* Top bar */}
      <div className="top-bar">
        <div className="breadcrumb">
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            Início
          </Link>
          {' › '}
          <span>Módulo {mod?.number}</span>
          {' › '}
          {lesson?.title}
        </div>
        <div className="lesson-counter">
          Aula {nav.index + 1} de {nav.total}
        </div>
      </div>

      {/* Lesson content + complete button */}
      <LessonClient content={content} lessonKey={`${modulo}/${aula}`} />

      {/* Navigation */}
      <div className="lesson-nav">
        {nav.prev ? (
          <Link
            href={`/aula/${nav.prev.moduleId}/${nav.prev.lessonId}`}
            className="btn-nav"
          >
            ← {nav.prev.title}
          </Link>
        ) : (
          <Link href="/" className="btn-nav">
            ← Início
          </Link>
        )}
        {nav.next && (
          <Link
            href={`/aula/${nav.next.moduleId}/${nav.next.lessonId}`}
            className="btn-nav primary"
          >
            {nav.next.title} →
          </Link>
        )}
      </div>
    </div>
  );
}
