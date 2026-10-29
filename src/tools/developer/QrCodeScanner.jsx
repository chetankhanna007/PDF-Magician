import React, { useState, useRef, useCallback } from 'react'

export default function QrCodeScanner() {
  const [result, setResult] = useState('')
  const videoRef = useRef(null)
  const [scanning, setScanning] = useState(false)
  const scanningRef = useRef(false)

  const stopCamera = useCallback(() => {
    const stream = videoRef.current?.srcObject
    stream?.getTracks().forEach(t => t.stop())
    scanningRef.current = false
    setScanning(false)
  }, [])

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      videoRef.current.srcObject = stream
      await videoRef.current.play()
      scanningRef.current = true
      setScanning(true)
      scanLoop()
    } catch (e) {
      alert('Camera access failed: ' + e.message)
    }
  }

  const scanLoop = async () => {
    const video = videoRef.current
    if (!video) return
    if ('BarcodeDetector' in window) {
      const detector = new BarcodeDetector({ formats: ['qr_code'] })
      const loop = async () => {
        if (!scanningRef.current) return
        if (video.readyState >= 2) {
          try {
            const codes = await detector.detect(video)
            if (codes.length) {
              setResult(codes[0].rawValue)
              stopCamera()
              return
            }
          } catch {}
        }
        if (scanningRef.current) requestAnimationFrame(loop)
      }
      loop()
    } else {
      alert('BarcodeDetector not supported. Try Chrome/Edge or upload an image.')
      stopCamera()
    }
  }

  const onImage = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    const img = new Image()
    img.onload = async () => {
      if ('BarcodeDetector' in window) {
        const detector = new BarcodeDetector({ formats: ['qr_code'] })
        try {
          const codes = await detector.detect(img)
          setResult(codes.length ? codes[0].rawValue : 'No QR code found')
        } catch {
          setResult('Failed to scan image.')
        }
      } else {
        setResult('BarcodeDetector not supported in this browser.')
      }
    }
    img.src = URL.createObjectURL(file)
  }

  return (
    <div className="max-w-2xl">
      <div className="flex gap-2 mb-4">
        {!scanning ? (
          <button onClick={startCamera} className="bg-[#EB1000] text-white px-4 py-2 rounded-lg">Start Camera</button>
        ) : (
          <button onClick={stopCamera} className="bg-gray-600 text-white px-4 py-2 rounded-lg">Stop</button>
        )}
        <label className="bg-[#EB1000] text-white px-4 py-2 rounded-lg cursor-pointer">
          Scan Image <input type="file" accept="image/*" onChange={onImage} className="hidden" />
        </label>
      </div>
      <video ref={videoRef} className="w-full rounded-lg border border-[#E7EAF0]" muted playsInline />
      {result && (
        <div className="mt-4 p-3 bg-[#F8FAFC] rounded-lg">
          <p className="text-sm break-all">{result}</p>
          <button onClick={() => navigator.clipboard.writeText(result)} className="mt-2 px-3 py-1 border rounded">Copy</button>
        </div>
      )}
    </div>
  )
}
