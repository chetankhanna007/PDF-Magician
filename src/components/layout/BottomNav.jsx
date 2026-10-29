import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Grid, Folder, MoreHorizontal, FileText } from 'lucide-react'

export default function BottomNav() {
  const loc = useLocation()
  const items = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/tools', icon: Grid, label: 'Tools' },
    { to: '/pdf-tools', icon: FileText, label: 'PDF Tools' },
    { to: '/about', icon: MoreHorizontal, label: 'More' },
  ]
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E7EAF0] shadow-lg z-40 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-14">
        {items.map(it => {
          const active = loc.pathname === it.to
          return (
            <Link key={it.to} to={it.to} className={`flex flex-col items-center text-xs ${active ? 'text-[#EB1000]' : 'text-[#526582]'}`}>
              <it.icon size={20} />
              <span>{it.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
