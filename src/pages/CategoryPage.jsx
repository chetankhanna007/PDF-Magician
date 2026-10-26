import React from 'react'
import { TOOLS } from '../config/tools.js'
import ToolCard from '../components/ui/ToolCard.jsx'

export default function CategoryPage({ category }) {
  const list = TOOLS.filter(t => t.category === category)
  const titles = { pdf:'PDF Tools', images:'Image Tools', text:'Text Tools', developer:'Developer Tools', converters:'Converters' }
  return (
    <div className="container-x py-8">
      <h1 className="text-2xl font-bold mb-6">{titles[category] || 'Tools'}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {list.map(t => <ToolCard key={t.id} tool={t} />)}
      </div>
    </div>
  )
}
