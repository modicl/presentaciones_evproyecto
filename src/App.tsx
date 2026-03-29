import { useState, useEffect } from 'react'
import duocLogo from './assets/Logo_DuocUC.svg'
import Slide01Portada from './slides/Slide01Portada'
import Slide02Contexto from './slides/Slide02Contexto'
import Slide03Diagnostico from './slides/Slide03Diagnostico'
import Slide04Porter from './slides/Slide04Porter'
import Slide05Pestel from './slides/Slide05Pestel'
import Slide06Objetivos from './slides/Slide06Objetivos'
import Slide07Producto from './slides/Slide07Producto'
import Slide08Stakeholders from './slides/Slide08Stakeholders'
import Slide09PropuestaValor from './slides/Slide09PropuestaValor'
import Slide10Conclusiones from './slides/Slide10Conclusiones'

const SLIDES = [
  Slide01Portada,
  Slide02Contexto,
  Slide03Diagnostico,
  Slide04Porter,
  Slide05Pestel,
  Slide06Objetivos,
  Slide07Producto,
  Slide08Stakeholders,
  Slide09PropuestaValor,
  Slide10Conclusiones,
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [light, setLight] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrent(c => Math.min(c + 1, SLIDES.length - 1))
      if (e.key === 'ArrowLeft')  setCurrent(c => Math.max(c - 1, 0))
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const SlideComponent = SLIDES[current]
  const progress = (current / (SLIDES.length - 1)) * 100

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden${light ? ' theme-light' : ''}`}
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <SlideComponent />

      {/* Duoc logo — top right */}
      <div className="absolute top-5 right-6 z-20 pointer-events-none select-none">
        <img src={duocLogo} alt="Duoc UC" className="h-8 opacity-70" />
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ backgroundColor: 'var(--border)' }}>
        <div
          className="h-full bg-duoc-blue transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide counter */}
      <div
        className="absolute bottom-4 right-6 font-body text-xs select-none"
        style={{ color: 'var(--text-dim)' }}
      >
        {current + 1} / {SLIDES.length}
      </div>

      {/* Theme toggle */}
      <button
        onClick={() => setLight(l => !l)}
        title={light ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
        className="absolute bottom-3 left-6 z-20 flex items-center gap-1.5 font-body text-xs px-2.5 py-1 rounded-full border transition-colors select-none"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border)',
          color: 'var(--text-label)',
        }}
      >
        {light ? '🌙 Oscuro' : '☀️ Claro'}
      </button>

      {/* Arrow hints */}
      {current > 0 && (
        <button
          onClick={() => setCurrent(c => c - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 transition-colors text-2xl select-none"
          style={{ color: 'var(--border)' }}
        >
          ‹
        </button>
      )}
      {current < SLIDES.length - 1 && (
        <button
          onClick={() => setCurrent(c => c + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors text-2xl select-none"
          style={{ color: 'var(--border)' }}
        >
          ›
        </button>
      )}
    </div>
  )
}
