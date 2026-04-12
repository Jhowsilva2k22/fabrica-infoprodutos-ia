'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { courseModules, getTotalLessons } from '@/lib/courseData';

export default function Sidebar() {
  const pathname = usePathname();

  // Não mostrar sidebar nas páginas de login/recuperação
  if (pathname.startsWith('/login')) return null;

  // Parse current module/lesson from pathname
  const parts = pathname.split('/').filter(Boolean);
  const currentModule = parts[1] || '';
  const currentLesson = parts[2] || '';

  // Initialize openModules synchronously from pathname to avoid hydration mismatch
  const initialOpen = currentModule || 'modulo-1';
  const [openModules, setOpenModules] = useState<string[]>([initialOpen]);

  const [completed, setCompleted] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const raw = localStorage.getItem('fabrica_completed');
    if (raw) {
      try { setCompleted(JSON.parse(raw)); } catch {}
    }
    // Ensure current module is open after mount
    if (currentModule && !openModules.includes(currentModule)) {
      setOpenModules((prev) => [...prev, currentModule]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-read completed when a lesson is toggled
  useEffect(() => {
    const handler = () => {
      const raw = localStorage.getItem('fabrica_completed');
      if (raw) {
        try { setCompleted(JSON.parse(raw)); } catch {}
      }
    };
    window.addEventListener('fabrica_progress', handler);
    return () => window.removeEventListener('fabrica_progress', handler);
  }, []);

  const toggleModule = (moduleId: string) => {
    setOpenModules((prev) =>
      prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]
    );
  };

  const totalLessons = getTotalLessons();
  const completedSet = new Set(completed);
  const completedCount = mounted ? completedSet.size : 0;
  const progressPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen((v) => !v)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      {/* Overlay */}
      <div
        className={`sidebar-overlay${sidebarOpen ? ' open' : ''}`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <nav className={`sidebar${sidebarOpen ? ' open' : ''}`}>
        {/* Brand */}
        <div className="sidebar-brand">
          <Link href="/" onClick={closeSidebar} style={{ textDecoration: 'none' }}>
            <div className="sidebar-brand-inner">
              <div className="brand-icon">🏭</div>
              <div className="brand-text">
                <span className="brand-name">Fábrica de Infoprodutos</span>
                <span className="brand-sub">com IA — Claude Code</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Progress */}
        <div className="sidebar-progress">
          <div className="progress-label">
            <span>Progresso</span>
            <span suppressHydrationWarning>{completedCount}/{totalLessons} ({progressPct}%)</span>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progressPct}%` }}
              suppressHydrationWarning
            />
          </div>
        </div>

        {/* Module list */}
        <div className="sidebar-nav">
          {courseModules.map((mod) => {
            const isOpen = openModules.includes(mod.id);
            const isActive = currentModule === mod.id;

            return (
              <div key={mod.id} className="module-item">
                <button
                  className={`module-header${isActive ? ' active' : ''}`}
                  onClick={() => toggleModule(mod.id)}
                >
                  <span className="module-number">{mod.number}</span>
                  <span className="module-title">{mod.title}</span>
                  <span className={`module-chevron${isOpen ? ' open' : ''}`}>▶</span>
                </button>

                {isOpen && (
                  <div className="lesson-list">
                    {mod.lessons.map((lesson) => {
                      const key = `${mod.id}/${lesson.id}`;
                      const isLessonActive =
                        currentModule === mod.id && currentLesson === lesson.id;
                      const isDone = mounted && completedSet.has(key);

                      return (
                        <Link
                          key={lesson.id}
                          href={`/aula/${mod.id}/${lesson.id}`}
                          className={`lesson-link${isLessonActive ? ' active' : ''}`}
                          onClick={closeSidebar}
                        >
                          <span className={`lesson-dot${isDone ? ' done' : ''}`} suppressHydrationWarning>
                            {isDone ? '✓' : ''}
                          </span>
                          <span className="lesson-title-text">{lesson.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ebook Download */}
        <div className="sidebar-ebook">
          <a
            href="/ebook-modo-fabrica.pdf"
            download="MODO-FABRICA-Guia-Rapido.pdf"
            className="sidebar-ebook-link"
          >
            📘 Baixar Ebook — Modo Fábrica
          </a>
        </div>

        {/* Footer */}
        <div className="sidebar-footer">
          <Link href="/" onClick={closeSidebar} className="sidebar-home-link">
            🏠 Início — Dashboard
          </Link>
          <Link href="/configuracoes" onClick={closeSidebar} className="sidebar-home-link">
            ⚙️ Configurações
          </Link>
        </div>
      </nav>
    </>
  );
}
