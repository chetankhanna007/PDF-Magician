import React from 'react'

export default function AdSlot({ label = 'Advertisement' }) {
  return (
    <div className="my-8 mx-auto max-w-[970px]">
      <div className="text-xs text-[#526582] text-center mb-1">{label}</div>
      <div className="min-h-[90px] bg-[#F8FAFC] border border-dashed border-[#E7EAF0] rounded-lg flex items-center justify-center text-[#526582] text-sm">
        Ad placeholder (insert AdSense code)
      </div>
    </div>
  )
}
