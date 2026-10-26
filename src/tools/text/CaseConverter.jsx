import React, { useState } from 'react'

function titleCase(s){ return s.toLowerCase().replace(/\b\w/g, c=>c.toUpperCase()) }
function sentenceCase(s){ return s.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c=>c.toUpperCase()) }
function altCase(s){ return s.split('').map((c,i)=> i%2===0?c.toLowerCase():c.toUpperCase()).join('') }

export default function CaseConverter() {
  const [text, setText] = useState('')
  const [out, setOut] = useState('')
  const apply = fn => setOut(fn(text))
  return (
    <div>
      <textarea value={text} onChange={e=>setText(e.target.value)} className="w-full border border-[#E7EAF0] rounded-lg px-3 py-2" rows={6} placeholder="Input" />
      <div className="flex flex-wrap gap-2 my-3">
        <button onClick={()=>apply(s=>s.toUpperCase())} className="px-3 py-1 bg-[#EB1000] text-white rounded">UPPER</button>
        <button onClick={()=>apply(s=>s.toLowerCase())} className="px-3 py-1 bg-[#EB1000] text-white rounded">lower</button>
        <button onClick={()=>apply(titleCase)} className="px-3 py-1 bg-[#EB1000] text-white rounded">Title Case</button>
        <button onClick={()=>apply(sentenceCase)} className="px-3 py-1 bg-[#EB1000] text-white rounded">Sentence case</button>
        <button onClick={()=>apply(altCase)} className="px-3 py-1 bg-[#EB1000] text-white rounded">aLtErNaTiNg</button>
      </div>
      <textarea value={out} readOnly className="w-full border border-[#E7EAF0] rounded-lg px-3 py-2" rows={6} />
      <div className="flex gap-2 mt-2">
        <button onClick={()=>navigator.clipboard.writeText(out)} className="px-3 py-1 border rounded">Copy</button>
        <button onClick={()=>{setText('');setOut('')}} className="px-3 py-1 border rounded">Clear</button>
      </div>
    </div>
  )
}
