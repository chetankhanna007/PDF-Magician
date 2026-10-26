import React, { useState, useMemo } from 'react'

export default function WordCounter() {
  const [text, setText] = useState('')
  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const chars = text.length
    const sentences = text.split(/[.!?]+/).filter(s=>s.trim()).length
    const paragraphs = text.split(/\n\s*\n/).filter(p=>p.trim()).length
    return { words, chars, sentences, paragraphs }
  }, [text])
  return (
    <div>
      <textarea value={text} onChange={e=>setText(e.target.value)} className="w-full border border-[#E7EAF0] rounded-lg px-3 py-2" rows={8} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        <div className="bg-[#F8FAFC] p-3 rounded-lg text-center"><div className="text-2xl font-bold">{stats.words}</div><div className="text-xs">Words</div></div>
        <div className="bg-[#F8FAFC] p-3 rounded-lg text-center"><div className="text-2xl font-bold">{stats.chars}</div><div className="text-xs">Characters</div></div>
        <div className="bg-[#F8FAFC] p-3 rounded-lg text-center"><div className="text-2xl font-bold">{stats.sentences}</div><div className="text-xs">Sentences</div></div>
        <div className="bg-[#F8FAFC] p-3 rounded-lg text-center"><div className="text-2xl font-bold">{stats.paragraphs}</div><div className="text-xs">Paragraphs</div></div>
      </div>
    </div>
  )
}
