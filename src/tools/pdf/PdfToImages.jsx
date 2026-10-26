import React, { useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

export default function PdfToImages() {
  const [file, setFile] = useState(null)
  const [images, setImages] = useState([])
  const [busy, setBusy] = useState(false)

  const convert = async () => {
    if (!file) return
    setBusy(true)
    setImages([])
    try {
      const bytes = await file.arrayBuffer()
      const pdf = await pdfjsLib.getDocument({ data: bytes }).promise
      const out = []
      for (let i=1; i<=pdf.numPages; i++) {
        const page = await pdf.getPage(i)
        const viewport = page.getViewport({ scale: 2 })
        const canvas = document.createElement('canvas')
        canvas.width = viewport.width
        canvas.height = viewport.height
        const ctx = canvas.getContext('2d')
        await page.render({ canvasContext: ctx, viewport }).promise
        out.push(canvas.toDataURL('image/png'))
      }
      setImages(out)
    } catch(e){ alert('Failed: '+e.message) }
    finally { setBusy(false) }
  }

  return (
    <div className="max-w-3xl">
      <input type="file" accept="application/pdf" onChange={e=>{setFile(e.target.files[0]); setImages([])}} className="mb-4" />
      <button onClick={convert} disabled={!file || busy} className="bg-[#EB1000] text-white px-4 py-2 rounded-lg disabled:opacity-50">{busy?'Rendering...':'Convert'}</button>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {images.map((src,i)=>(
          <div key={i}>
            <img src={src} alt={`page ${i+1}`} className="border rounded" />
            <a href={src} download={`page-${i+1}.png`} className="text-sm text-[#EB1000]">Download</a>
          </div>
        ))}
      </div>
    </div>
  )
}
