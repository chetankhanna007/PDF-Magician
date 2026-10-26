import React, { useState } from 'react'

export default function UrlEncoderDecoder() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  return (
    <div>
      <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full border border-[#E7EAF0] rounded-lg px-3 py-2" rows={6} />
      <div className="flex gap-2 my-3">
        <button onClick={()=>{ try { setOutput(encodeURIComponent(input)) } catch(e){ setOutput('Error') } }} className="px-3 py-1 bg-[#EB1000] text-white rounded">Encode</button>
        <button onClick={()=>{ try { setOutput(decodeURIComponent(input)) } catch(e){ setOutput('Error: '+e.message) } }} className="px-3 py-1 bg-[#EB1000] text-white rounded">Decode</button>
        <button onClick={()=>navigator.clipboard.writeText(output)} className="px-3 py-1 border rounded">Copy</button>
      </div>
      <textarea value={output} readOnly className="w-full border border-[#E7EAF0] rounded-lg px-3 py-2" rows={6} />
    </div>
  )
}
