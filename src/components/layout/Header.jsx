import {
  Search,
  Bell,
  Sparkles,
} from 'lucide-react'

import { motion } from 'framer-motion'

import { useAuth } from '../../hooks/useAuth'

export default function Header() {
  const { logout } = useAuth()

  return (
    <motion.div
      initial={{
        y: -20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className="
        relative
        h-24
        border-b
        border-white/10
        bg-black/20
        backdrop-blur-2xl
        px-8
        flex
        items-center
        justify-between
        overflow-hidden
      "
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute right-0 top-0 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between w-full">
        {/* Left */}
        <div>
          <h1 className="text-3xl font-black text-white text-glow">
            AI Placement Prep
          </h1>

          <p className="text-sm text-gray-400 mt-1">
            Smart placement preparation
            ecosystem
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative glass rounded-2xl overflow-hidden">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
            />

            <input
              type="text"
              placeholder="Search modules, questions, analytics..."
              className="
                w-[340px]
                bg-transparent
                border-none
                outline-none
                text-white
                pl-12
                pr-5
                py-4
                placeholder:text-gray-500
              "
            />
          </div>
          {/* Notifications */}
          <button
            className="
              glass
              w-14
              h-14
              rounded-2xl
              flex
              items-center
              justify-center
              text-white
            "
          >
            <Bell size={20} />
          </button>

          {/* Profile */}
          <div
            className="
              glass
              flex
              items-center
              gap-4
              px-5
              py-3
              rounded-2xl
            "
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_25px_rgba(34,211,238,0.25)]">
              V
            </div>

            <div className="hidden xl:block">
              <p className="text-white font-semibold">
                Vishwanath
              </p>
              <p className="text-xs text-gray-400">
                AI Explorer
              </p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={logout}
            className="
              px-6
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-violet-500
              text-white
              font-semibold
              shadow-[0_0_30px_rgba(34,211,238,0.22)]
            "
          >
            Logout
          </button>
        </div>
      </div>
    </motion.div>
  )
}