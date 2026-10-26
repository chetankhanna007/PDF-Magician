import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Menu, X, Sparkles } from 'lucide-react'
import { TOOLS } from '../../config/tools.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const navigate = useNavigate()

  const results = q.trim()
    ? TOOLS.filter(t => (t.name + ' ' + t.keywords.join(' ')).toLowerCase().includes(q.toLowerCase())).slice(0,8)
    : []

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E7EAF0]">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src="/favicon-32x32.png" alt="PDF Magician" className="w-8 h-8" />
          <span className="font-bold text-lg text-[#101B3C]">PDF Magician</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#526582]">
          <Link to="/tools" className="hover:text-[#EB1000]">All Tools</Link>
          <Link to="/pdf-tools" className="hover:text-[#EB1000]">PDF Tools</Link>
          <Link to="/image-tools" className="hover:text-[#EB1000]">Image Tools</Link>
          <Link to="/text-tools" className="hover:text-[#EB1000]">Text Tools</Link>
          <Link to="/developer-tools" className="hover:text-[#EB1000]">Developer Tools</Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden md:block relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#526582]" />
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search tools..." className="pl-9 pr-3 py-2 text-sm border border-[#E7EAF0] rounded-lg w-56 focus:outline-none focus:border-[#EB1000]" />
            {results.length > 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white border border-[#E7EAF0] rounded-lg shadow-lg z-50">
                {results.map(t => (
                  <button key={t.id} onClick={()=>{navigate(t.path); setQ('')}} className="block w-full text-left px-3 py-2 text-sm hover:bg-[#F8FAFC]">{t.name}</button>
                ))}
              </div>
            )}
          </div>
          <button onClick={()=>setOpen(!open)} className="md:hidden p-2"><Menu size={22}/></button>
          <Link to="/tools" className="hidden md:inline-flex bg-[#EB1000] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#C90E00]">Explore Tools</Link>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#E7EAF0] bg-white px-4 py-3 space-y-2">
          {['/tools','/pdf-tools','/image-tools','/text-tools','/developer-tools','/converters'].map(p=>(
            <Link key={p} to={p} onClick={()=>setOpen(false)} className="block py-2 text-sm font-medium text-[#526582]">{p.replace('/','').replace('-tools',' tools') || 'tools'}</Link>
          ))}
        </div>
      )}
    </header>
  )
}
