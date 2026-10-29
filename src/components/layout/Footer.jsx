import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-[#374151] mt-12 pt-6 pb-6 mb-16 md:mb-0">
      <div className="container-x py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm mb-8">
        <div>
          <h4 className="font-semibold mb-3 text-[#EB1000] text-lg">PDF Magician</h4>
          <p className="text-gray-300">Your PDF Problems, Magically Solved. More Tools. Less Hassle.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[#EB1000] text-lg">Tools</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/pdf-tools" className="hover:text-white">PDF Tools</Link></li>
            <li><Link to="/image-tools" className="hover:text-white">Image Tools</Link></li>
            <li><Link to="/text-tools" className="hover:text-white">Text Tools</Link></li>
            <li><Link to="/developer-tools" className="hover:text-white">Developer Tools</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[#EB1000] text-lg">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[#EB1000] text-lg">Legal</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-white">Terms</Link></li>
            <li><Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-x pt-4 pb-4 mt-12 border-t border-[#374151] text-xs text-gray-300 text-center">
        © {new Date().getFullYear()} PDF Magician. All rights reserved.
      </div>
    </footer>
  )
}
