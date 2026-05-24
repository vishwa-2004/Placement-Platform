import { useState } from 'react'
import { motion } from 'framer-motion'

import { useAuth } from '../../hooks/useAuth'

import TubesBackground from '../background/TubesBackground'

export default function AuthGate() {
  const { login, signup } = useAuth()

  const [isSignup, setIsSignup] =
    useState(false)

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const [error, setError] =
    useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')

    let response

    if (isSignup) {
      response = await signup(
        email,
        password
      )
    } else {
      response = await login(
        email,
        password
      )
    }

    if (!response.success) {
      setError(response.error)
    }
  }

  return (
    <TubesBackground>
      <div className="min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="glass rounded-3xl p-10 w-full max-w-md backdrop-blur-xl border border-white/10"
        >
          <h1 className="text-5xl font-bold text-white mb-3 text-center">
            PlaceAI
          </h1>

          <p className="text-gray-400 mb-8 text-center">
            Smart Placement Preparation Platform
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full bg-panel border border-border rounded-xl px-4 py-3 outline-none text-white"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full bg-panel border border-border rounded-xl px-4 py-3 outline-none text-white"
            />

            {error && (
              <div className="text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-accent text-white font-semibold hover:opacity-90 transition"
            >
              {isSignup
                ? 'Create Account'
                : 'Login'}
            </button>
          </form>

          <button
            onClick={() =>
              setIsSignup(!isSignup)
            }
            className="mt-6 text-cyan-400 text-sm w-full text-center"
          >
            {isSignup
              ? 'Already have an account? Login'
              : 'Create new account'}
          </button>
        </motion.div>
      </div>
    </TubesBackground>
  )
}