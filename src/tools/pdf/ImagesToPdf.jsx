import React, { useState } from 'react'
import { PDFDocument } from 'pdf-lib'

export default function ImagesToPdf() {
  const [files, setFiles] = useState([])
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState(null)

  const convert = async () => {
    setBusy(true)
    try {
      const pdf = await PDFDocument.create()
      for (const f of files) {
        const bytes = await f.arrayBuffer()
        let img
        if (f.type === 'image/png') img = await pdf.embedPng(bytes)
        else img = await pdf.embedJpg(bytes)
        const page = pdf.addPage([img.width, img.height])
        page.drawImage(img, { x:0, y:0, width: img.width, height: img.height })
      }
      const out = await pdf.save()
      const blob = new Blob([out], { type: 'application/pdf' })
      setResult(URL.createObjectURL(blob))
    } catch(e){ alert('Failed: '+e.message) }
    finally { setBusy(false) }
  }

  return (
    <div className="max-w-2xl">
      <input type="file" multiple accept="image/png,image/jpeg" onChange={e=>{setFiles(Array.from(e.target.files)); setResult(null)}} className="mb-4" />
      <button onClick={convert} disabled={files.length===0 || busy} className="bg-[#EB1000] text-white px-4 py-2 rounded-lg disabled:opacity-50">{busy?'Processing...':'Convert'}</button>
      {result && <a href={result} download="images.pdf" className="ml-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg">Download</a>}
    </div>
  )
}
