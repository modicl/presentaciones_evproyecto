const LEVEL_COLOR: Record<string, string> = {
  'Bajo':       '#43B02A',
  'Media-Alta': '#FFB800',
  'Muy Alto':   '#E53E3E',
}

const SATELLITE_FORCES = [
  {
    id: 'top',
    label: 'Amenaza de\nnuevos entrantes',
    level: 'Bajo',
    note: 'Barreras regulatorias\ny de inversión',
    style: { top: '0%', left: '50%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'left',
    label: 'Poder negociador\nProveedores',
    level: 'Muy Alto',
    note: 'Duopolio médicos\n+ sindicatos',
    style: { top: '50%', left: '0%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'right',
    label: 'Poder negociador\nPacientes',
    level: 'Bajo',
    note: 'Dependencia crítica\ndel sistema público',
    style: { top: '50%', left: '100%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'bottom',
    label: 'Amenaza de\nsustitutos',
    level: 'Media-Alta',
    note: 'Urgencias + medicina\ninformal zonas aisladas',
    style: { top: '100%', left: '50%', transform: 'translate(-50%, -50%)' },
  },
]

export default function Slide04Porter() {
  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10" style={{ backgroundColor: '#E53E3E' }} />

      {/* Header */}
      <div className="pl-16 pr-10 pt-7 pb-2 shrink-0">
        <p className="font-body text-sm tracking-[0.25em] uppercase mb-1" style={{ color: '#E53E3E' }}>
          Análisis del Microentorno
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight" style={{ color: 'var(--text)' }}>
          Modelo de Porter — 5 Fuerzas
        </h2>
      </div>

      {/* Content row: description panel + diagram */}
      <div className="flex-1 flex gap-6 pl-16 pr-10 pb-6 pt-3 min-h-0">

        {/* Description panel — Rivalidad entre competidores */}
        <div
          className="self-center shrink-0 rounded-xl px-4 py-3"
          style={{
            width: '240px',
            backgroundColor: 'var(--bg-card)',
            borderLeft: '4px solid #E53E3E',
            borderTop: '1px solid var(--border)',
            borderRight: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: '#E53E3E' }} />
            <span
              className="font-body font-bold uppercase tracking-widest"
              style={{ fontSize: '15px', color: '#E53E3E' }}
            >
              Rivalidad — Muy Alto
            </span>
          </div>
          <p
            className="font-body leading-snug"
            style={{ fontSize: '18px', color: 'var(--text-muted)' }}
          >
            RedNorte no compite por "mercado", sino por{' '}
            <strong style={{ color: 'var(--text)' }}>Talento Especializado</strong>.
            Existe una "fuga de cerebros" hacia el sector privado y las mutuales mineras,
            que ofrecen incentivos superiores a la administración pública, generando una{' '}
            <strong style={{ color: 'var(--text)' }}>deuda técnica y clínica permanente</strong>.
          </p>
        </div>

        {/* Diagram */}
        <div className="flex-1 flex items-center justify-center">
          {/* Square container */}
          <div className="relative" style={{ width: 'min(64vh, 64vw)', height: 'min(64vh, 64vw)' }}>

            {/* Ring */}
            <div
              className="absolute inset-0 rounded-full border-4 border-dashed"
              style={{ borderColor: 'var(--border)', margin: '13%' }}
            />

            {/* Center circle — Rivalidad */}
            <div
              className="absolute rounded-full flex flex-col items-center justify-center text-center z-10 p-3"
              style={{
                width: '30%',
                height: '30%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#E53E3E',
                boxShadow: '0 0 0 5px #E53E3E33',
              }}
            >
              <span
                className="font-body text-white font-bold leading-tight"
                style={{ fontSize: 'clamp(12px, 1.6vw, 17px)' }}
              >
                Rivalidad entre competidores
              </span>
              <span
                className="mt-1 font-body font-bold text-white/80"
                style={{ fontSize: 'clamp(9px, 1.1vw, 13px)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                Muy Alto
              </span>
            </div>

            {/* Satellite circles */}
            {SATELLITE_FORCES.map(({ id, label, level, note, style }) => {
              const color = LEVEL_COLOR[level]
              return (
                <div
                  key={id}
                  className="absolute rounded-full flex flex-col items-center justify-center text-center z-10 p-3"
                  style={{
                    ...style,
                    width: 'min(20vh, 20vw)',
                    height: 'min(20vh, 20vw)',
                    backgroundColor: color,
                    boxShadow: `0 0 0 4px ${color}44`,
                  }}
                >
                  <span
                    className="font-body font-bold leading-tight whitespace-pre-line"
                    style={{
                      fontSize: 'clamp(11px, 1.3vw, 15px)',
                      color: level === 'Media-Alta' ? 'rgba(0,0,0,0.85)' : 'white',
                    }}
                  >
                    {label}
                  </span>
                  <span
                    className="font-body leading-tight whitespace-pre-line mt-1"
                    style={{
                      fontSize: 'clamp(9px, 1vw, 12px)',
                      color: level === 'Media-Alta' ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.8)',
                    }}
                  >
                    {note}
                  </span>
                  <span
                    className="font-body font-bold mt-1 px-2 py-0.5 rounded"
                    style={{
                      fontSize: 'clamp(7px, 0.85vw, 10px)',
                      backgroundColor: level === 'Media-Alta' ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.2)',
                      color: level === 'Media-Alta' ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.9)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {level}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
