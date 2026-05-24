import { motion } from 'framer-motion'

import {
  doc,
  getDoc,
} from 'firebase/firestore'

import {
  useEffect,
  useState,
} from 'react'

import { db } from '../../firebase'

import { useAuth } from '../../hooks/useAuth'

export default function Dashboard() {
  const { user } = useAuth()

  const [stats, setStats] = useState({
    codingScore: 0,
    aptitudeScore: 0,
    interviewScore: 0,
    resumeScore: 0,
  })

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return

      const docRef = doc(
        db,
        'users',
        user.uid
      )

      const docSnap =
        await getDoc(docRef)

      if (docSnap.exists()) {
        setStats(docSnap.data())
      }
    }

    fetchUserData()
  }, [user])

  const dashboardStats = [
    {
      title: 'Coding Score',
      value: `${stats.codingScore}%`,
      color:
        'from-violet-500 to-purple-500',
    },

    {
      title: 'Aptitude Score',
      value: `${stats.aptitudeScore}%`,
      color:
        'from-cyan-500 to-blue-500',
    },

    {
      title: 'Interview Score',
      value: `${stats.interviewScore}%`,
      color:
        'from-orange-500 to-red-500',
    },

    {
      title: 'Resume Score',
      value: `${stats.resumeScore}%`,
      color:
        'from-green-500 to-emerald-500',
    },
  ]

  return (
    <div className="relative min-h-screen p-8 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[140px] rounded-full" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize:
            '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 space-y-8">
        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
          <div>
            <motion.h1
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="text-5xl font-black text-white mb-3"
            >
              Welcome Back
            </motion.h1>

            <p className="text-gray-400 text-lg">
              Track your AI-powered
              placement preparation
              journey.
            </p>
          </div>

          <div className="glass rounded-3xl px-8 py-6 cursor-pointer">
            <p className="text-gray-400 text-sm mb-2">
              Daily Goal
            </p>

            <h2 className="text-5xl font-black text-white">
              {Math.round(
                (stats.codingScore +
                  stats.aptitudeScore +
                  stats.interviewScore +
                  stats.resumeScore) /
                  4
              )}
              %
            </h2>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {dashboardStats.map(
            (item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay:
                    index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="glass rounded-3xl p-6 relative overflow-hidden cursor-pointer"
              >
                <div
                  className={`
                    absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20
                    bg-gradient-to-br ${item.color}
                  `}
                />

                <p className="text-gray-400 mb-4 relative z-10">
                  {item.title}
                </p>

                <h2 className="text-5xl font-black text-white relative z-10">
                  {item.value}
                </h2>
              </motion.div>
            )
          )}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Insights */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="glass rounded-3xl p-8 xl:col-span-2 cursor-pointer"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Preparation
              Insights
            </h2>

            <div className="space-y-6">
              {/* Coding */}
              <div className="glass-light rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white font-semibold">
                    Coding Progress
                  </p>

                  <p className="text-cyan-400 font-bold">
                    {
                      stats.codingScore
                    }
                    %
                  </p>
                </div>

                <div className="w-full h-3 rounded-full bg-black/40 overflow-hidden">
                  <div
                    style={{
                      width: `${stats.codingScore}%`,
                    }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  />
                </div>
              </div>

              {/* Aptitude */}
              <div className="glass-light rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white font-semibold">
                    Aptitude
                    Progress
                  </p>

                  <p className="text-orange-400 font-bold">
                    {
                      stats.aptitudeScore
                    }
                    %
                  </p>
                </div>

                <div className="w-full h-3 rounded-full bg-black/40 overflow-hidden">
                  <div
                    style={{
                      width: `${stats.aptitudeScore}%`,
                    }}
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                  />
                </div>
              </div>

              {/* Interview */}
              <div className="glass-light rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white font-semibold">
                    Interview
                    Confidence
                  </p>

                  <p className="text-green-400 font-bold">
                    {
                      stats.interviewScore
                    }
                    %
                  </p>
                </div>

                <div className="w-full h-3 rounded-full bg-black/40 overflow-hidden">
                  <div
                    style={{
                      width: `${stats.interviewScore}%`,
                    }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Focus */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="glass rounded-3xl p-8 cursor-pointer"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Weekly Focus
            </h2>

            <div className="space-y-4">
              {[
                'Dynamic Programming',
                'System Design',
                'HR Preparation',
                'Resume Optimization',
              ].map((item) => (
                <div
                  key={item}
                  className="glass-light rounded-2xl px-5 py-5 text-white font-medium cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}