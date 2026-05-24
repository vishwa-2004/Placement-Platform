import { useState } from 'react'
import { motion } from 'framer-motion'

import {
  Mic,
  Video,
  Brain,
  Camera,
  Timer,
  ShieldCheck,
} from 'lucide-react'

const interviewTypes = [
  'HR Interview',

  'Technical Interview',

  'Behavioral Round',

  'System Design',

  'Placement Screening',
]

const sampleQuestions = [
  'Tell me about yourself.',

  'Explain your strongest project.',

  'What challenges did you face during development?',

  'Why should we hire you?',

  'Describe a leadership experience.',
]

export default function MockInterview() {
  const [selectedType, setSelectedType] =
    useState(interviewTypes[0])

  const [interviewStarted, setInterviewStarted] =
    useState(false)

  return (
    <div className="relative p-8 overflow-hidden min-h-screen">
      {/* Ambient */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 space-y-8">
        {/* Top Dashboard */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Card */}
          <div className="glass rounded-[32px] p-8 xl:col-span-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/10 blur-[120px] rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-cyan-300 mb-3">
                    AI Interview Engine
                  </p>

                  <h1 className="text-5xl font-black text-white">
                    Mock Interview System
                  </h1>
                </div>

                <div className="px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-300 text-sm">
                  AI Ready
                </div>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-3xl">
                Simulate realistic placement interviews with AI-powered
                HR, technical and behavioral rounds using voice,
                webcam and recruiter-style analysis systems.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() =>
                    setInterviewStarted(true)
                  }
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
                  Start AI Interview
                </button>

                <button
                  className="
                    glass
                    px-8
                    py-4
                    rounded-2xl
                    border
                    border-cyan-500/20
                    text-cyan-300
                    font-semibold
                  "
                >
                  Configure Interview
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          {[
            {
              title: 'Interviews Taken',
              value: '--',
            },

            {
              title: 'Confidence Score',
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

        {/* Main Workspace */}
        <div className="grid grid-cols-1 2xl:grid-cols-[1fr_420px] gap-8">
          {/* Interview Panel */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="glass rounded-[32px] overflow-hidden"
          >
            {/* Header */}
            <div className="border-b border-border px-8 py-6 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
              <div>
                <h2 className="text-4xl font-black text-white mb-3">
                  {selectedType}
                </h2>

                <p className="text-gray-400 text-lg">
                  AI-powered recruiter simulation environment.
                </p>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <button
                  className="
                    glass
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-cyan-500/20
                    text-cyan-300
                    flex
                    items-center
                    gap-3
                  "
                >
                  <Mic size={18} />

                  Audio Enabled
                </button>

                <button
                  className="
                    glass
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-violet-500/20
                    text-violet-300
                    flex
                    items-center
                    gap-3
                  "
                >
                  <Video size={18} />

                  Camera Enabled
                </button>
              </div>
            </div>

            {/* Video Workspace */}
            <div className="p-8">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* AI Interviewer */}
                <div className="glass-light rounded-[32px] p-8 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full" />

                  <div className="relative z-10 text-center">
                    <div className="w-44 h-44 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-6xl font-black text-white mb-10 shadow-[0_0_60px_rgba(34,211,238,0.2)] animate-pulse">
                      AI
                    </div>

                    <div className="flex items-end justify-center gap-2 h-16 mb-8">
                      {[20, 40, 60, 30, 70, 40, 20].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="w-3 bg-cyan-400 rounded-full animate-pulse"
                            style={{
                              height: `${h}px`,
                            }}
                          />
                        )
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      AI Recruiter
                    </h3>

                    <p className="text-gray-400">
                      {interviewStarted
                        ? 'Interview session active...'
                        : 'Awaiting interview start'}
                    </p>
                  </div>
                </div>

                {/* User Camera */}
                <div className="glass-light rounded-[32px] p-8 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-violet-500/10 blur-[80px] rounded-full" />

                  <div className="relative z-10 text-center">
                    <div className="w-44 h-44 rounded-full bg-black border border-border flex items-center justify-center mb-10">
                      <Camera
                        size={80}
                        className="text-gray-500"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      Candidate Camera Feed
                    </h3>

                    <p className="text-gray-400">
                      Webcam integration ready for live interviews.
                    </p>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                {[
                  {
                    icon: Mic,
                    label: 'Voice Analysis',
                  },

                  {
                    icon: Video,
                    label: 'Video Tracking',
                  },

                  {
                    icon: Brain,
                    label: 'AI Evaluation',
                  },

                  {
                    icon: ShieldCheck,
                    label: 'Recruiter Scoring',
                  },
                ].map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.label}
                      className="glass-light rounded-3xl p-6 text-center"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                        <Icon
                          size={28}
                          className="text-white"
                        />
                      </div>

                      <p className="text-white font-semibold">
                        {item.label}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="space-y-8"
          >
            {/* Interview Types */}
            <div className="glass rounded-[32px] p-8">
              <h2 className="text-3xl font-black text-white mb-8">
                Interview Modes
              </h2>

              <div className="space-y-4">
                {interviewTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() =>
                      setSelectedType(type)
                    }
                    className={`
                      w-full
                      rounded-2xl
                      p-5
                      text-left
                      transition-all

                      ${
                        selectedType === type
                          ? `
                            bg-gradient-to-r
                            from-cyan-500/20
                            to-violet-500/20
                            border
                            border-cyan-500/30
                            text-white
                          `
                          : `
                            glass-light
                            text-gray-300
                          `
                      }
                    `}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Questions */}
            <div className="glass rounded-[32px] p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black text-white">
                  Questions
                </h2>

                <div className="flex items-center gap-2 text-cyan-300 text-sm">
                  <Timer size={16} />

                  Live
                </div>
              </div>

              <div className="space-y-4">
                {sampleQuestions.map((question) => (
                  <div
                    key={question}
                    className="glass-light rounded-2xl p-5"
                  >
                    <p className="text-white leading-relaxed">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Feedback */}
            <div className="glass rounded-[32px] p-8">
              <h2 className="text-3xl font-black text-white mb-8">
                AI Feedback
              </h2>

              <div className="glass-light rounded-3xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  Confidence analysis, communication evaluation,
                  speaking pace, technical depth and recruiter
                  feedback will appear here after interview sessions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}