import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

import {
  doc,
  setDoc,
} from 'firebase/firestore'

import { auth, db } from '../firebase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      return {
        success: true,
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
      }
    }
  }

  const signup = async (email, password) => {
    try {
      const response =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )

      await setDoc(
        doc(db, 'users', response.user.uid),
        {
          email: response.user.email,
          createdAt: new Date(),
          resumeScore: 0,
          codingScore: 0,
          aptitudeScore: 0,
          interviewScore: 0,
        }
      )

      return {
        success: true,
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
      }
    }
  }

  const logout = async () => {
  await signOut(auth)

  window.location.reload()
}

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}