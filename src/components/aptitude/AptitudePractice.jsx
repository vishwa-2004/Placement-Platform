import { useState } from 'react'

import { motion } from 'framer-motion'

import {
  Brain,
  Calculator,
  Clock3,
  Target,
  Trophy,
  BarChart3,
  Sigma,
  Puzzle,
  BookOpen,
} from 'lucide-react'

const categories = [
  {
    title: 'Quantitative Aptitude',
    icon: Calculator,
    topics: 0,
    difficulty: 'Core',
  },

  {
    title: 'Logical Reasoning',
    icon: Brain,
    topics: 0,
    difficulty: 'Core',
  },

  {
    title: 'Verbal Ability',
    icon: BookOpen,
    topics: 0,
    difficulty: 'Core',
  },

  {
    title: 'Data Interpretation',
    icon: BarChart3,
    topics: 0,
    difficulty: 'Advanced',
  },

  {
    title: 'Puzzle Solving',
    icon: Puzzle,
    topics: 0,
    difficulty: 'Advanced',
  },

  {
    title: 'Arithmetic',
    icon: Sigma,
    topics: 0,
    difficulty: 'Beginner',
  },
]

const companies = [
  'TCS',

  'Infosys',

  'Wipro',

  'Accenture',

  'Capgemini',

  'Amazon',
]

export default function AptitudePractice() {
  const [selectedCategory, setSelectedCategory] =
    useState(categories[0])

  return (
    <div className="relative p-8 overflow-hidden min-h-screen">
      {/* Ambient */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 space-y-8">
        {/* Hero */}
        <div className="glass rounded-[32px] p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
            <div>
              <p className="text-cyan-300 mb-4">
                AI Aptitude Intelligence
              </p>

              <h1 className="text-5xl font-black text-white mb-5">
                Aptitude Preparation System
              </h1>

              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                Practice quantitative aptitude, logical reasoning,
                verbal ability and company-specific placement
                rounds with AI-powered analytics and adaptive learning.
              </p>
            </div>

            <div className="glass rounded-[28px] px-10 py-8 text-center min-w-[260px]">
              <p className="text-gray-400 mb-3">
                Aptitude Readiness
              </p>

              <h2 className="text-7xl font-black bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                --
              </h2>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              title: 'Tests Attempted',
              value: '--',
              icon: Target,
            },

            {
              title: 'Accuracy Score',
              value: '--',
              icon: Trophy,
            },

            {
              title: 'Average Speed',
              value: '--',
              icon: Clock3,
            },

            {
              title: 'AI Ranking',
              value: '--',
              icon: Brain,
            },
          ].map((item) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -6,
                }}
                className="glass rounded-[32px] p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[60px] rounded-full" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                    <Icon
                      size={28}
                      className="text-white"
                    />
                  </div>

                  <p className="text-gray-400 mb-4">
                    {item.title}
                  </p>

                  <h2 className="text-6xl font-black text-white">
                    {item.value}
                  </h2>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Main */}
        <div className="grid grid-cols-1 2xl:grid-cols-[420px_1fr] gap-8">
          {/* Categories */}
          <div className="glass rounded-[32px] p-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black text-white mb-3">
                  Aptitude Tracks
                </h2>

                <p className="text-gray-400">
                  Topic-wise preparation roadmap.
                </p>
              </div>

              <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">
                AI Adaptive
              </div>
            </div>

            <div className="space-y-5">
              {categories.map((item) => {
                const Icon = item.icon

                return (
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    key={item.title}
                    onClick={() =>
                      setSelectedCategory(item)
                    }
                    className={`
                      w-full
                      rounded-3xl
                      p-6
                      text-left
                      transition-all
                      border

                      ${
                        selectedCategory.title ===
                        item.title
                          ? `
                            bg-gradient-to-r
                            from-cyan-500/20
                            to-violet-500/20
                            border-cyan-500/30
                          `
                          : `
                            glass-light
                            border-border
                          `
                      }
                    `}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.2)]">
                        <Icon
                          size={24}
                          className="text-white"
                        />
                      </div>

                      <div className="px-3 py-1 rounded-full bg-black/30 text-cyan-300 text-xs">
                        {item.difficulty}
                      </div>
                    </div>

                    <h3 className="text-white font-bold text-xl mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {item.topics} Topics Completed
                    </p>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Workspace */}
          <div className="space-y-8">
            {/* Practice Workspace */}
            <div className="glass rounded-[32px] overflow-hidden">
              {/* Header */}
              <div className="border-b border-border px-8 py-6 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                  <h2 className="text-4xl font-black text-white mb-3">
                    {selectedCategory.title}
                  </h2>

                  <p className="text-gray-400 text-lg">
                    AI-powered aptitude practice environment.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    className="
                      px-6
                      py-4
                      rounded-2xl
                      glass
                      border
                      border-cyan-500/20
                      text-cyan-300
                      font-semibold
                    "
                  >
                    Practice Mode
                  </button>

                  <button
                    className="
                      px-8
                      py-4
                      rounded-2xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-violet-500
                      text-white
                      font-semibold
                      shadow-[0_0_30px_rgba(34,211,238,0.2)]
                    "
                  >
                    Start Timed Test
                  </button>
                </div>
              </div>

              {/* Question Area */}
              <div className="p-8 space-y-8">
                {/* Question */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">
                      Question Workspace
                    </h3>

                    <div className="flex items-center gap-3 text-orange-300">
                      <Clock3 size={18} />

                      Timer Ready
                    </div>
                  </div>

                  <div className="glass-light rounded-[32px] p-8 min-h-[260px] flex items-center justify-center text-center">
                    <div>
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                        <Brain
                          size={40}
                          className="text-white"
                        />
                      </div>

                      <h3 className="text-3xl font-bold text-white mb-5">
                        AI Question Engine
                      </h3>

                      <p className="text-gray-400 leading-relaxed max-w-2xl">
                        Adaptive aptitude questions, AI-generated
                        explanations, timer systems and company-specific
                        placement rounds will appear here.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    'Timed Tests',

                    'AI Explanations',

                    'Company Rounds',
                  ].map((item) => (
                    <div
                      key={item}
                      className="glass-light rounded-3xl p-6 text-center"
                    >
                      <p className="text-white font-semibold">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Specific */}
            <div className="glass rounded-[32px] p-8">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-3xl font-black text-white mb-3">
                    Company-Specific Rounds
                  </h2>

                  <p className="text-gray-400">
                    Practice aptitude patterns used by recruiters.
                  </p>
                </div>

                <div className="px-4 py-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm">
                  Placement Ready
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-5">
                {companies.map((company) => (
                  <button
                    key={company}
                    className="
                      glass-light
                      rounded-2xl
                      p-5
                      text-white
                      font-semibold
                      hover:scale-[1.03]
                      transition-all
                    "
                  >
                    {company}
                  </button>
                ))}
              </div>
            </div>

            {/* AI Analytics */}
            <div className="glass rounded-[32px] p-8">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-3xl font-black text-white mb-3">
                    AI Performance Analytics
                  </h2>

                  <p className="text-gray-400">
                    Accuracy tracking and preparation intelligence.
                  </p>
                </div>

                <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">
                  Live Analysis
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  'Speed Analysis',

                  'Accuracy Tracking',

                  'Weak Topic Detection',

                  'AI Recommendations',
                ].map((item) => (
                  <div
                    key={item}
                    className="glass-light rounded-3xl p-6 text-center"
                  >
                    <p className="text-white font-semibold leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}