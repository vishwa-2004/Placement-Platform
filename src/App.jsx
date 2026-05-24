import { useState } from 'react'

import AppShell from './components/layout/AppShell'

import LandingPage from './components/landing/LandingPage'

import {
  AuthProvider,
  useAuth,
} from './hooks/useAuth'

import { AppProvider } from './hooks/useApp'

import AuthGate from './components/auth/AuthGate'

function AppContent() {
  const { user } = useAuth()

  const [showAuth, setShowAuth] =
  useState(false)

window.openAuthPage = () => {
  setShowAuth(true)
}
  if (!user && !showAuth) {
    return (
      <>
        <LandingPage />

      </>
    )
  }

  if (!user) {
    return <AuthGate />
  }

  return <AppShell />
}

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </AuthProvider>
  )
}