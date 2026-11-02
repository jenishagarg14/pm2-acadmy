import React, { useState } from 'react';
import { useLms } from '../context/LmsContext';
import confetti from 'canvas-confetti';
import {
  HelpCircle,
  Clock,
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  Sparkles,
  ChevronRight,
  AlertCircle,
  Layers,
  Check
} from 'lucide-react';

export default function QuizzesPage() {
  const { quizzes, quizAttempts, saveQuizAttempt } = useLms();

  const [selectedQuizId, setSelectedQuizId] = useState(quizzes[0]?.id || '');
  const [inQuizMode, setInQuizMode] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [lastResult, setLastResult] = useState(null);

  const activeQuiz = quizzes.find(q => q.id === selectedQuizId) || quizzes[0];
  const previousAttempt = quizAttempts[selectedQuizId];

  const handleStartQuiz = (quizId) => {
    setSelectedQuizId(quizId);
    setSelectedAnswers({});
    setSubmitted(false);
    setLastResult(null);
    setInQuizMode(true);
  };

  const handleSelectOption = (questionId, optionIndex) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleSubmitQuiz = () => {
    if (!activeQuiz) return;

    let score = 0;
    activeQuiz.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });

    const result = saveQuizAttempt(activeQuiz.id, score, activeQuiz.questions.length, selectedAnswers);
    setLastResult(result);
    setSubmitted(true);

    if (result.passed) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setLastResult(null);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Quizzes & Practice Assessments
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          MCQ assessments strictly grounded in Dr. Anand Fadte's lecture slides. Test your technical acumen.
        </p>
      </div>

      {!inQuizMode ? (
        /* QUIZ LOBBY: LIST OF AVAILABLE ASSESSMENTS */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => {
            const attempt = quizAttempts[quiz.id];
            const isFinalExam = quiz.id === 'quiz-pm2-final-certification';

            return (
              <div
                key={quiz.id}
                className={`p-6 rounded-3xl bg-white dark:bg-slate-900 border transition-all flex flex-col justify-between ${
                  isFinalExam
                    ? 'border-indigo-400/80 dark:border-indigo-600 shadow-md shadow-indigo-600/10'
                    : 'border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/60 shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                        isFinalExam
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                          : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
                      }`}
                    >
                      {isFinalExam ? '★ Capstone Exam' : 'Module Quiz'}
                    </span>
                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {quiz.timeLimitMinutes} min
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {quiz.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-3 leading-relaxed">
                      {quiz.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span>{quiz.totalQuestions} MCQs</span>
                    <span>·</span>
                    <span>75% passing grade</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  {attempt ? (
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          attempt.passed
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                            : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                        }`}
                      >
                        {attempt.passed ? 'Passed ✓' : 'Attempted'} ({attempt.percentage}%)
                      </span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400">Not attempted yet</span>
                  )}

                  <button
                    onClick={() => handleStartQuiz(quiz.id)}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-all hover:scale-[1.02]"
                  >
                    {attempt ? 'Retake Quiz' : 'Start Assessment'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* ACTIVE QUIZ PLAYER / RESULTS VIEW */
        <div className="space-y-6">
          {/* Quiz Top Action Bar */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <button
                onClick={() => setInQuizMode(false)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 mb-1"
              >
                <span>← Back to Quiz Lobby</span>
              </button>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {activeQuiz.title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {activeQuiz.totalQuestions} Questions · Based strictly on presentation content
              </p>
            </div>

            {submitted && lastResult && (
              <div className="flex items-center gap-3">
                <div
                  className={`px-4 py-2 rounded-2xl text-center ${
                    lastResult.passed
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 border border-emerald-300'
                      : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 border border-amber-300'
                  }`}
                >
                  <span className="text-xs uppercase font-bold tracking-wider block">Final Score</span>
                  <span className="text-xl font-extrabold">{lastResult.percentage}% ({lastResult.score}/{lastResult.total})</span>
                </div>
                <button
                  onClick={handleRetake}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Retake</span>
                </button>
              </div>
            )}
          </div>

          {/* Questions List */}
          <div className="space-y-6">
            {activeQuiz.questions.map((q, idx) => {
              const selectedOpt = selectedAnswers[q.id];
              const isAnswered = selectedOpt !== undefined;
              const isCorrect = isAnswered && selectedOpt === q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border transition-all ${
                    submitted
                      ? isCorrect
                        ? 'border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/20'
                        : 'border-rose-300 dark:border-rose-800/80 bg-rose-50/20'
                      : 'border-slate-200/80 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-7 w-7 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{q.slideReference}</span>
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        q.difficulty === 'Easy'
                          ? 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                          : q.difficulty === 'Medium'
                          ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
                          : 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                      }`}
                    >
                      {q.difficulty}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed mb-6">
                    {q.question}
                  </h4>

                  {/* 4 Options Grid */}
                  <div className="space-y-3">
                    {q.options.map((option, optIdx) => {
                      const isOptionSelected = selectedOpt === optIdx;
                      const isOptionCorrect = optIdx === q.correctAnswer;

                      let btnStyle = 'border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 bg-slate-50/50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200';

                      if (submitted) {
                        if (isOptionCorrect) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 font-bold ring-1 ring-emerald-500';
                        } else if (isOptionSelected && !isOptionCorrect) {
                          btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 font-bold line-through ring-1 ring-rose-500';
                        } else {
                          btnStyle = 'border-slate-200 dark:border-slate-800 opacity-60';
                        }
                      } else if (isOptionSelected) {
                        btnStyle = 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-900 dark:text-indigo-100 font-bold ring-2 ring-indigo-500';
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={submitted}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="h-6 w-6 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-xs font-bold flex items-center justify-center flex-shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{option}</span>
                          </div>

                          {submitted && isOptionCorrect && (
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 ml-2" />
                          )}
                          {submitted && isOptionSelected && !isOptionCorrect && (
                            <XCircle className="h-5 w-5 text-rose-600 flex-shrink-0 ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Post-Submission Detailed Explanation */}
                  {submitted && (
                    <div className="mt-6 p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-900/60 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-indigo-700 dark:text-indigo-400">
                        <AlertCircle className="h-4 w-4" />
                        <span>Concept Explanation & Slide Citation:</span>
                      </div>
                      <p className="leading-relaxed mt-1">{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit Action Button */}
          {!submitted && (
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {Object.keys(selectedAnswers).length} of {activeQuiz.questions.length} Questions Answered
              </span>
              <button
                disabled={Object.keys(selectedAnswers).length === 0}
                onClick={handleSubmitQuiz}
                className={`px-8 py-3 rounded-xl font-bold text-sm shadow-md transition-all ${
                  Object.keys(selectedAnswers).length === activeQuiz.questions.length
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/25 scale-[1.02]'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                Submit Assessment & Calculate Score
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
