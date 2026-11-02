import React, { useState } from 'react';
import { useLms } from '../context/LmsContext';
import {
  CheckCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
  Layers,
  FileText,
  AlertCircle,
  Lightbulb,
  Award,
  Presentation,
  Code2,
  Copy,
  Check
} from 'lucide-react';

export default function InteractiveLearningPage() {
  const {
    courses,
    activeCourseId,
    setActiveCourseId,
    activeLessonId,
    setActiveLessonId,
    completedLessons,
    toggleLessonCompleted,
    isLessonCompleted
  } = useLms();

  const [viewMode, setViewMode] = useState('explanation'); // 'explanation' | 'slides'
  const [copiedCode, setCopiedCode] = useState(false);

  const activeCourse = courses.find(c => c.id === activeCourseId) || courses[0];

  // Find all lessons in flat array for prev/next navigation
  const allLessons = [];
  if (activeCourse) {
    activeCourse.modules.forEach(m => {
      m.lessons.forEach(l => {
        allLessons.push({ ...l, moduleId: m.id, moduleTitle: m.title });
      });
    });
  }

  const currentLessonIndex = allLessons.findIndex(l => l.id === activeLessonId);
  const activeLesson = allLessons[currentLessonIndex] || allLessons[0];

  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

  const isCompleted = activeLesson ? isLessonCompleted(activeLesson.id) : false;

  const handleCopyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in duration-300">
      {/* Left Column: Course Syllabus Navigation Drawer/Sidebar */}
      <div className="lg:w-80 flex-shrink-0 space-y-4">
        {/* Course Dropdown Selector */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Select Course Subject
          </label>
          <select
            value={activeCourseId}
            onChange={(e) => {
              const newCourseId = e.target.value;
              setActiveCourseId(newCourseId);
              const targetCourse = courses.find(c => c.id === newCourseId);
              if (targetCourse?.modules[0]?.lessons[0]?.id) {
                setActiveLessonId(targetCourse.modules[0].lessons[0].id);
              }
            }}
            className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.code} · {c.title.slice(0, 32)}...
              </option>
            ))}
          </select>
        </div>

        {/* Modules & Topics Navigation Tree */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm max-h-[calc(100vh-280px)] overflow-y-auto space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-2">
            <span>Course Syllabus</span>
            <span>{allLessons.length} Topics</span>
          </div>

          {activeCourse?.modules.map((mod, mIdx) => (
            <div key={mod.id} className="space-y-1.5">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">
                Module {mIdx + 1}: {mod.title.replace(/^Module \d+:\s*/, '')}
              </p>
              <div className="space-y-1">
                {mod.lessons.map((lesson) => {
                  const isCurrent = lesson.id === activeLessonId;
                  const completed = isLessonCompleted(lesson.id);

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => setActiveLessonId(lesson.id)}
                      className={`w-full text-left p-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-all ${
                        isCurrent
                          ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0 pr-2">
                        {completed ? (
                          <CheckCircle2
                            className={`h-4 w-4 flex-shrink-0 ${
                              isCurrent ? 'text-white' : 'text-emerald-500'
                            }`}
                          />
                        ) : (
                          <div
                            className={`h-2 w-2 rounded-full flex-shrink-0 ${
                              isCurrent ? 'bg-white' : 'bg-slate-300 dark:bg-slate-600'
                            }`}
                          />
                        )}
                        <span className="truncate">{lesson.title}</span>
                      </div>
                      <span className={`text-[10px] flex-shrink-0 ${isCurrent ? 'text-indigo-200' : 'text-slate-400'}`}>
                        {lesson.duration}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Active Interactive Lesson Content */}
      <div className="flex-1 space-y-6 min-w-0">
        {activeLesson ? (
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm p-6 sm:p-10 space-y-8">
            {/* Top Meta Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">
                  <span>{activeCourse.code}</span>
                  <span>·</span>
                  <span>{activeLesson.slidesCovered}</span>
                  <span>·</span>
                  <span>{activeLesson.duration}</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {activeLesson.title}
                </h2>
              </div>

              {/* View Mode Toggle: Interactive Explanation vs Slide Deck */}
              <div className="flex items-center gap-2 self-start sm:self-center">
                <div className="p-1 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center gap-1 border border-slate-200/60 dark:border-slate-700">
                  <button
                    onClick={() => setViewMode('explanation')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      viewMode === 'explanation'
                        ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Simple Explanation</span>
                  </button>
                  <button
                    onClick={() => setViewMode('slides')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      viewMode === 'slides'
                        ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Presentation className="h-3.5 w-3.5" />
                    <span>Slide Deck View ({activeLesson.slideDeck?.length || 0})</span>
                  </button>
                </div>
              </div>
            </div>

            {/* TAB 1: SIMPLE ENGLISH EXPLANATION MODE */}
            {viewMode === 'explanation' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                {/* Simplified Plain-English Concept */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-indigo-500" />
                    <span>The Simple Explanation (Without Jargon)</span>
                  </h3>
                  <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                    {activeLesson.content.simpleExplanation}
                  </div>
                </div>

                {/* Real-World Analogy */}
                {activeLesson.content.analogies && (
                  <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-2">
                    <h4 className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Lightbulb className="h-4 w-4" /> Mental Model Analogy
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {activeLesson.content.analogies}
                    </p>
                  </div>
                )}

                {/* Steps Flowchart if applicable */}
                {activeLesson.content.steps && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
                      Step-by-Step Architecture Flow:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {activeLesson.content.steps.map((st) => (
                        <div
                          key={st.step}
                          className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 space-y-1.5"
                        >
                          <div className="flex items-center gap-2">
                            <span className="h-5 w-5 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                              {st.step}
                            </span>
                            <span className="text-xs font-bold text-slate-900 dark:text-white">
                              {st.title}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            {st.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Concepts Breakdown */}
                {activeLesson.content.coreConcepts && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Layers className="h-5 w-5 text-indigo-500" />
                      <span>Core Concepts Breakdown</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeLesson.content.coreConcepts.map((concept, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2 shadow-xs"
                        >
                          <h4 className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                            {concept.name}
                          </h4>
                          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            {concept.definition}
                          </p>
                          {concept.whyItMatters && (
                            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                              <span className="font-semibold text-slate-700 dark:text-slate-300">Why PMs Care: </span>
                              {concept.whyItMatters}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Formatted Tables from PPT */}
                {activeLesson.content.tables && (
                  <div className="space-y-6">
                    {activeLesson.content.tables.map((tbl, tIdx) => (
                      <div key={tIdx} className="space-y-3">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {tbl.title}
                        </h4>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                          <table className="w-full text-left text-xs">
                            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-bold uppercase tracking-wider">
                              <tr>
                                {tbl.headers.map((hdr, hIdx) => (
                                  <th key={hIdx} className="p-3.5 border-b border-slate-200 dark:border-slate-800">
                                    {hdr}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                              {tbl.rows.map((row, rIdx) => (
                                <tr
                                  key={rIdx}
                                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                >
                                  {row.map((cell, cIdx) => (
                                    <td
                                      key={cIdx}
                                      className={`p-3.5 align-top ${
                                        cIdx === 0
                                          ? 'font-bold text-slate-900 dark:text-white whitespace-nowrap'
                                          : 'text-slate-600 dark:text-slate-300 whitespace-pre-line'
                                      }`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Code / Query Snippet if available */}
                {activeLesson.content.codeSnippet && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Code2 className="h-4 w-4" /> {activeLesson.content.codeSnippet.title}
                      </span>
                      <button
                        onClick={() => handleCopyCode(activeLesson.content.codeSnippet.code)}
                        className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1"
                      >
                        {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                        <span>{copiedCode ? 'Copied' : 'Copy SQL'}</span>
                      </button>
                    </div>
                    <pre className="p-4 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                      <code>{activeLesson.content.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}

                {/* Real-World Case Study Callout */}
                {activeLesson.content.realWorldExample && (
                  <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 space-y-2">
                    <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="h-4 w-4" /> Real Product Case Study
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {activeLesson.content.realWorldExample}
                    </p>
                  </div>
                )}

                {/* Exam Tips & Key Takeaways Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Exam Tips Callout */}
                  {activeLesson.content.examTips && (
                    <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 space-y-2">
                      <h4 className="text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                        <AlertCircle className="h-4 w-4" /> Exam & Interview Alert
                      </h4>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                        {activeLesson.content.examTips}
                      </p>
                    </div>
                  )}

                  {/* Key Takeaways */}
                  {activeLesson.content.keyTakeaways && (
                    <div className="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/40 space-y-2">
                      <h4 className="text-xs font-bold text-indigo-800 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle className="h-4 w-4" /> Essential Takeaways
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        {activeLesson.content.keyTakeaways.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-indigo-500 font-bold">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: SLIDE DECK TRANSCRIPT VIEWER */}
            {viewMode === 'slides' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between">
                  <span>Slide-by-slide transcription directly from {activeCourse.sourcePpt}</span>
                  <span className="font-semibold">{activeLesson.slideDeck?.length || 0} Slides Linked</span>
                </div>

                <div className="space-y-6">
                  {activeLesson.slideDeck?.map((slide) => (
                    <div
                      key={slide.slideNumber}
                      className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs"
                    >
                      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
                        <span className="px-2.5 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-xs">
                          Slide #{slide.slideNumber}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                          {slide.title}
                        </h4>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {slide.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800">
                            {bullet}
                          </div>
                        ))}
                      </div>

                      {slide.notes && (
                        <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200">
                          <span className="font-bold">Speaker Notes: </span>
                          {slide.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions Bar */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => toggleLessonCompleted(activeLesson.id)}
                className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                  isCompleted
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm'
                }`}
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>{isCompleted ? 'Completed ✓ (Click to Undo)' : 'Mark Topic as Completed'}</span>
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                <button
                  disabled={!prevLesson}
                  onClick={() => prevLesson && setActiveLessonId(prevLesson.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-slate-200 dark:border-slate-800 transition-colors ${
                    prevLesson
                      ? 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                      : 'opacity-40 cursor-not-allowed text-slate-400'
                  }`}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous Topic</span>
                </button>

                <button
                  disabled={!nextLesson}
                  onClick={() => nextLesson && setActiveLessonId(nextLesson.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    nextLesson
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm'
                      : 'opacity-40 cursor-not-allowed bg-slate-200 text-slate-400 dark:bg-slate-800'
                  }`}
                >
                  <span>Next Topic</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-20 text-center text-slate-400">
            Please select a lesson from the syllabus on the left.
          </div>
        )}
      </div>
    </div>
  );
}
