import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './pdf/pdf.css'
import App from './App'
import PdfView from './pdf/PdfView'

const isPdf = new URLSearchParams(window.location.search).has('pdf')

if (isPdf) {
  document.documentElement.style.overflow = 'auto'
  document.body.style.overflow = 'auto'
  document.body.style.height = 'auto'
  const root = document.getElementById('root')
  if (root) { root.style.overflow = 'auto'; root.style.height = 'auto' }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isPdf ? <PdfView /> : <App />}
  </StrictMode>,
)
