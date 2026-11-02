import React, { useState } from 'react';
import { useLms } from '../context/LmsContext';
import {
  BookOpen,
  FileText,
  Play,
  CheckCircle2,
  Download,
  Search,
  ExternalLink,
  ChevronRight,
  Layers,
  Sparkles
} from 'lucide-react';

export default function LearningMaterialsPage() {
  const { courses, openLesson, isLessonCompleted, setActiveTab } = useLms();
  const [selectedCourseId, setSelectedCourseId] = useState(courses[0]?.id || '');
  const [filterQuery, setFilterQuery] = useState('');

  const activeCourse = courses.find(c => c.id === selectedCourseId) || courses[0];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Learning Materials & Curriculum
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Structured chapters, topics, and simple-English concept explanations from the 5 PPT decks
        </p>
      </div>

      {/* Course Selector Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {courses.map((course) => (
          <button
            key={course.id}
            onClick={() => setSelectedCourseId(course.id)}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedCourseId === course.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <span>{course.code}</span>
            <span className="text-[10px] opacity-75 hidden md:inline">({course.totalSlides} slides)</span>
          </button>
        ))}
      </div>

      {/* Selected Course Header Banner */}
      {activeCourse && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                {activeCourse.code}
              </span>
              <span className="text-xs text-slate-400">Instructor: {activeCourse.instructor}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {activeCourse.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {activeCourse.subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={activeCourse.pptDownloadUrl}
              download
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Download PPT ({activeCourse.fileSize})</span>
            </a>
            <button
              onClick={() => {
                const firstLesson = activeCourse.modules[0]?.lessons[0]?.id;
                if (firstLesson) openLesson(activeCourse.id, firstLesson);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
            >
              <Play className="h-4 w-4 fill-white" />
              <span>Start Interactive Lesson</span>
            </button>
          </div>
        </div>
      )}

      {/* Modules and Lessons List */}
      {activeCourse && (
        <div className="space-y-6">
          {activeCourse.modules.map((module, mIdx) => (
            <div
              key={module.id}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                    Module {mIdx + 1}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {module.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {module.description}
                  </p>
                </div>
                <span className="text-xs text-slate-400 font-medium whitespace-nowrap pl-2">
                  {module.lessons.length} Topics
                </span>
              </div>

              {/* Lessons Grid in this module */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {module.lessons.map((lesson) => {
                  const completed = isLessonCompleted(lesson.id);
                  return (
                    <div
                      key={lesson.id}
                      onClick={() => openLesson(activeCourse.id, lesson.id)}
                      className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 border border-slate-200/60 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800/60 cursor-pointer transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-400">{lesson.slidesCovered}</span>
                          {completed ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                              <CheckCircle2 className="h-3.5 w-3.5" /> Completed
                            </span>
                          ) : (
                            <span className="text-[11px] text-slate-400 font-medium">{lesson.duration}</span>
                          )}
                        </div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                          {lesson.title}
                        </h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {lesson.summary}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400">
                        <span>Read Topic</span>
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
