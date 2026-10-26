import React, { useState } from 'react'
import { PDFDocument, degrees } from 'pdf-lib'

export default function RotatePdf() {
  const [file, setFile] = useState(null)
  const [angle, setAngle] = useState(90)
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState(null)

  const rotate = async () => {
    if (!file) return
    setBusy(true)
    try {
      const bytes = await file.arrayBuffer()
      const doc = await PDFDocument.load(bytes)
      doc.getPages().forEach(p => p.setRotation(degrees((p.getRotation().angle + angle) % 360)))
      const out = await doc.save()
      const blob = new Blob([out], { type: 'application/pdf' })
      setResult(URL.createObjectURL(blob))
    } catch(e){ alert('Failed: '+e.message) }
    finally { setBusy(false) }
  }

  return (
    <div className="max-w-2xl">
      <input type="file" accept="application/pdf" onChange={e=>{setFile(e.target.files[0]); setResult(null)}} className="mb-4" />
      <div className="mb-4">
        <label className="block text-sm mb-1">Rotation angle</label>
        <select value={angle} onChange={e=>setAngle(parseInt(e.target.value))} className="border border-[#E7EAF0] rounded-lg px-3 py-2">
          <option value={90}>90°</option>
          <option value={180}>180°</option>
          <option value={270}>270°</option>
        </select>
      </div>
      <button onClick={rotate} disabled={!file || busy} className="bg-[#EB1000] text-white px-4 py-2 rounded-lg disabled:opacity-50">{busy?'Processing...':'Rotate'}</button>
      {result && <a href={result} download="rotated.pdf" className="ml-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg">Download</a>}
    </div>
  )
}
