import React, { useState } from 'react'
import { PDFDocument } from 'pdf-lib'

export default function SplitPdf() {
  const [file, setFile] = useState(null)
  const [range, setRange] = useState('1')
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState(null)

  const split = async () => {
    if (!file) return
    setBusy(true)
    try {
      const bytes = await file.arrayBuffer()
      const doc = await PDFDocument.load(bytes)
      const total = doc.getPageCount()
      const indices = []
      range.split(',').forEach(part => {
        part = part.trim()
        if (part.includes('-')) {
          const [a,b] = part.split('-').map(x=>parseInt(x))
          for (let i=a; i<=b && i<=total; i++) if (i>=1) indices.push(i-1)
        } else {
          const n = parseInt(part)
          if (n>=1 && n<=total) indices.push(n-1)
        }
      })
      const outDoc = await PDFDocument.create()
      const pages = await outDoc.copyPages(doc, indices)
      pages.forEach(p=>outDoc.addPage(p))
      const out = await outDoc.save()
      const blob = new Blob([out], { type: 'application/pdf' })
      setResult(URL.createObjectURL(blob))
    } catch(e){ alert('Failed: '+e.message) }
    finally { setBusy(false) }
  }

  return (
    <div className="max-w-2xl">
      <input type="file" accept="application/pdf" onChange={e=>{setFile(e.target.files[0]); setResult(null)}} className="mb-4" />
      <div className="mb-4">
        <label className="block text-sm mb-1">Page range (e.g. 1-3,5)</label>
        <input value={range} onChange={e=>setRange(e.target.value)} className="border border-[#E7EAF0] rounded-lg px-3 py-2 w-full" />
      </div>
      <button onClick={split} disabled={!file || busy} className="bg-[#EB1000] text-white px-4 py-2 rounded-lg disabled:opacity-50">{busy?'Processing...':'Split'}</button>
      {result && <a href={result} download="split.pdf" className="ml-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg">Download</a>}
    </div>
  )
}
