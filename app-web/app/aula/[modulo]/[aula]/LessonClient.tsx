'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';

interface Props {
  content: string;
  lessonKey: string;
}

export default function LessonClient({ content, lessonKey }: Props) {
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const raw = localStorage.getItem('fabrica_completed');
    if (raw) {
      try {
        const arr: string[] = JSON.parse(raw);
        setDone(arr.includes(lessonKey));
      } catch {}
    }
  }, [lessonKey]);

  const toggleComplete = () => {
    const raw = localStorage.getItem('fabrica_completed');
    let arr: string[];
    try {
      arr = raw ? JSON.parse(raw) : [];
    } catch {
      arr = [];
    }

    if (done) {
      arr = arr.filter((k) => k !== lessonKey);
    } else {
      if (!arr.includes(lessonKey)) arr.push(lessonKey);
    }

    localStorage.setItem('fabrica_completed', JSON.stringify(arr));
    setDone(!done);
    window.dispatchEvent(new Event('fabrica_progress'));
  };

  return (
    <>
      {/* Markdown content */}
      <div className="lesson-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>

      {/* Completion */}
      <div className="lesson-completion">
        <div
          className={`completion-checkbox${mounted && done ? ' checked' : ''}`}
          onClick={mounted ? toggleComplete : undefined}
          role="checkbox"
          aria-checked={mounted ? done : false}
          suppressHydrationWarning
        >
          {mounted && done ? '✓' : ''}
        </div>
        <div className="completion-text">
          <div className="completion-label" onClick={mounted ? toggleComplete : undefined}>
            {mounted && done ? 'Aula concluída ✓' : 'Marcar aula como concluída'}
          </div>
          <div className="completion-sublabel">
            {mounted && done
              ? 'Progresso salvo — continue para a próxima aula'
              : 'Marque quando terminar para rastrear seu progresso'}
          </div>
        </div>
      </div>
    </>
  );
}
