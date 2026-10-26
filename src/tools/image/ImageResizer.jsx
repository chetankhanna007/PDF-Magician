import React, { useState } from 'react'

export default function ImageResizer() {
  const [file, setFile] = useState(null)
  const [w, setW] = useState(800)
  const [h, setH] = useState(600)
  const [lock, setLock] = useState(true)
  const [result, setResult] = useState(null)
  const [orig, setOrig] = useState(null)

  const onFile = e => {
    const f = e.target.files[0]
    setFile(f)
    setResult(null)
    const img = new Image()
    img.onload = () => { setOrig({w:img.width,h:img.height}); setW(img.width); setH(img.height) }
    img.src = URL.createObjectURL(f)
  }

  const resize = () => {
    if (!file || !orig) return
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img,0,0,w,h)
      canvas.toBlob(blob => setResult(URL.createObjectURL(blob)), file.type || 'image/png')
    }
    img.src = URL.createObjectURL(file)
  }

  const onW = e => {
    const nw = parseInt(e.target.value)
    setW(nw)
    if (lock && orig) setH(Math.round(nw * orig.h / orig.w))
  }
  const onH = e => {
    const nh = parseInt(e.target.value)
    setH(nh)
    if (lock && orig) setW(Math.round(nh * orig.w / orig.h))
  }

  return (
    <div className="max-w-2xl">
      <input type="file" accept="image/*" onChange={onFile} className="mb-4" />
      {orig && <p className="text-sm mb-2">Original: {orig.w}×{orig.h}</p>}
      <div className="flex gap-3 mb-4">
        <input type="number" value={w} onChange={onW} className="border rounded-lg px-3 py-2 w-28" />
        <span className="self-center">×</span>
        <input type="number" value={h} onChange={onH} className="border rounded-lg px-3 py-2 w-28" />
        <label className="self-center text-sm"><input type="checkbox" checked={lock} onChange={e=>setLock(e.target.checked)} className="mr-1" />Lock ratio</label>
      </div>
      <button onClick={resize} disabled={!file} className="bg-[#EB1000] text-white px-4 py-2 rounded-lg disabled:opacity-50">Resize</button>
      {result && <a href={result} download="resized.png" className="ml-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg">Download</a>}
    </div>
  )
}
