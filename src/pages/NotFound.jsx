import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-x py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-[#526582] mb-6">Page not found.</p>
      <Link to="/" className="bg-[#EB1000] text-white px-4 py-2 rounded-lg">Go Home</Link>
    </div>
  )
}
