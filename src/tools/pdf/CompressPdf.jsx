import React, { useState } from 'react'
import { PDFDocument } from 'pdf-lib'

export default function CompressPdf() {
  const [file, setFile] = useState(null)
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState(null)
  const [sizes, setSizes] = useState(null)

  const compress = async () => {
    if (!file) return
    setBusy(true)
    try {
      const bytes = await file.arrayBuffer()
      const doc = await PDFDocument.load(bytes)
      const out = await doc.save({ useObjectStreams: true })
      const blob = new Blob([out], { type: 'application/pdf' })
      setResult(URL.createObjectURL(blob))
      setSizes({ before: file.size, after: blob.size })
    } catch(e){ alert('Failed: '+e.message) }
    finally { setBusy(false) }
  }

  return (
    <div className="max-w-2xl">
      <input type="file" accept="application/pdf" onChange={e=>{setFile(e.target.files[0]); setResult(null); setSizes(null)}} className="mb-4" />
      <button onClick={compress} disabled={!file || busy} className="bg-[#EB1000] text-white px-4 py-2 rounded-lg disabled:opacity-50">{busy?'Processing...':'Compress'}</button>
      {sizes && <p className="mt-3 text-sm">Before: {(sizes.before/1024).toFixed(1)} KB → After: {(sizes.after/1024).toFixed(1)} KB ({(((sizes.before-sizes.after)/sizes.before)*100).toFixed(1)}% reduction)</p>}
      {result && (
        <div className="mt-3 flex gap-3">
          <a href={result} target="_blank" rel="noreferrer" className="inline-block bg-[#EB1000] text-white px-4 py-2 rounded-lg">Preview</a>
          <a href={result} download="compressed.pdf" className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg">Download</a>
        </div>
      )}
      <p className="text-xs text-[#526582] mt-3">Best-effort compression. Results vary by PDF.</p>
    </div>
  )
}
