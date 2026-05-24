import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Send, Brain, Code2, FileText, Mic, BarChart3 } from 'lucide-react'

// ✅ No API key needed here anymore — it's safe on the server!

const suggestions = [
  'Generate interview questions',
  'Improve my resume',
  'Teach DSA roadmap',
  'How to crack placements?',
  'Explain time complexity',
  'Create aptitude test',
]

const aiCapabilities = [
  { icon: Code2,     title: 'Coding Mentor' },
  { icon: FileText,  title: 'Resume Optimizer' },
  { icon: Brain,     title: 'Interview Coach' },
  { icon: BarChart3, title: 'Analytics Intelligence' },
]

export default function AiChat() {
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: 'Hello Vishwanath 👋 I am your AI placement assistant. I can help you with coding preparation, aptitude, resume optimization, interview preparation, analytics insights and placement strategy.',
    },
  ])

  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMessage = { role: 'user', text: input }
    setMessages((prev) => [...prev, userMessage])
    const currentInput = input
    setInput('')
    setLoading(true)

    try {
      // ✅ Calls your own backend — API key is hidden and safe!
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput }),
      })

      const data = await response.json()
      const text = data?.text || 'No response received.'

      setMessages((prev) => [...prev, { role: 'ai', text }])
    } catch (error) {
      console.error(error)
      setMessages((prev) => [
        ...prev,
        { role: 'ai', text: 'Error connecting to AI. Please try again.' },
      ])
    }

    setLoading(false)
  }

  return (
    <div className="relative min-h-screen overflow-hidden p-8">
      {/* Ambient */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 space-y-8">
        {/* Hero */}
        <div className="glass rounded-[32px] p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
            <div>
              <p className="text-cyan-300 mb-4">Centralized AI Intelligence</p>
              <h1 className="text-5xl font-black text-white mb-5">AI Placement Assistant</h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                Unified AI system for coding preparation, aptitude guidance, resume optimization,
                interview coaching and placement strategy.
              </p>
            </div>
            <div className="glass rounded-[28px] px-10 py-8 text-center min-w-[260px]">
              <p className="text-gray-400 mb-3">AI System Status</p>
              <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                ONLINE
              </h2>
            </div>
          </div>
        </div>

        {/* AI Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {aiCapabilities.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="glass rounded-[32px] p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[60px] rounded-full" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-black text-white">{item.title}</h2>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Main Chat */}
        <div className="glass rounded-[32px] overflow-hidden h-[800px] flex flex-col">
          {/* Header */}
          <div className="border-b border-white/10 p-8 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-40 rounded-full" />
                <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.25)]">
                  <Sparkles size={34} className="text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-black text-white">AI Assistant Workspace</h1>
                <p className="text-gray-400 mt-2">Multi-domain placement intelligence engine</p>
              </div>
            </div>
            <div className="glass px-6 py-4 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <p className="text-green-400 font-medium">AI Active</p>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className="px-8 pt-6 flex flex-wrap gap-4">
            {suggestions.map((item) => (
              <button
                key={item}
                onClick={() => setInput(item)}
                className="glass-light px-5 py-3 rounded-2xl text-sm text-gray-300 hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-8 py-8 space-y-6">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`max-w-[78%] rounded-[28px] px-6 py-5 leading-relaxed ${
                  message.role === 'user'
                    ? 'ml-auto bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-[0_0_30px_rgba(34,211,238,0.15)]'
                    : 'glass text-gray-200'
                }`}
              >
                {message.text}
              </motion.div>
            ))}

            {loading && (
              <div className="glass rounded-[28px] px-6 py-5 text-gray-300 w-fit animate-pulse">
                AI is thinking...
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-8">
            <div className="glass rounded-[28px] p-3 flex items-center gap-4">
              <button className="w-14 h-14 rounded-2xl glass-light flex items-center justify-center text-cyan-300">
                <Mic size={22} />
              </button>

              <input
                type="text"
                placeholder="Ask AI anything about coding, placements, resumes, interviews..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') sendMessage()
                }}
                className="flex-1 bg-transparent outline-none text-white px-4 py-4 placeholder:text-gray-500"
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 flex items-center justify-center text-white shadow-[0_0_30px_rgba(34,211,238,0.22)] disabled:opacity-50"
              >
                <Send size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}