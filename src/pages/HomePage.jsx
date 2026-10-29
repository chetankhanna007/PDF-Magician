import React, { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Star, FileText, Scissors, Minimize2, RotateCw, Image as ImageIcon, Gift, Zap, Smile, Shield, Rocket, Sparkles } from 'lucide-react'
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
  const whyIcons = [Gift, Zap, Smile, Shield, Rocket]

  return (
    <div>
      <section className="hero pt-10 md:pt-14 pb-8 md:pb-12 mb-6" style={{ background: 'linear-gradient(110deg, #FFFFFF 0%, #FFF8F8 55%, #FFE8EC 100%)' }}>
        <div className="container-x grid md:grid-cols-2 gap-6 items-center">
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
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFE8EC] to-[#FFF0F1] blur-sm" />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#EB1000]/20 via-transparent to-[#EB1000]/10 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFE8EC] to-[#FFF0F1] flex items-center justify-center">
                <img src="/PDF_Magician_Icon.png" alt="PDF Magician" className="w-40 h-40 object-contain drop-shadow-xl" />
              </div>
              <div className="absolute top-4 left-4 w-14 h-14 rounded-full bg-[#EB1000] text-white shadow-lg flex items-center justify-center"><FileText size={24} /></div>
              <div className="absolute top-8 right-6 w-14 h-14 rounded-full bg-[#EB1000] text-white shadow-lg flex items-center justify-center"><Scissors size={24} /></div>
              <div className="absolute bottom-10 left-8 w-14 h-14 rounded-full bg-[#EB1000] text-white shadow-lg flex items-center justify-center"><Minimize2 size={24} /></div>
              <div className="absolute bottom-6 right-4 w-14 h-14 rounded-full bg-[#EB1000] text-white shadow-lg flex items-center justify-center"><RotateCw size={24} /></div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-14 h-14 rounded-full bg-[#EB1000] text-white shadow-lg flex items-center justify-center"><ImageIcon size={24} /></div>
              <Sparkles size={18} className="absolute top-2 right-10 text-[#EB1000] animate-pulse" />
              <Sparkles size={14} className="absolute bottom-4 left-2 text-[#EB1000] animate-pulse" />
              <Sparkles size={16} className="absolute top-1/2 right-0 text-[#EB1000] animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-6 my-4">
        <div className="flex flex-wrap justify-center gap-2">
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
          {(cat === 'all' && !q ? popular : filtered).map(t => <ToolCard key={t.id} tool={t} />)}
        </div>
      </section>

      <div className="hidden md:block"><AdSlot slot="4586978158" label="Advertisement" /></div>
      <div className="md:hidden"><AdSlot slot="5548706031" label="Advertisement" /></div>

      <section className="container-x py-10">
        <h2 className="text-xl md:text-2xl font-bold mb-6 mt-6">Why Choose PDF Magician?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { title: 'Free to Use', text: 'No hidden charges' },
            { title: 'No Installation', text: 'Works in your browser' },
            { title: 'Simple Interface', text: 'Easy to use' },
            { title: 'Privacy Focused', text: 'Files stay on device' },
            { title: 'Fast & Reliable', text: 'Quick results' },
          ].map(({ title, text }, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#E7EAF0] p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#FFF0F1] text-[#EB1000] flex items-center justify-center mx-auto mb-3">{React.createElement(whyIcons[i], { size: 22 })}</div>
              <h3 className="font-semibold text-base text-[#101B3C] mb-1">{title}</h3>
              <p className="text-sm text-[#526582] font-medium">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
