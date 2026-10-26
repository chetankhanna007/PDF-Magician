import React from 'react'

const content = {
  about: { title: 'About', body: 'PDF Magician provides free online PDF, image, text, and developer tools. Files are processed in your browser where possible.' },
  contact: { title: 'Contact', body: 'Contact us at support@pdfmagician.in.' },
  privacy: { title: 'Privacy Policy', body: 'We process files locally where possible. We do not store uploaded files. Advertising partners may collect data per their policies.' },
  terms: { title: 'Terms of Service', body: 'Use the tools responsibly. No warranty provided.' },
  cookie: { title: 'Cookie Policy', body: 'We use cookies for analytics and advertising where applicable.' },
  disclaimer: { title: 'Disclaimer', body: 'Tools provided as-is. Verify outputs before use.' },
}

export default function InfoPage({ type }) {
  const c = content[type] || content.about
  return (
    <div className="container-x py-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">{c.title}</h1>
      <p className="text-[#526582]">{c.body}</p>
    </div>
  )
}
