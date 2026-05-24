import {
  LayoutDashboard,
  FileText,
  Brain,
  Code2,
  BarChart3,
  Sparkles,
} from 'lucide-react'

import { motion } from 'framer-motion'

import { useApp } from '../../hooks/useApp'

const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },

  {
    id: 'resume',
    label: 'Resume',
    icon: FileText,
  },

  {
    id: 'interview',
    label: 'Interview',
    icon: Brain,
  },

  {
    id: 'aptitude',
    label: 'Aptitude',
    icon: Brain,
  },

  {
    id: 'coding',
    label: 'Coding',
    icon: Code2,
  },

  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
  },

  {
    id: 'ai',
    label: 'AI Assistant',
    icon: Sparkles,
  },
]

export default function Sidebar() {
  const {
    activeSection,
    setActiveSection,
  } = useApp()

  return (
    <motion.div
      initial={{
        x: -40,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      className="
        relative
        w-72
        min-h-screen
        overflow-hidden
        border-r
        border-white/10
        bg-black/30
        backdrop-blur-2xl
        p-6
      "
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative z-10">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-white text-glow">
            PlaceAI
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            Smart Placement Platform
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon

            const active =
              activeSection === item.id

            return (
              <motion.button
                key={item.id}
                onClick={() =>
                  setActiveSection(item.id)
                }
                whileHover={{
                  x: 6,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className={`
                  group
                  relative
                  w-full
                  overflow-hidden
                  rounded-2xl
                  px-5
                  py-4
                  flex
                  items-center
                  gap-4
                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                        glass
                        text-white
                        border border-cyan-400/30
                        shadow-[0_0_25px_rgba(34,211,238,0.18)]
                      `
                      : `
                        text-gray-400
                        hover:text-white
                        hover:bg-white/5
                      `
                  }
                `}
              >
                {/* Active Glow */}
                {active && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10"
                  />
                )}

                {/* Icon */}
                <div
                  className={`
                    relative z-10
                    flex items-center justify-center
                    w-11 h-11 rounded-xl
                    transition-all duration-300

                    ${
                      active
                        ? `
                          bg-cyan-500/20
                          text-cyan-300
                          shadow-[0_0_20px_rgba(34,211,238,0.25)]
                        `
                        : `
                          bg-white/5
                          group-hover:bg-white/10
                        `
                    }
                  `}
                >
                  <Icon size={20} />
                </div>

                {/* Label */}
                <span className="relative z-10 font-medium text-[15px]">
                  {item.label}
                </span>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-2xl" />
              </motion.button>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}