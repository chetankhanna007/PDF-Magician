import React from 'react'
import { TOOLS } from '../config/tools.js'
import ToolCard from '../components/ui/ToolCard.jsx'

export default function CategoryPage({ category }) {
  let list = TOOLS.filter(t => t.category === category)
  if (category === 'pdf') {
    list = TOOLS.filter(t => t.category === 'pdf' || (t.category === 'converters' && /pdf/i.test(t.name)))
  }
  const titles = { pdf:'PDF Tools', images:'Image Tools', text:'Text Tools', developer:'Developer Tools', qrcode:'QR Code Tools' }
  return (
    <div className="container-x pt-10 pb-8">
      <h1 className="text-2xl font-bold mb-6">{titles[category] || 'Tools'}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {list.map(t => <ToolCard key={t.id} tool={t} />)}
      </div>
    </div>
  )
}
