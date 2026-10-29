import React, { useState, useMemo } from 'react'
import { TOOLS } from '../config/tools.js'
import ToolCard from '../components/ui/ToolCard.jsx'

export default function ToolsPage() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('all')
  const filtered = useMemo(() => {
    let list = TOOLS
    if (cat !== 'all') list = list.filter(t => t.category === cat)
    if (q.trim()) list = list.filter(t => (t.name + ' ' + t.keywords.join(' ')).toLowerCase().includes(q.toLowerCase()))
    return list
  }, [q, cat])
  return (
    <div className="container-x pt-10 pb-8">
      <h1 className="text-2xl font-bold mb-4">All Tools</h1>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {['all','pdf','images','qrcode','text','developer'].map(c=>(
          <button key={c} onClick={()=>setCat(c)} className={`px-4 py-2 rounded-full text-sm border ${cat===c?'bg-[#EB1000] text-white border-[#EB1000]':'bg-white border-[#E7EAF0]'}`}>{c}</button>
        ))}
      </div>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search tools..." className="w-full mb-6 px-4 py-3 border border-[#E7EAF0] rounded-xl" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map(t => <ToolCard key={t.id} tool={t} />)}
      </div>
      {filtered.length === 0 && <p className="text-center text-[#526582] mt-8">No tools found.</p>}
    </div>
  )
}
