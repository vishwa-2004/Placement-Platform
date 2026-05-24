import { motion } from 'framer-motion'

import TubesBackground from '../background/TubesBackground'

export default function LandingPage() {
  return (
    <TubesBackground>
      <div className="min-h-screen text-white overflow-hidden">
        {/* Ambient Orbs */}
        <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />

        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-violet-500/10 blur-[120px] animate-pulse" />

        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">
              PlaceAI
            </h1>

            <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
              <a
                href="#features"
                className="hover:text-white transition"
              >
                Features
              </a>

              <a
                href="#about"
                className="hover:text-white transition"
              >
                About
              </a>
            </div>

            <button
              onClick={() => {
                if (window.openAuthPage) {
                  window.openAuthPage()
                }
              }}
              className="px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:opacity-90 transition"
            >
              Get Started
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="text-6xl md:text-8xl font-black leading-tight mb-8"
            >
              AI Powered
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                Placement
              </span>

              <br />
              Preparation
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Crack coding rounds,
              aptitude, interviews and ATS
              screening using one futuristic
              AI platform.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
              }}
              className="flex flex-col md:flex-row items-center justify-center gap-5"
            >
              <button
                onClick={() => {
                  if (window.openAuthPage) {
                    window.openAuthPage()
                  }
                }}
                className="px-10 py-5 rounded-2xl bg-accent text-white font-semibold text-lg hover:scale-105 transition"
              >
                Start Preparing
              </button>

              <button
                onClick={() => {
                  if (window.openAuthPage) {
                    window.openAuthPage()
                  }
                }}
                className="px-10 py-5 rounded-2xl border border-white/10 backdrop-blur-xl text-white font-semibold text-lg hover:bg-white/10 transition"
              >
                Explore Features
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="py-32 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">
                Everything You Need
              </h2>

              <p className="text-gray-400 text-xl">
                One platform for complete
                placement preparation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {[
                'AI Mock Interviews',
                'Coding Practice',
                'ATS Resume Builder',
                'Analytics Dashboard',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="glass rounded-3xl p-8 cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-3xl mb-6">
                    ⚡
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {item}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Advanced AI-driven
                    preparation experience
                    with futuristic design
                    and immersive interaction.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="py-32 px-6"
        >
          <div className="max-w-5xl mx-auto text-center glass rounded-3xl p-12">
            <h2 className="text-5xl font-bold mb-8">
              About PlaceAI
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed">
              PlaceAI is a futuristic smart
              placement preparation platform
              designed to help students crack
              coding rounds, aptitude tests,
              interviews and resume screening
              using AI-powered tools and
              immersive learning experiences.
            </p>
          </div>
        </section>
      </div>
    </TubesBackground>
  )
}