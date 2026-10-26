import React, { useState } from 'react'
import { PDFDocument } from 'pdf-lib'

export default function MergePdf() {
  const [files, setFiles] = useState([])
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState(null)

  const onFiles = e => {
    setFiles(Array.from(e.target.files))
    setResult(null)
  }

  const merge = async () => {
    setBusy(true)
    try {
      const merged = await PDFDocument.create()
      for (const f of files) {
        const bytes = await f.arrayBuffer()
        const doc = await PDFDocument.load(bytes)
        const pages = await merged.copyPages(doc, doc.getPageIndices())
        pages.forEach(p => merged.addPage(p))
      }
      const out = await merged.save()
      const blob = new Blob([out], { type: 'application/pdf' })
      setResult(URL.createObjectURL(blob))
    } catch (e) {
      alert('Failed: ' + e.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <input type="file" multiple accept="application/pdf" onChange={onFiles} className="mb-4" />
      <ul className="mb-4 text-sm">
        {files.map((f,i)=><li key={i}>{f.name} ({(f.size/1024).toFixed(1)} KB)</li>)}
      </ul>
      <button onClick={merge} disabled={files.length<2 || busy} className="bg-[#EB1000] text-white px-4 py-2 rounded-lg disabled:opacity-50">
        {busy ? 'Merging...' : 'Merge PDFs'}
      </button>
      {result && <a href={result} download="merged.pdf" className="ml-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg">Download</a>}
    </div>
  )
}
