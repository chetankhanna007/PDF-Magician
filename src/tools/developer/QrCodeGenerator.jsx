import React, { useState, useRef } from 'react'
import QRCode from 'qrcode'

export default function QrCodeGenerator() {
  const [text, setText] = useState('https://pdfmagician.in')
  const [url, setUrl] = useState('')
  const canvasRef = useRef(null)

  const generate = async () => {
    try {
      const dataUrl = await QRCode.toDataURL(text, { width: 300 })
      setUrl(dataUrl)
    } catch(e){ alert('Failed: '+e.message) }
  }

  return (
    <div className="max-w-2xl">
      <textarea value={text} onChange={e=>setText(e.target.value)} className="w-full border border-[#E7EAF0] rounded-lg px-3 py-2 mb-4" rows={3} />
      <button onClick={generate} className="bg-[#EB1000] text-white px-4 py-2 rounded-lg">Generate</button>
      {url && (
        <div className="mt-4">
          <img src={url} alt="QR code" />
          <a href={url} download="qrcode.png" className="mt-2 inline-block bg-green-600 text-white px-4 py-2 rounded-lg">Download PNG</a>
        </div>
      )}
    </div>
  )
}
