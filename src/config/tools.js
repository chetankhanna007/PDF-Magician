export const CATEGORIES = [
  { id: 'all', label: 'All Tools' },
  { id: 'pdf', label: 'PDF' },
  { id: 'images', label: 'Images' },
  { id: 'text', label: 'Text' },
  { id: 'developer', label: 'Developer' },
  { id: 'qrcode', label: 'QR Code' },
]

export const TOOLS = [
  { id: 'merge-pdf', name: 'Merge PDF', desc: 'Combine multiple PDFs into one.', category: 'pdf', color: 'pdf-card-bg', icon: 'Files', path: '/tools/merge-pdf', keywords: ['merge','combine','pdf'] },
  { id: 'split-pdf', name: 'Split PDF', desc: 'Extract pages from a PDF.', category: 'pdf', color: 'card-blue', icon: 'Scissors', path: '/tools/split-pdf', keywords: ['split','extract','pages'] },
  { id: 'rotate-pdf', name: 'Rotate PDF', desc: 'Rotate pages in a PDF.', category: 'pdf', color: 'card-teal', icon: 'RotateCw', path: '/tools/rotate-pdf', keywords: ['rotate'] },
  { id: 'compress-pdf', name: 'Compress PDF', desc: 'Reduce PDF file size.', category: 'pdf', color: 'card-green', icon: 'Minimize2', path: '/tools/compress-pdf', keywords: ['compress','reduce','size'] },
  { id: 'images-to-pdf', name: 'Images to PDF', desc: 'Convert images into a PDF.', category: 'pdf', color: 'card-orange', icon: 'Image', path: '/tools/images-to-pdf', keywords: ['images','to pdf','convert'] },
  { id: 'pdf-to-images', name: 'PDF to Images', desc: 'Render PDF pages as images.', category: 'pdf', color: 'card-purple', icon: 'FileImage', path: '/tools/pdf-to-images', keywords: ['pdf to images','render'] },
  { id: 'image-compressor', name: 'Image Compressor', desc: 'Compress images in browser.', category: 'images', color: 'card-purple', icon: 'ImageDown', path: '/tools/image-compressor', keywords: ['image','compress'] },
  { id: 'image-resizer', name: 'Image Resizer', desc: 'Resize images with aspect lock.', category: 'images', color: 'card-blue', icon: 'Maximize2', path: '/tools/image-resizer', keywords: ['resize','image'] },
  { id: 'qr-code-generator', name: 'QR Code Generator', desc: 'Generate QR codes from text.', category: 'qrcode', color: 'card-teal', icon: 'QrCode', path: '/tools/qr-code-generator', keywords: ['qr','code','generate'] },
  { id: 'qr-code-scanner', name: 'QR Code Scanner', desc: 'Scan QR codes from camera or image.', category: 'qrcode', color: 'card-teal', icon: 'ScanLine', path: '/tools/qr-code-scanner', keywords: ['qr','scan','code'] },
  { id: 'word-counter', name: 'Word Counter', desc: 'Count words, chars, sentences.', category: 'text', color: 'text-card-bg', icon: 'Type', path: '/tools/word-counter', keywords: ['word','counter','count'] },
  { id: 'case-converter', name: 'Case Converter', desc: 'Convert text case.', category: 'text', color: 'text-card-bg', icon: 'CaseSensitive', path: '/tools/case-converter', keywords: ['case','upper','lower'] },
  { id: 'json-formatter', name: 'JSON Formatter', desc: 'Validate and format JSON.', category: 'developer', color: 'developer-card-bg', icon: 'Braces', path: '/tools/json-formatter', keywords: ['json','format','validate'] },
  { id: 'url-encoder-decoder', name: 'URL Encoder/Decoder', desc: 'Encode or decode URLs.', category: 'developer', color: 'developer-card-bg', icon: 'Link', path: '/tools/url-encoder-decoder', keywords: ['url','encode','decode'] },
]
