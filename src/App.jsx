import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import ToolsPage from './pages/ToolsPage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import ToolPage from './pages/ToolPage.jsx'
import InfoPage from './pages/InfoPage.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/pdf-tools" element={<CategoryPage category="pdf" />} />
          <Route path="/image-tools" element={<CategoryPage category="images" />} />
          <Route path="/text-tools" element={<CategoryPage category="text" />} />
          <Route path="/developer-tools" element={<CategoryPage category="developer" />} />
          <Route path="/converters" element={<CategoryPage category="converters" />} />
          <Route path="/tools/:slug" element={<ToolPage />} />
          <Route path="/about" element={<InfoPage type="about" />} />
          <Route path="/contact" element={<InfoPage type="contact" />} />
          <Route path="/privacy-policy" element={<InfoPage type="privacy" />} />
          <Route path="/terms-of-service" element={<InfoPage type="terms" />} />
          <Route path="/cookie-policy" element={<InfoPage type="cookie" />} />
          <Route path="/disclaimer" element={<InfoPage type="disclaimer" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
