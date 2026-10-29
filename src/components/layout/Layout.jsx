import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import BottomNav from './BottomNav.jsx'

export default function Layout({ children }) {
  const loc = useLocation()
  const topPad = loc.pathname === '/' ? '' : 'pt-4 md:pt-6'
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [loc.pathname])
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 ${topPad} pb-16 md:pb-0 min-h-[75vh]`}>{children}</main>
      <Footer />
      <BottomNav />
    </div>
  )
}
