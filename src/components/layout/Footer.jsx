import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E7EAF0] mt-12">
      <div className="container-x py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-3 text-[#101B3C]">PDF Magician</h4>
          <p className="text-[#526582]">Your PDF Problems, Magically Solved. More Tools. Less Hassle.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[#101B3C]">Tools</h4>
          <ul className="space-y-2 text-[#526582]">
            <li><Link to="/pdf-tools">PDF Tools</Link></li>
            <li><Link to="/image-tools">Image Tools</Link></li>
            <li><Link to="/text-tools">Text Tools</Link></li>
            <li><Link to="/developer-tools">Developer Tools</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[#101B3C]">Company</h4>
          <ul className="space-y-2 text-[#526582]">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[#101B3C]">Legal</h4>
          <ul className="space-y-2 text-[#526582]">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms</Link></li>
            <li><Link to="/cookie-policy">Cookie Policy</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-x py-4 border-t border-[#E7EAF0] text-xs text-[#526582]">
        © {new Date().getFullYear()} PDF Magician. All rights reserved.
      </div>
    </footer>
  )
}
