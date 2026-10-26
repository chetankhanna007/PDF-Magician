import React, { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Star, Sparkles } from 'lucide-react'
import { TOOLS, CATEGORIES } from '../config/tools.js'
import ToolCard from '../components/ui/ToolCard.jsx'
import AdSlot from '../components/ads/AdSlot.jsx'

export default function HomePage() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('all')
  const navigate = useNavigate()

  const filtered = useMemo(() => {
    let list = TOOLS
    if (cat !== 'all') list = list.filter(t => t.category === cat)
    if (q.trim()) list = list.filter(t => (t.name + ' ' + t.keywords.join(' ')).toLowerCase().includes(q.toLowerCase()))
    return list
  }, [q, cat])

  const popular = TOOLS.slice(0, 8)

  return (
    <div>
      <section className="hero" style={{ background: 'linear-gradient(110deg, #FFFFFF 0%, #FFF8F8 55%, #FFE8EC 100%)' }}>
        <div className="container-x py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFF0F1] text-[#EB1000] text-xs font-semibold mb-4">✨ Free Online Tools</span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="text-[#101B3C]">Your PDF Problems,</span><br />
              <span className="text-[#EB1000]">Magically Solved</span>
            </h1>
            <p className="mt-4 text-[#526582] max-w-lg">Merge PDFs, compress images, create QR codes, format text, and do more with simple online tools. No software installation required.</p>
            <div className="mt-6 relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#526582]" />
              <input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>{ if(e.key==='Enter' && filtered[0]) navigate(filtered[0].path) }} placeholder="Search tools (e.g. merge pdf, compress image...)" className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E7EAF0] shadow-sm focus:outline-none focus:border-[#EB1000]" />
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-[#FFE8EC] to-[#FFF0F1] flex items-center justify-center text-6xl">🎩</div>
          </div>
        </div>
      </section>

      <section className="container-x py-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(c => (
            <button key={c.id} onClick={()=>setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium border ${cat===c.id ? 'bg-[#EB1000] text-white border-[#EB1000]' : 'bg-white text-[#101B3C] border-[#E7EAF0]'}`}>
              {c.label}
            </button>
          ))}
        </div>
      </section>

      <section className="container-x py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2"><Star size={20} className="text-[#EB1000]" /> Popular Tools</h2>
          <Link to="/tools" className="text-sm text-[#EB1000] font-medium">View all tools →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(q ? filtered : popular).map(t => <ToolCard key={t.id} tool={t} />)}
        </div>
      </section>

      <div className="hidden md:block"><AdSlot /></div>
      <div className="md:hidden"><AdSlot /></div>

      <section className="container-x py-10">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Why Choose PDF Magician?</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {['Free to Use — No hidden charges','No Installation — Works in your browser','Simple Interface — Easy to use','Privacy Focused — Files stay on device','Fast & Reliable — Quick results'].map((b,i)=>(
            <div key={i} className="bg-[#F8FAFC] rounded-xl p-4 text-sm text-center">
              <div className="w-10 h-10 rounded-full bg-[#FFF0F1] text-[#EB1000] flex items-center justify-center mx-auto mb-2">{i+1}</div>
              {b}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
