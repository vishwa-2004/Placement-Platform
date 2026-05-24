import { AnimatePresence, motion } from 'framer-motion'

import Sidebar from './Sidebar'

import Header from './Header'

import Dashboard from '../dashboard/Dashboard'

import ResumeBuilder from '../resume/ResumeBuilder'

import MockInterview from '../interview/MockInterview'

import AptitudePractice from '../aptitude/AptitudePractice'

import CodingPrep from '../coding/CodingPrep'

import ProgressAnalytics from '../analytics/ProgressAnalytics'

import AiChat from '../ai/AiChat'

import { useApp } from '../../hooks/useApp'

export default function AppShell() {
  const { activeSection } = useApp()

  const renderSection = () => {
    switch (activeSection) {
      case 'resume':
        return <ResumeBuilder />

      case 'interview':
        return <MockInterview />

      case 'aptitude':
        return <AptitudePractice />

      case 'coding':
        return <CodingPrep />

      case 'analytics':
        return <ProgressAnalytics />

      case 'ai':
        return <AiChat />

      case 'dashboard':
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex min-h-screen bg-[#020617] overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Layout */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[140px] rounded-full pointer-events-none" />

        {/* Header */}
        <Header />

        {/* Animated Content */}
        <main className="flex-1 overflow-y-auto relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: 'easeInOut',
              }}
              className="min-h-full"
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}