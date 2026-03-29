import { type ReactNode } from 'react'

interface SlideLayoutProps {
  label: string
  title: string
  stat: string
  statLabel: string
  statColor?: string
  accentColor?: string
  children: ReactNode
}

export default function SlideLayout({
  label,
  title,
  stat,
  statLabel,
  statColor = '#307FE2',
  accentColor = '#307FE2',
  children,
}: SlideLayoutProps) {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5 z-10"
        style={{ backgroundColor: accentColor }}
      />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-10 py-10 flex-[3] min-w-0">
        <p
          className="font-body text-sm tracking-[0.25em] uppercase mb-3"
          style={{ color: accentColor }}
        >
          {label}
        </p>
        <h2
          className="font-heading text-5xl font-bold leading-tight mb-6"
          style={{ color: 'var(--text)' }}
        >
          {title}
        </h2>
        {children}
      </div>

      {/* Right column — big stat */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-3 px-8"
        style={{
          backgroundColor: 'var(--bg-right)',
          borderColor: 'var(--border)',
        }}
      >
        <span
          className="font-heading font-bold leading-none text-center"
          style={{ fontSize: 'clamp(64px, 9vw, 130px)', color: statColor }}
        >
          {stat}
        </span>
        <span
          className="font-body text-sm uppercase tracking-widest text-center"
          style={{ color: 'var(--text-dim)' }}
        >
          {statLabel}
        </span>
      </div>
    </div>
  )
}
