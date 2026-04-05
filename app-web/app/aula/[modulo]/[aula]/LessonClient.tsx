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

  useEffect(() => {
    const raw = localStorage.getItem('fabrica_completed');
    if (raw) {
      try {
        const set = new Set<string>(JSON.parse(raw));
        setDone(set.has(lessonKey));
      } catch {}
    }
  }, [lessonKey]);

  const toggleComplete = () => {
    const raw = localStorage.getItem('fabrica_completed');
    let set: Set<string>;
    try {
      set = new Set<string>(raw ? JSON.parse(raw) : []);
    } catch {
      set = new Set<string>();
    }
    if (done) {
      set.delete(lessonKey);
    } else {
      set.add(lessonKey);
    }
    localStorage.setItem('fabrica_completed', JSON.stringify([...set]));
    setDone(!done);
    window.dispatchEvent(new Event('fabrica_progress'));
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
        <button
          className={`btn-complete${done ? ' done' : ''}`}
          onClick={toggleComplete}
        >
          {done ? '✓ Concluída' : '◯ Marcar como concluída'}
        </button>
      </div>

      <div className="lesson-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </>
  );
}
