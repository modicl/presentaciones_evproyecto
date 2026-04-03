import { type ReactNode } from 'react'

interface PdfLayoutProps {
  label: string
  title: string
  accentColor?: string
  children: ReactNode
}

export default function PdfLayout({ label, title, accentColor = '#307FE2', children }: PdfLayoutProps) {
  return (
    <div className="pdf-page">
      <div className="pdf-accent" style={{ backgroundColor: accentColor }} />
      <p className="pdf-label" style={{ color: accentColor }}>{label}</p>
      <h2 className="pdf-title">{title}</h2>
      <div className="pdf-content">{children}</div>
    </div>
  )
}
