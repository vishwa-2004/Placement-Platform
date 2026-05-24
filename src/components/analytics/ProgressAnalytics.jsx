import { motion } from 'framer-motion'

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from 'recharts'

import {
  TrendingUp,
  Brain,
  Code2,
  FileText,
  Target,
  Calendar,
  Activity,
} from 'lucide-react'

const weeklyData = [
  { week: 'W1', score: 0 },

  { week: 'W2', score: 0 },

  { week: 'W3', score: 0 },

  { week: 'W4', score: 0 },

  { week: 'W5', score: 0 },
]

const activityData = [
  {
    name: 'Coding',
    value: 0,
  },

  {
    name: 'Aptitude',
    value: 0,
  },

  {
    name: 'Interview',
    value: 0,
  },

  {
    name: 'Resume',
    value: 0,
  },
]

export default function ProgressAnalytics() {
  return (
    <div className="relative p-8 overflow-hidden min-h-screen">
      {/* Ambient */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 space-y-8">
        {/* Header */}
        <div className="glass rounded-[32px] p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
            <div>
              <p className="text-cyan-300 mb-4">
                Placement Intelligence System
              </p>

              <h1 className="text-5xl font-black text-white mb-5">
                Analytics Dashboard
              </h1>

              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                Track coding performance, ATS optimization,
                interview readiness and placement preparation
                progress through AI-powered analytics.
              </p>
            </div>

            <div className="glass rounded-[28px] px-10 py-8 text-center min-w-[260px]">
              <p className="text-gray-400 mb-3">
                Recruiter Readiness
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
              title: 'Coding Progress',
              value: '--',
              icon: Code2,
            },

            {
              title: 'Interview Readiness',
              value: '--',
              icon: Brain,
            },

            {
              title: 'ATS Optimization',
              value: '--',
              icon: FileText,
            },

            {
              title: 'Placement Target',
              value: '--',
              icon: Target,
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

        {/* Charts */}
        <div className="grid grid-cols-1 2xl:grid-cols-[1fr_420px] gap-8">
          {/* Weekly Progress */}
          <div className="glass rounded-[32px] p-8 h-[520px]">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black text-white mb-3">
                  Weekly Growth
                </h2>

                <p className="text-gray-400">
                  Learning activity and preparation analytics.
                </p>
              </div>

              <div className="flex items-center gap-3 text-cyan-300">
                <TrendingUp size={18} />

                Live Tracking
              </div>
            </div>

            <ResponsiveContainer width="100%" height="80%">
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient
                    id="colorScore"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#22d3ee"
                      stopOpacity={0.8}
                    />

                    <stop
                      offset="95%"
                      stopColor="#8b5cf6"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#222"
                />

                <XAxis
                  dataKey="week"
                  stroke="#666"
                />

                <YAxis stroke="#666" />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#22d3ee"
                  fillOpacity={1}
                  fill="url(#colorScore)"
                  strokeWidth={4}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Activity */}
          <div className="glass rounded-[32px] p-8 h-[520px]">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black text-white mb-3">
                  Activity Distribution
                </h2>

                <p className="text-gray-400">
                  Current preparation focus areas.
                </p>
              </div>

              <Activity
                size={22}
                className="text-cyan-300"
              />
            </div>

            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={activityData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#222"
                />

                <XAxis
                  dataKey="name"
                  stroke="#666"
                />

                <YAxis stroke="#666" />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#22d3ee"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lower Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="glass rounded-[32px] p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-white">
                Activity Timeline
              </h2>

              <Calendar
                size={22}
                className="text-cyan-300"
              />
            </div>

            <div className="space-y-5">
              {[
                'Coding activity tracking',

                'Interview performance tracking',

                'Resume optimization analytics',

                'AI learning insights',
              ].map((item) => (
                <div
                  key={item}
                  className="glass-light rounded-3xl p-5 flex gap-4"
                >
                  <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2" />

                  <p className="text-gray-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap */}
          <div className="glass rounded-[32px] p-8 xl:col-span-2">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black text-white mb-3">
                  Learning Heatmap
                </h2>

                <p className="text-gray-400">
                  Daily preparation consistency tracking.
                </p>
              </div>

              <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">
                AI Powered
              </div>
            </div>

            <div className="grid grid-cols-7 md:grid-cols-14 gap-3">
              {Array.from({
                length: 56,
              }).map((_, index) => (
                <div
                  key={index}
                  className="
                    aspect-square
                    rounded-lg
                    bg-white/[0.04]
                    border
                    border-white/[0.03]
                    hover:bg-cyan-500/20
                    transition-all
                  "
                />
              ))}
            </div>

            <div className="flex items-center justify-between mt-8 text-sm text-gray-500">
              <p>Low Activity</p>

              <p>High Activity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}