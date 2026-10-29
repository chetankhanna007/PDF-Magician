import React, { useEffect, useRef, useState } from 'react'

export default function AdSlot({ slot = '4586978158', client = 'ca-pub-7782406274859608' }) {
  const adRef = useRef(null)
  const pushed = useRef(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (pushed.current) return
    pushed.current = true
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      // ignore
    }
    const timer = setTimeout(() => setLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`my-8 mx-auto max-w-[970px] overflow-hidden transition-all ${loaded ? 'min-h-[90px]' : 'h-0 my-0'}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
