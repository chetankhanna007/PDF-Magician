import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { TOOLS } from '../config/tools.js'
import AdSlot from '../components/ads/AdSlot.jsx'
import MergePdf from '../tools/pdf/MergePdf.jsx'
import SplitPdf from '../tools/pdf/SplitPdf.jsx'
import RotatePdf from '../tools/pdf/RotatePdf.jsx'
import CompressPdf from '../tools/pdf/CompressPdf.jsx'
import ImagesToPdf from '../tools/pdf/ImagesToPdf.jsx'
import PdfToImages from '../tools/pdf/PdfToImages.jsx'
import ImageCompressor from '../tools/image/ImageCompressor.jsx'
import ImageResizer from '../tools/image/ImageResizer.jsx'
import QrCodeGenerator from '../tools/developer/QrCodeGenerator.jsx'
import WordCounter from '../tools/text/WordCounter.jsx'
import CaseConverter from '../tools/text/CaseConverter.jsx'
import JsonFormatter from '../tools/developer/JsonFormatter.jsx'
import UrlEncoderDecoder from '../tools/developer/UrlEncoderDecoder.jsx'

const MAP = {
  'merge-pdf': MergePdf,
  'split-pdf': SplitPdf,
  'rotate-pdf': RotatePdf,
  'compress-pdf': CompressPdf,
  'images-to-pdf': ImagesToPdf,
  'pdf-to-images': PdfToImages,
  'image-compressor': ImageCompressor,
  'image-resizer': ImageResizer,
  'qr-code-generator': QrCodeGenerator,
  'word-counter': WordCounter,
  'case-converter': CaseConverter,
  'json-formatter': JsonFormatter,
  'url-encoder-decoder': UrlEncoderDecoder,
}

export default function ToolPage() {
  const { slug } = useParams()
  const tool = TOOLS.find(t => t.id === slug)
  const Comp = MAP[slug]
  if (!tool || !Comp) return <div className="container-x py-8">Tool not found. <Link to="/tools">Back</Link></div>
  return (
    <div className="container-x py-8">
      <nav className="text-sm text-[#526582] mb-4"><Link to="/">Home</Link> / <Link to="/tools">Tools</Link> / {tool.name}</nav>
      <h1 className="text-2xl font-bold mb-2">{tool.name}</h1>
      <p className="text-[#526582] mb-6">{tool.desc}</p>
      <Comp />
      <AdSlot />
    </div>
  )
}
