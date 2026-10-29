import React, { useState, useRef } from 'react'

export default function ImageCompressor() {
  const [file, setFile] = useState(null)
  const [quality, setQuality] = useState(0.7)
  const [result, setResult] = useState(null)
  const [sizes, setSizes] = useState(null)

  const compress = () => {
    if (!file) return
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      canvas.toBlob(blob => {
        if (!blob) return
        setResult(URL.createObjectURL(blob))
        setSizes({ before: file.size, after: blob.size })
      }, 'image/jpeg', quality)
    }
    img.src = URL.createObjectURL(file)
  }

  return (
    <div className="max-w-2xl">
      <input type="file" accept="image/*" onChange={e => { setFile(e.target.files[0]); setResult(null); setSizes(null) }} className="mb-4" />
      <div className="mb-4">
        <label className="text-sm">Quality: {Math.round(quality * 100)}%</label>
        <input type="range" min="0.1" max="1" step="0.05" value={quality} onChange={e => setQuality(parseFloat(e.target.value))} className="w-full" />
      </div>
      <button onClick={compress} disabled={!file} className="bg-[#EB1000] text-white px-4 py-2 rounded-lg disabled:opacity-50">Compress</button>
      {sizes && <p className="mt-3 text-sm">Before: {(sizes.before / 1024).toFixed(1)} KB → After: {(sizes.after / 1024).toFixed(1)} KB</p>}
      {result && (
        <div className="mt-4 space-y-3">
          <img src={result} alt="compressed preview" className="max-w-full rounded-lg border border-[#E7EAF0]" />
          <div className="flex gap-3">
            <a href={result} target="_blank" rel="noreferrer" className="inline-block bg-[#EB1000] text-white px-4 py-2 rounded-lg">Preview</a>
            <a href={result} download="compressed.jpg" className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg">Download</a>
          </div>
        </div>
      )}
    </div>
  )
}
