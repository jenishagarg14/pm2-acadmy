import React, { useState, useEffect, useRef } from 'react';
import { useLms } from '../context/LmsContext';
import { coursesData } from '../data/coursesData';
import { quizzesData } from '../data/quizzesData';
import { revisionData } from '../data/revisionData';
import { resourcesData } from '../data/resourcesData';
import {
  Search,
  X,
  BookOpen,
  FileText,
  HelpCircle,
  BookmarkCheck,
  ChevronRight,
  Download
} from 'lucide-react';

export default function GlobalSearchModal() {
  const { isSearchOpen, setIsSearchOpen, openLesson, setActiveTab } = useLms();
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchTerm('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const query = searchTerm.toLowerCase().trim();

  // Aggregate search results
  const results = {
    lessons: [],
    glossary: [],
    cheatSheets: [],
    quizzes: [],
    courses: []
  };

  if (query.length > 1) {
    // Search in Courses and Lessons
    coursesData.forEach((course) => {
      if (course.title.toLowerCase().includes(query) || course.description.toLowerCase().includes(query)) {
        results.courses.push(course);
      }

      course.modules.forEach((mod) => {
        mod.lessons.forEach((lesson) => {
          if (
            lesson.title.toLowerCase().includes(query) ||
            lesson.summary.toLowerCase().includes(query) ||
            lesson.content.simpleExplanation.toLowerCase().includes(query)
          ) {
            results.lessons.push({
              ...lesson,
              courseId: course.id,
              courseTitle: course.title
            });
          }
        });
      });
    });

    // Search in Glossary
    revisionData.glossary.forEach((item) => {
      if (item.term.toLowerCase().includes(query) || item.definition.toLowerCase().includes(query)) {
        results.glossary.push(item);
      }
    });

    // Search in Cheat Sheets
    revisionData.cheatSheets.forEach((cs) => {
      if (cs.title.toLowerCase().includes(query) || cs.description.toLowerCase().includes(query)) {
        results.cheatSheets.push(cs);
      }
    });

    // Search in Quizzes
    quizzesData.forEach((q) => {
      if (q.title.toLowerCase().includes(query) || q.description.toLowerCase().includes(query)) {
        results.quizzes.push(q);
      }
    });
  }

  const totalResults =
    results.lessons.length +
    results.glossary.length +
    results.cheatSheets.length +
    results.quizzes.length +
    results.courses.length;

  const handleOpenLesson = (courseId, lessonId) => {
    openLesson(courseId, lessonId);
    setIsSearchOpen(false);
  };

  const handleNavigate = (tab) => {
    setActiveTab(tab);
    setIsSearchOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type to search topics, status codes, SQL, Python, frameworks..."
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="ml-2 px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            Esc
          </button>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {query.length <= 1 ? (
            <div className="py-8 text-center text-slate-400 text-sm">
              <p className="font-medium text-slate-600 dark:text-slate-300">Quick Search Across PM2 LMS</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for: <span className="text-indigo-500 font-mono">401</span>, <span className="text-indigo-500 font-mono">SELECT</span>, <span className="text-indigo-500 font-mono">Webhooks</span>, <span className="text-indigo-500 font-mono">FastAPI</span>, <span className="text-indigo-500 font-mono">OWASP</span>
              </p>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              No matching results found for "<span className="font-semibold">{searchTerm}</span>".
            </div>
          ) : (
            <>
              {/* Lessons Results */}
              {results.lessons.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5" /> Interactive Lessons ({results.lessons.length})
                  </h3>
                  <div className="space-y-1">
                    {results.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => handleOpenLesson(lesson.courseId, lesson.id)}
                        className="w-full text-left p-3 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/40 border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900/50 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                            {lesson.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                            {lesson.courseTitle} · {lesson.duration}
                          </p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Glossary Results */}
              {results.glossary.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookmarkCheck className="h-3.5 w-3.5" /> Technical Glossary Terms ({results.glossary.length})
                  </h3>
                  <div className="space-y-2">
                    {results.glossary.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleNavigate('notes-revision')}
                        className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-800 cursor-pointer hover:border-indigo-300 transition-colors"
                      >
                        <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{item.term}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{item.definition}</p>
                        {item.example && (
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 italic">
                            Example: {item.example}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cheat Sheets Results */}
              {results.cheatSheets.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookmarkCheck className="h-3.5 w-3.5" /> Cheat Sheets ({results.cheatSheets.length})
                  </h3>
                  <div className="space-y-1">
                    {results.cheatSheets.map((cs) => (
                      <button
                        key={cs.id}
                        onClick={() => handleNavigate('notes-revision')}
                        className="w-full text-left p-3 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-transparent hover:border-amber-200 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-300">
                            {cs.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{cs.category}</p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600 transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quizzes Results */}
              {results.quizzes.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <HelpCircle className="h-3.5 w-3.5" /> Quizzes & Practice Tests ({results.quizzes.length})
                  </h3>
                  <div className="space-y-1">
                    {results.quizzes.map((quiz) => (
                      <button
                        key={quiz.id}
                        onClick={() => handleNavigate('quizzes')}
                        className="w-full text-left p-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-transparent hover:border-emerald-200 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                            {quiz.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {quiz.totalQuestions} Questions · {quiz.timeLimitMinutes} min limit
                          </p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Search covers 100% of PPT lecture notes & diagrams</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
