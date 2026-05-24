import { useEffect, useState } from 'react'

export default function TubesBackground({
  children,
}) {
  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    })

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })

      document.documentElement.style.setProperty(
        '--mouse-x',
        `${e.clientX}px`
      )

      document.documentElement.style.setProperty(
        '--mouse-y',
        `${e.clientY}px`
      )
    }

    window.addEventListener(
      'mousemove',
      handleMove
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMove
      )
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617]">
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[140px] animate-pulse" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[140px] animate-pulse" />

        <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] rounded-full bg-fuchsia-500/10 blur-[120px] animate-pulse" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-all duration-75"
        style={{
          background: `radial-gradient(
            350px circle at ${position.x}px ${position.y}px,
            rgba(99,102,241,0.22),
            transparent 40%
          )`,
        }}
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  )
}