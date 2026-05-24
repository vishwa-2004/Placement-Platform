import { useState } from 'react'

import { motion } from 'framer-motion'

import {
  FileText,
  Upload,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'

const tabs = [
  {
    id: 'build',
    label: 'Build Resume',
    icon: FileText,
  },

  {
    id: 'upload',
    label: 'Upload Resume',
    icon: Upload,
  },

  {
    id: 'analysis',
    label: 'ATS Analysis',
    icon: ShieldCheck,
  },

  {
    id: 'diagnostics',
    label: 'AI Diagnostics',
    icon: Sparkles,
  },
]

export default function ResumeBuilder() {
  const [activeTab, setActiveTab] =
    useState('build')

  const [formData, setFormData] =
    useState({
      name: '',
      role: '',
      email: '',
      phone: '',
      college: '',
      degree: '',
      cgpa: '',
      skills: '',
      certifications: '',
      projects: '',
      summary: '',
    })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    })
  }

  const renderContent = () => {
    switch (activeTab) {
      /* BUILD RESUME */
      case 'build':
        return (
          <div className="flex flex-col xl:flex-row gap-8 items-start">
           {/* LEFT */}
<motion.div
  initial={{
    opacity: 0,
    x: -20,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  className="glass rounded-[32px] p-8 flex-1"
>
  <h1 className="text-4xl font-black text-white mb-10">
    Engineering Resume Builder
  </h1>

  <div className="space-y-5">
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={formData.name}
      onChange={handleChange}
      className="glass-light w-full rounded-2xl px-5 py-5 text-white outline-none placeholder:text-gray-500"
    />

    <input
      type="text"
      name="role"
      placeholder="Target Role"
      value={formData.role}
      onChange={handleChange}
      className="glass-light w-full rounded-2xl px-5 py-5 text-white outline-none placeholder:text-gray-500"
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="glass-light w-full rounded-2xl px-5 py-5 text-white outline-none placeholder:text-gray-500"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="glass-light w-full rounded-2xl px-5 py-5 text-white outline-none placeholder:text-gray-500"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <input
        type="text"
        name="college"
        placeholder="College"
        value={formData.college}
        onChange={handleChange}
        className="glass-light w-full rounded-2xl px-5 py-5 text-white outline-none placeholder:text-gray-500"
      />

      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={formData.degree}
        onChange={handleChange}
        className="glass-light w-full rounded-2xl px-5 py-5 text-white outline-none placeholder:text-gray-500"
      />
    </div>

    <input
      type="text"
      name="cgpa"
      placeholder="CGPA"
      value={formData.cgpa}
      onChange={handleChange}
      className="glass-light w-full rounded-2xl px-5 py-5 text-white outline-none placeholder:text-gray-500"
    />

    <textarea
      rows={4}
      name="summary"
      placeholder="Professional Summary"
      value={formData.summary}
      onChange={handleChange}
      className="glass-light w-full rounded-2xl px-5 py-5 text-white outline-none resize-none placeholder:text-gray-500"
    />

    <textarea
      rows={4}
      name="skills"
      placeholder="Technical Skills"
      value={formData.skills}
      onChange={handleChange}
      className="glass-light w-full rounded-2xl px-5 py-5 text-white outline-none resize-none placeholder:text-gray-500"
    />

    <textarea
      rows={4}
      name="projects"
      placeholder="Projects"
      value={formData.projects}
      onChange={handleChange}
      className="glass-light w-full rounded-2xl px-5 py-5 text-white outline-none resize-none placeholder:text-gray-500"
    />

    <textarea
      rows={3}
      name="certifications"
      placeholder="Certifications"
      value={formData.certifications}
      onChange={handleChange}
      className="glass-light w-full rounded-2xl px-5 py-5 text-white outline-none resize-none placeholder:text-gray-500"
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-3">
      <button
        className="
          py-5
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-violet-500
          text-white
          font-semibold
          shadow-[0_0_30px_rgba(34,211,238,0.2)]
        "
      >
        Generate Resume
      </button>

      <button
        className="
          glass
          py-5
          rounded-2xl
          text-white
          font-semibold
          border
          border-cyan-500/20
        "
      >
        Live Preview
      </button>

      <button
        className="
          glass
          py-5
          rounded-2xl
          text-cyan-300
          font-semibold
          border
          border-cyan-500/20
          shadow-[0_0_20px_rgba(34,211,238,0.08)]
        "
      >
        Download PDF
      </button>
    </div>
  </div>
</motion.div>

{/* RIGHT */}
<motion.div
  initial={{
    opacity: 0,
    x: 20,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  className="
    bg-white
    rounded-[32px]
    overflow-hidden
    shadow-2xl
    border
    border-gray-200
    w-full
    xl:w-[42%]
    flex-shrink-0
  "
>
  {/* Top Header */}
  <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-12 py-12 text-white">
    <h1 className="text-5xl font-black mb-3 tracking-tight">
      {formData.name || 'Your Name'}
    </h1>

    <p className="text-cyan-400 text-2xl font-semibold mb-6">
      {formData.role || 'Target Role'}
    </p>

    <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
      <p>
        {formData.email || 'email@example.com'}
      </p>

      <p>
        {formData.phone || '+91 9876543210'}
      </p>
    </div>
  </div>

  {/* Resume Body */}
  <div className="p-12">
    <div className="mb-10">
      <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-5">
        <h2 className="text-2xl font-black text-gray-900">
          Education
        </h2>

        <div className="w-12 h-1 rounded-full bg-cyan-500" />
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800">
          {formData.degree || 'Degree'}
        </h3>

        <p className="text-gray-600 mt-1">
          {formData.college || 'College Name'}
        </p>

        <p className="text-gray-500 mt-2">
          CGPA: {formData.cgpa || '--'}
        </p>
      </div>
    </div>

    <div className="mb-10">
      <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-5">
        <h2 className="text-2xl font-black text-gray-900">
          Professional Summary
        </h2>

        <div className="w-12 h-1 rounded-full bg-violet-500" />
      </div>

      <p className="text-gray-700 leading-relaxed text-[16px]">
        {formData.summary ||
          'Your professional summary will appear here.'}
      </p>
    </div>

    <div className="mb-10">
      <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-5">
        <h2 className="text-2xl font-black text-gray-900">
          Technical Skills
        </h2>

        <div className="w-12 h-1 rounded-full bg-cyan-500" />
      </div>

      <div className="flex flex-wrap gap-3">
        {(formData.skills || '')
          .split(',')
          .filter(Boolean)
          .map((skill, index) => (
            <div
              key={index}
              className="
                px-4
                py-2
                rounded-xl
                bg-slate-100
                text-slate-800
                font-medium
                text-sm
              "
            >
              {skill.trim()}
            </div>
          ))}

        {!formData.skills && (
          <p className="text-gray-500">
            Skills will appear here.
          </p>
        )}
      </div>
    </div>

    <div className="mb-10">
      <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-5">
        <h2 className="text-2xl font-black text-gray-900">
          Projects
        </h2>

        <div className="w-12 h-1 rounded-full bg-violet-500" />
      </div>

      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {formData.projects ||
          'Projects will appear here.'}
      </p>
    </div>

    <div>
      <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-5">
        <h2 className="text-2xl font-black text-gray-900">
          Certifications
        </h2>

        <div className="w-12 h-1 rounded-full bg-cyan-500" />
      </div>

      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {formData.certifications ||
          'Certifications will appear here.'}
      </p>
    </div>
  </div>
</motion.div>
          </div>
        )

      /* UPLOAD */
case 'upload':
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="space-y-8"
    >
      {/* Upload Area */}
      <div className="glass rounded-[32px] p-12">
        <div
          className="
            relative
            overflow-hidden
            border-2
            border-dashed
            border-cyan-500/30
            rounded-[32px]
            p-20
            text-center
            transition-all
            hover:border-cyan-400
            hover:bg-cyan-500/5
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 pointer-events-none" />

          {/* Icon */}
          <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mx-auto mb-10 shadow-[0_0_60px_rgba(34,211,238,0.25)]">
            <Upload
              size={52}
              className="text-white"
            />
          </div>

          {/* Title */}
          <h1 className="relative z-10 text-5xl font-black text-white mb-6">
            Upload Resume
          </h1>

          <p className="relative z-10 text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Upload your existing PDF or DOCX resume
            to perform ATS analysis, AI diagnostics,
            keyword matching and recruiter optimization.
          </p>

          {/* Hidden Input */}
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            id="resume-upload"
          />

          {/* Upload Button */}
          <label
            htmlFor="resume-upload"
            className="
              relative
              z-10
              inline-flex
              items-center
              justify-center
              px-12
              py-5
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-violet-500
              text-white
              font-semibold
              text-lg
              cursor-pointer
              shadow-[0_0_40px_rgba(34,211,238,0.25)]
            "
          >
            Choose Resume File
          </label>

          {/* Drag Text */}
          <p className="relative z-10 text-gray-500 mt-8">
            Drag & drop resume here
          </p>
        </div>
      </div>

      {/* Upload Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Supported Formats',
            value: 'PDF, DOC, DOCX',
          },

          {
            title: 'Maximum File Size',
            value: '5 MB',
          },

          {
            title: 'ATS Parsing',
            value: 'AI Enabled',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="glass rounded-3xl p-8 text-center"
          >
            <h2 className="text-white text-2xl font-bold mb-4">
              {item.title}
            </h2>

            <p className="text-cyan-400 text-xl font-semibold">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Analysis Flow */}
      <div className="glass rounded-[32px] p-10">
        <h2 className="text-3xl font-black text-white mb-10">
          What Happens After Upload?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            'Resume Parsing',

            'ATS Keyword Analysis',

            'AI Diagnostics',

            'Optimization Suggestions',
          ].map((step, index) => (
            <div
              key={step}
              className="glass-light rounded-3xl p-8 text-center relative"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-white font-black text-xl mx-auto mb-5">
                {index + 1}
              </div>

              <p className="text-white font-semibold">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
/* ATS ANALYSIS */
case 'analysis':
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="glass rounded-[32px] p-10">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
          <div>
            <h1 className="text-5xl font-black text-white mb-4">
              ATS Analysis Dashboard
            </h1>

            <p className="text-gray-400 text-lg">
              AI-powered recruiter compatibility analysis
              for engineering placements.
            </p>
          </div>

          {/* ATS Score */}
          <div className="glass rounded-[28px] px-10 py-8 text-center min-w-[240px]">
            <p className="text-gray-400 mb-3">
              Overall ATS Score
            </p>

            <h2 className="text-7xl font-black bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              --
            </h2>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          {
            title: 'Keyword Match',
            score: '--',
            color:
              'from-cyan-500 to-blue-500',
          },

          {
            title: 'Formatting Score',
            score: '--',
            color:
              'from-violet-500 to-purple-500',
          },

          {
            title: 'Skill Coverage',
            score: '--',
            color:
              'from-green-500 to-emerald-500',
          },

          {
            title: 'Recruiter Readiness',
            score: '--',
            color:
              'from-orange-500 to-red-500',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="glass rounded-[32px] p-8 relative overflow-hidden"
          >
            {/* Glow */}
            <div
              className={`
                absolute top-0 right-0
                w-40 h-40 rounded-full blur-3xl opacity-20
                bg-gradient-to-br ${item.color}
              `}
            />

            <div className="relative z-10">
              <p className="text-gray-400 mb-5">
                {item.title}
              </p>

              <h2 className="text-6xl font-black text-white mb-5">
                {item.score}
              </h2>

              {/* Progress */}
              <div className="w-full h-3 rounded-full bg-black/40 overflow-hidden">
                <div
                  className={`
                    h-full rounded-full
                    bg-gradient-to-r ${item.color}
                  `}
                  style={{
                    width: '0%',
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recruiter Scan */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Left */}
        <div className="glass rounded-[32px] p-10">
          <h2 className="text-3xl font-black text-white mb-10">
            Recruiter Scan Results
          </h2>

          <div className="space-y-6">
            {[
              'Resume Structure',
              'ATS Parsing',
              'Technical Skills',
              'Project Quality',
              'Keyword Optimization',
            ].map((item) => (
              <div
                key={item}
                className="glass-light rounded-3xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white font-semibold">
                    {item}
                  </p>

                  <p className="text-gray-400 font-bold">
                    Awaiting Analysis
                  </p>
                </div>

                <div className="w-full h-3 rounded-full bg-black/40 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                    style={{
                      width: '0%',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="glass rounded-[32px] p-10">
          <h2 className="text-3xl font-black text-white mb-10">
            Analysis Results
          </h2>

          <div className="glass-light rounded-3xl p-12 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
              <ShieldCheck
                size={40}
                className="text-white"
              />
            </div>

            <h3 className="text-3xl font-bold text-white mb-5">
              No Resume Analysis Yet
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Upload or build a resume to generate ATS
              scores, recruiter analysis, keyword matching,
              AI diagnostics and optimization suggestions.
            </p>
          </div>
        </div>
      </div>

      {/* ATS Workflow */}
      <div className="glass rounded-[32px] p-10">
        <h2 className="text-3xl font-black text-white mb-10">
          ATS Optimization Workflow
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            'Resume Parsing',

            'Keyword Detection',

            'ATS Compatibility',

            'Recruiter Scoring',

            'AI Optimization',
          ].map((step, index) => (
            <div
              key={step}
              className="glass-light rounded-3xl p-8 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-white font-black text-2xl mx-auto mb-5 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                {index + 1}
              </div>

              <p className="text-white font-semibold">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
    /* DIAGNOSTICS */
case 'diagnostics':
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="glass rounded-[32px] p-10">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
          <div>
            <h1 className="text-5xl font-black text-white mb-4">
              AI Diagnostics Workspace
            </h1>

            <p className="text-gray-400 text-lg">
              Intelligent resume diagnostics and recruiter-focused optimization insights.
            </p>
          </div>

          <div className="glass rounded-[28px] px-8 py-6">
            <p className="text-gray-400 mb-2">
              Analysis Status
            </p>

            <h2 className="text-3xl font-black text-cyan-400">
              Awaiting Resume
            </h2>
          </div>
        </div>
      </div>

      {/* Diagnostic Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {[
          {
            title:
              'Strong Points',
            color:
              'text-green-400',
            border:
              'border-green-500/20',
            glow:
              'shadow-[0_0_40px_rgba(34,197,94,0.08)]',
          },

          {
            title:
              'Weak Points',
            color:
              'text-orange-400',
            border:
              'border-orange-500/20',
            glow:
              'shadow-[0_0_40px_rgba(249,115,22,0.08)]',
          },

          {
            title:
              'To-Be-Added Enhancements',
            color:
              'text-cyan-400',
            border:
              'border-cyan-500/20',
            glow:
              'shadow-[0_0_40px_rgba(34,211,238,0.08)]',
          },
        ].map((item) => (
          <div
            key={item.title}
            className={`
              glass
              rounded-[32px]
              p-8
              border
              ${item.border}
              ${item.glow}
            `}
          >
            <h1
              className={`text-3xl font-black mb-8 ${item.color}`}
            >
              {item.title}
            </h1>

            <div className="glass-light rounded-3xl p-8 min-h-[300px] flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                <Sparkles
                  size={32}
                  className="text-white"
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                No Diagnostics Available
              </h3>

              <p className="text-gray-400 leading-relaxed max-w-sm">
                Upload or build a resume to generate AI-powered recruiter diagnostics and optimization insights.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Diagnostic Workflow */}
      <div className="glass rounded-[32px] p-10">
        <h2 className="text-3xl font-black text-white mb-10">
          AI Diagnostic Pipeline
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            'Resume Parsing',

            'ATS Evaluation',

            'Recruiter Diagnostics',

            'AI Optimization',
          ].map((step, index) => (
            <div
              key={step}
              className="glass-light rounded-3xl p-8 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-white font-black text-2xl mx-auto mb-5 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                {index + 1}
              </div>

              <p className="text-white font-semibold">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Future AI Features */}
      <div className="glass rounded-[32px] p-10">
        <h2 className="text-3xl font-black text-white mb-10">
          Future AI Diagnostic Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            'Action Verb Analysis',

            'Project Impact Detection',

            'Keyword Intelligence',

            'Recruiter Readiness Score',
          ].map((feature) => (
            <div
              key={feature}
              className="glass-light rounded-3xl p-6 text-center"
            >
              <p className="text-white font-semibold leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )

      default:
        return null
    }
  }

  return (
    <div className="relative p-8 overflow-hidden min-h-screen">
      {/* Ambient */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[140px] rounded-full" />

      {/* Main */}
      <div className="relative z-10">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4">
          {tabs.map((tab) => {
            const Icon = tab.icon

            const active =
              activeTab === tab.id

            return (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(tab.id)
                }
                className={`
                  flex
                  items-center
                  gap-3
                  px-6
                  py-4
                  rounded-2xl
                  transition-all

                  ${
                    active
                      ? `
                        bg-gradient-to-r
                        from-cyan-500
                        to-violet-500
                        text-white
                      `
                      : `
                        glass
                        text-gray-300
                      `
                  }
                `}
              >
                <Icon size={20} />

                <span>
                  {tab.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  )
}