import { useState } from 'react'
import { motion } from 'framer-motion'
import Editor from '@monaco-editor/react'

const roadmap = [
  {
    category: 'Arrays',
    progress: 0,
    problems: 0,
    difficulty: 'Beginner',
  },

  {
    category: 'Strings',
    progress: 0,
    problems: 0,
    difficulty: 'Beginner',
  },

  {
    category: 'Linked List',
    progress: 0,
    problems: 0,
    difficulty: 'Intermediate',
  },

  {
    category: 'Stacks & Queues',
    progress: 0,
    problems: 0,
    difficulty: 'Intermediate',
  },

  {
    category: 'Trees',
    progress: 0,
    problems: 0,
    difficulty: 'Advanced',
  },

  {
    category: 'Graphs',
    progress: 0,
    problems: 0,
    difficulty: 'Advanced',
  },
]

export default function CodingPrep() {
  const [selectedTopic, setSelectedTopic] =
    useState(roadmap[0])

  const [language, setLanguage] =
    useState('javascript')

  const [code, setCode] = useState(`function solve() {

}`)

  const [output, setOutput] = useState('')

  const runCode = async () => {
    try {
      const result = eval(code)

      setOutput(
        String(
          result || 'Code executed successfully'
        )
      )
    } catch (error) {
      setOutput(error.message)
    }
  }

  return (
    <div className="relative p-8 overflow-hidden min-h-screen">
      {/* Ambient */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 space-y-8">
     {/* Top Dashboard */}
<div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
  {/* Daily Challenge */}
  <div className="glass rounded-[32px] p-8 xl:col-span-2 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/10 blur-[100px] rounded-full" />

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-cyan-300 mb-3">
            Daily Coding Challenge
          </p>

          <h2 className="text-4xl font-black text-white">
            Dynamic Programming
          </h2>
        </div>

        <div className="px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm">
          Hard
        </div>
      </div>

      <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
        Solve today’s featured challenge to improve
        problem-solving consistency and strengthen
        advanced DSA concepts.
      </p>

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
        Start Challenge
      </button>
    </div>
  </div>

  {/* Stats */}
  {[
    {
      title: 'Problems Solved',
      value: '--',
    },

    {
      title: 'Current Streak',
      value: '--',
    },
  ].map((item) => (
    <div
      key={item.title}
      className="glass rounded-[32px] p-8"
    >
      <p className="text-gray-400 mb-5">
        {item.title}
      </p>

      <h2 className="text-6xl font-black text-white">
        {item.value}
      </h2>
    </div>
  ))}
</div>

{/* Learning Analytics */}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
  {/* Progress */}
  <div className="glass rounded-[32px] p-8">
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-black text-white">
        Topic Progress
      </h2>

      <div className="text-cyan-300 text-sm">
        Live Tracking
      </div>
    </div>

    <div className="space-y-5">
      {[
        'Arrays',
        'Strings',
        'Linked List',
        'Trees',
      ].map((topic) => (
        <div key={topic}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-white">
              {topic}
            </p>

            <p className="text-gray-400 text-sm">
              0%
            </p>
          </div>

          <div className="w-full h-2 rounded-full bg-black/30 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
              style={{
                width: '0%',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Difficulty */}
  <div className="glass rounded-[32px] p-8">
    <h2 className="text-2xl font-black text-white mb-8">
      Difficulty Distribution
    </h2>

    <div className="space-y-6">
      {[
        {
          label: 'Easy',
          color:
            'from-green-500 to-emerald-500',
        },

        {
          label: 'Medium',
          color:
            'from-orange-500 to-yellow-500',
        },

        {
          label: 'Hard',
          color:
            'from-red-500 to-pink-500',
        },
      ].map((item) => (
        <div key={item.label}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-white">
              {item.label}
            </p>

            <p className="text-gray-400 text-sm">
              0 Problems
            </p>
          </div>

          <div className="w-full h-3 rounded-full bg-black/30 overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
              style={{
                width: '0%',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* AI Coding Assistant */}
  <div className="glass rounded-[32px] p-8 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-violet-500/10 blur-[80px] rounded-full" />

    <div className="relative z-10">
      <h2 className="text-2xl font-black text-white mb-8">
        AI Coding Assistant
      </h2>

      <div className="glass-light rounded-3xl p-6 mb-6">
        <p className="text-gray-300 leading-relaxed">
          AI debugging, optimization hints, complexity
          analysis and coding guidance will appear here.
        </p>
      </div>

      <button
        className="
          w-full
          py-4
          rounded-2xl
          border
          border-cyan-500/20
          text-cyan-300
          font-semibold
          glass
        "
      >
        AI Features Coming Soon
      </button>
    </div>
  </div>
</div>

{/* Main */}

        {/* Main */}
        <div className="flex flex-col xl:flex-row gap-8 items-start">
          {/* Sidebar */}
          <div className="glass rounded-[32px] p-6 w-full xl:w-[360px] flex-shrink-0">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-white">
                DSA Roadmap
              </h2>

              <div className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-sm">
                0% Complete
              </div>
            </div>

            <div className="space-y-4">
              {roadmap.map((problem) => (
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  key={problem.category}
                  onClick={() =>
                    setSelectedTopic(problem)
                  }
                  className={`
                    cursor-pointer
                    rounded-3xl
                    p-6
                    border
                    transition-all

                    ${
                      selectedTopic.category ===
                      problem.category
                        ? `
                          bg-gradient-to-r
                          from-cyan-500/20
                          to-violet-500/20
                          border-cyan-400
                        `
                        : `
                          glass-light
                          border-border
                        `
                    }
                  `}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-bold text-lg">
                      {problem.category}
                    </h3>

                    <span className="text-xs px-3 py-1 rounded-full bg-black/30 text-cyan-300">
                      {problem.difficulty}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 mb-5">
                    {problem.problems} Problems Completed
                  </p>

                  <div className="w-full h-2 rounded-full bg-black/30 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                      style={{
                        width: `${problem.progress}%`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Editor */}
          {/* Workspace */}
<motion.div
  initial={{
    opacity: 0,
  }}
  animate={{
    opacity: 1,
  }}
  className="flex-1 grid grid-cols-1 2xl:grid-cols-[420px_1fr] gap-8"
>
  {/* Problem Panel */}
  <div className="glass rounded-[32px] overflow-hidden">
    {/* Header */}
    <div className="border-b border-border p-8">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-3xl font-black text-white">
          {selectedTopic.category}
        </h2>

        <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">
          Practice
        </div>
      </div>

      <p className="text-gray-400 leading-relaxed">
        Solve coding challenges and strengthen
        problem-solving techniques for placement preparation.
      </p>
    </div>

    {/* Problem Details */}
    <div className="p-8 space-y-8">
      {/* Description */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">
          Problem Description
        </h3>

        <div className="glass-light rounded-3xl p-6">
          <p className="text-gray-300 leading-relaxed">
            Coding problems and AI-generated practice
            questions for this topic will appear here.
          </p>
        </div>
      </div>

      {/* Constraints */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">
          Constraints
        </h3>

        <div className="glass-light rounded-3xl p-6 space-y-3 font-mono text-sm text-cyan-300">
          <p>• Awaiting problem generation</p>
          <p>• Constraints will appear here</p>
          <p>• Complexity targets will appear here</p>
        </div>
      </div>

      {/* Examples */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">
          Examples
        </h3>

        <div className="glass-light rounded-3xl p-6 space-y-5">
          <div>
            <p className="text-gray-400 text-sm mb-2">
              Input
            </p>

            <div className="bg-black rounded-2xl p-4 text-cyan-300 font-mono">
              Example pending
            </div>
          </div>

          <div>
            <p className="text-gray-400 text-sm mb-2">
              Output
            </p>

            <div className="bg-black rounded-2xl p-4 text-green-400 font-mono">
              Example pending
            </div>
          </div>
        </div>
      </div>

      {/* AI Hints */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">
          AI Hints
        </h3>

        <div className="glass-light rounded-3xl p-6">
          <p className="text-gray-300 leading-relaxed">
            AI-generated hints, optimization techniques
            and solution guidance will appear here.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Code Editor */}
  <div className="glass rounded-[32px] overflow-hidden">
    {/* Editor Header */}
    <div className="border-b border-border px-8 py-6 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
      <div>
        <h2 className="text-3xl font-black text-white mb-2">
          Coding Workspace
        </h2>

        <p className="text-gray-400">
          Write, execute and optimize your solutions.
        </p>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <select
          value={language}
          onChange={(e) =>
            setLanguage(e.target.value)
          }
          className="glass-light rounded-2xl px-5 py-4 text-white outline-none"
        >
          <option value="javascript">
            JavaScript
          </option>

          <option value="python">
            Python
          </option>

          <option value="cpp">
            C++
          </option>
        </select>

        <button
          className="
            px-6
            py-4
            rounded-2xl
            glass
            text-cyan-300
            border
            border-cyan-500/20
            font-semibold
          "
        >
          Submit
        </button>

        <button
          onClick={runCode}
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
          Run Code
        </button>
      </div>
    </div>

    {/* Monaco */}
    <div className="h-[650px]">
      <Editor
        height="100%"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={(value) =>
          setCode(value || '')
        }
        options={{
          fontSize: 16,

          minimap: {
            enabled: false,
          },

          padding: {
            top: 20,
          },

          smoothScrolling: true,

          cursorBlinking: 'smooth',

          roundedSelection: true,
        }}
      />
    </div>

    {/* Console */}
    <div className="border-t border-border p-8">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-white font-bold text-xl">
          Execution Console
        </h3>

        <div className="px-4 py-2 rounded-xl bg-green-500/10 text-green-300 border border-green-500/20 text-sm">
          Ready
        </div>
      </div>

      <div className="bg-black rounded-3xl p-6 min-h-[180px] text-green-400 font-mono border border-border overflow-auto">
        {output ||
          'Run your code to view execution output.'}
      </div>
    </div>
  </div>
</motion.div>
        </div>
      </div>
    </div>
  )
}