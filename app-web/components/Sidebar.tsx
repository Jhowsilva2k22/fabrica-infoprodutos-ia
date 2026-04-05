'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { courseModules, getTotalLessons } from '@/lib/courseData';

export default function Sidebar() {
  const pathname = usePathname();
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [openModules, setOpenModules] = useState<Set<string>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Parse current module/lesson from pathname
  const parts = pathname.split('/').filter(Boolean);
  const currentModule = parts[1] || '';
  const currentLesson = parts[2] || '';

  useEffect(() => {
    const raw = localStorage.getItem('fabrica_completed');
    if (raw) {
      try { setCompleted(new Set(JSON.parse(raw))); } catch {}
    }
    // Open current module by default
    if (currentModule) {
      setOpenModules(new Set([currentModule]));
    } else {
      setOpenModules(new Set(['modulo-1']));
    }
  }, [currentModule]);

  // Re-read completed when navigating
  useEffect(() => {
    const handler = () => {
      const raw = localStorage.getItem('fabrica_completed');
      if (raw) {
        try { setCompleted(new Set(JSON.parse(raw))); } catch {}
      }
    };
    window.addEventListener('fabrica_progress', handler);
    return () => window.removeEventListener('fabrica_progress', handler);
  }, []);

  const toggleModule = (moduleId: string) => {
    setOpenModules((prev) => {
      const next = new Set(prev);
      if (next.has(moduleId)) next.delete(moduleId);
      else next.add(moduleId);
      return next;
    });
  };

  const totalLessons = getTotalLessons();
  const completedCount = completed.size;
  const progressPct = Math.round((completedCount / totalLessons) * 100);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setSidebarOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Overlay */}
      <div
        className={`sidebar-overlay${sidebarOpen ? ' open' : ''}`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <nav className={`sidebar${sidebarOpen ? ' open' : ''}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <Link href="/" onClick={closeSidebar} style={{ textDecoration: 'none' }}>
            <h2>Fábrica de Infoprodutos</h2>
            <p>com IA — Claude Code</p>
          </Link>
        </div>

        {/* Progress */}
        <div className="sidebar-progress">
          <div className="progress-label">
            <span>Progresso do curso</span>
            <span>{completedCount}/{totalLessons} aulas ({progressPct}%)</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        {/* Module list */}
        {courseModules.map((mod) => {
          const isOpen = openModules.has(mod.id);
          const isBonus = mod.id === 'modulo-bonus';
          return (
            <div key={mod.id} className="module-group">
              <div className="module-header" onClick={() => toggleModule(mod.id)}>
                <span className={`module-number${isBonus ? ' bonus' : ''}`}>
                  {mod.number}
                </span>
                <span className="module-title-text">{mod.title}</span>
                <span className={`module-toggle${isOpen ? ' open' : ''}`}>▼</span>
              </div>

              {isOpen && (
                <div className="lesson-list">
                  {mod.lessons.map((lesson) => {
                    const key = `${mod.id}/${lesson.id}`;
                    const isActive =
                      currentModule === mod.id && currentLesson === lesson.id;
                    const isDone = completed.has(key);

                    return (
                      <Link
                        key={lesson.id}
                        href={`/aula/${mod.id}/${lesson.id}`}
                        className={`lesson-link${isActive ? ' active' : ''}`}
                        onClick={closeSidebar}
                      >
                        <span className={`lesson-check${isDone ? ' done' : ''}`}>
                          {isDone ? '✓' : ''}
                        </span>
                        {lesson.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
