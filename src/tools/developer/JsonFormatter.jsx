import React, { useState } from 'react'

export default function JsonFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const format = () => {
    try { setOutput(JSON.stringify(JSON.parse(input), null, 2)); setError('') }
    catch(e){ setError(e.message); setOutput('') }
  }
  const minify = () => {
    try { setOutput(JSON.stringify(JSON.parse(input))); setError('') }
    catch(e){ setError(e.message); setOutput('') }
  }
  return (
    <div>
      <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full border border-[#E7EAF0] rounded-lg px-3 py-2" rows={8} placeholder="Paste JSON" />
      <div className="flex gap-2 my-3">
        <button onClick={format} className="px-3 py-1 bg-[#EB1000] text-white rounded">Format</button>
        <button onClick={minify} className="px-3 py-1 bg-[#EB1000] text-white rounded">Minify</button>
        <button onClick={()=>navigator.clipboard.writeText(output)} className="px-3 py-1 border rounded">Copy</button>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <textarea value={output} readOnly className="w-full border border-[#E7EAF0] rounded-lg px-3 py-2" rows={8} />
    </div>
  )
}
