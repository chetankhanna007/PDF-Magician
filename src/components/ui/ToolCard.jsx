import React from 'react'
import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'

export default function ToolCard({ tool }) {
  const Icon = Icons[tool.icon] || Icons.File
  return (
    <Link to={tool.path} className="block rounded-xl border border-[#E7EAF0] p-4 shadow-[0_3px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_10px_24px_rgba(15,23,42,0.09)] hover:-translate-y-1 hover:border-[#EB1000] transition-all bg-white" style={{ backgroundColor: `var(--${tool.color})` }}>
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-white/70 flex items-center justify-center text-[#EB1000]">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-sm md:text-base text-[#101B3C]">{tool.name}</h3>
          <p className="text-xs md:text-sm text-[#526582] mt-1">{tool.desc}</p>
          <span className="text-xs text-[#EB1000] font-medium mt-2 inline-block">Open Tool →</span>
        </div>
      </div>
    </Link>
  )
}
