import React, { useState } from 'react';
import { useLms } from '../context/LmsContext';
import { revisionData } from '../data/revisionData';
import {
  BookmarkCheck,
  FileText,
  Table2,
  BookMarked,
  Sparkles,
  Search,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Lightbulb,
  Check
} from 'lucide-react';

export default function NotesAndRevisionPage() {
  const [activeSubTab, setActiveSubTab] = useState('cheat-sheets'); // 'summaries' | 'cheat-sheets' | 'glossary' | 'flashcards'
  const [selectedSheetId, setSelectedSheetId] = useState(revisionData.cheatSheets[0]?.id || '');
  const [glossarySearch, setGlossarySearch] = useState('');

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const activeSheet = revisionData.cheatSheets.find(cs => cs.id === selectedSheetId) || revisionData.cheatSheets[0];

  const filteredGlossary = revisionData.glossary.filter(g =>
    g.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    g.definition.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  const flashcards = revisionData.flashcards;
  const currentCard = flashcards[currentCardIndex] || flashcards[0];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCardIndex(randomIndex);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Notes & Exam Revision Hub
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          High-yield summaries, 8 interactive cheat sheets, 30+ technical glossary terms, and active recall flashcards
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setActiveSubTab('cheat-sheets')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
            activeSubTab === 'cheat-sheets'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Table2 className="h-4 w-4" />
          <span>Interactive Cheat Sheets ({revisionData.cheatSheets.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('summaries')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
            activeSubTab === 'summaries'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <FileText className="h-4 w-4" />
          <span>Chapter High-Yield Summaries</span>
        </button>

        <button
          onClick={() => setActiveSubTab('glossary')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
            activeSubTab === 'glossary'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <BookMarked className="h-4 w-4" />
          <span>Technical Glossary ({revisionData.glossary.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('flashcards')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
            activeSubTab === 'flashcards'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Sparkles className="h-4 w-4" />
          <span>Active Recall Flashcards</span>
        </button>
      </div>

      {/* SUB-TAB 1: CHEAT SHEETS */}
      {activeSubTab === 'cheat-sheets' && (
        <div className="space-y-6">
          {/* Cheat Sheet Selector Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {revisionData.cheatSheets.map((cs) => (
              <button
                key={cs.id}
                onClick={() => setSelectedSheetId(cs.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedSheetId === cs.id
                    ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
                }`}
              >
                {cs.title}
              </button>
            ))}
          </div>

          {activeSheet && (
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  {activeSheet.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {activeSheet.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {activeSheet.description}
                </p>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 mt-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      {activeSheet.headers.map((h, idx) => (
                        <th key={idx} className="p-3.5 border-b border-slate-200 dark:border-slate-800">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {activeSheet.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`p-3.5 align-top ${
                              cIdx === 0
                                ? 'font-bold text-slate-900 dark:text-white whitespace-nowrap'
                                : 'text-slate-600 dark:text-slate-300'
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
          )}
        </div>
      )}

      {/* SUB-TAB 2: CHAPTER SUMMARIES */}
      {activeSubTab === 'summaries' && (
        <div className="space-y-6">
          {revisionData.chapterSummaries.map((summary) => (
            <div
              key={summary.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  {summary.code}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {summary.title}
                </h3>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {summary.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {summary.mustRememberQuote && (
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200">
                  <span className="font-bold">Must-Remember Axiom: </span>
                  "{summary.mustRememberQuote}"
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* SUB-TAB 3: TECHNICAL GLOSSARY */}
      {activeSubTab === 'glossary' && (
        <div className="space-y-6">
          {/* Glossary Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              value={glossarySearch}
              onChange={(e) => setGlossarySearch(e.target.value)}
              placeholder="Search definitions across 30+ technical terms (e.g. Idempotency, ACID, RAG, Webhook)..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2 hover:border-indigo-300 transition-colors"
              >
                <h4 className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  {item.term}
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.definition}
                </p>
                {item.example && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 italic">
                    <span className="font-semibold text-slate-600 dark:text-slate-300">Example: </span>
                    {item.example}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 4: ACTIVE RECALL FLASHCARDS */}
      {activeSubTab === 'flashcards' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Card {currentCardIndex + 1} of {flashcards.length}</span>
            <button
              onClick={handleShuffle}
              className="flex items-center gap-1 hover:text-indigo-600 transition-colors"
            >
              <Shuffle className="h-3.5 w-3.5" />
              <span>Shuffle</span>
            </button>
          </div>

          {/* Flashcard Body */}
          <div
            onClick={() => setIsFlipped(prev => !prev)}
            className="h-80 w-full p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-900/60 shadow-lg cursor-pointer flex flex-col justify-between items-center text-center transition-all hover:scale-[1.01]"
          >
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {isFlipped ? 'Answer (Click to flip back)' : 'Question / Concept (Click to reveal answer)'}
            </span>

            <div className="my-auto">
              {!isFlipped ? (
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-relaxed">
                  {currentCard.front}
                </h3>
              ) : (
                <p className="text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-400 whitespace-pre-line leading-relaxed animate-in fade-in duration-150">
                  {currentCard.back}
                </p>
              )}
            </div>

            <span className="text-xs text-indigo-500 font-semibold flex items-center gap-1">
              <RotateCw className="h-3.5 w-3.5" />
              <span>Tap to Flip</span>
            </span>
          </div>

          {/* Card Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevCard}
              className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold flex items-center gap-1 hover:bg-slate-100"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => setIsFlipped(prev => !prev)}
              className="px-5 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold"
            >
              {isFlipped ? 'Show Question' : 'Show Answer'}
            </button>

            <button
              onClick={handleNextCard}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1 shadow-sm"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
