import SlideLayout from './SlideLayout'

const FORCES = [
  { force: 'Poder negociador — Pacientes', level: 'Bajo', color: '#43B02A', note: 'Dependencia crítica del sistema público; asimetría de información' },
  { force: 'Poder negociador — Proveedores', level: 'Muy Alto', color: '#E53E3E', note: 'Duopolio: médicos especialistas escasos + sindicatos FENATS/CONFUSAM' },
  { force: 'Amenaza de nuevos competidores', level: 'Bajo', color: '#43B02A', note: 'Barreras estructurales y regulatorias de alta inversión' },
  { force: 'Amenaza de sustitutos', level: 'Media-Alta', color: '#FFB800', note: 'Urgencias como válvula de escape; medicina informal en zonas aisladas' },
  { force: 'Rivalidad entre competidores', level: 'Muy Alto', color: '#E53E3E', note: '"Brain drain" hacia sector privado y mutuales mineras' },
]

export default function Slide04Porter() {
  return (
    <SlideLayout
      label="Análisis del Microentorno"
      title="Modelo de Porter — 5 Fuerzas"
      stat="2"
      statLabel='fuerzas en nivel "Muy Alto"'
      statColor="#E53E3E"
    >
      <div className="space-y-3">
        {FORCES.map(({ force, level, color, note }) => (
          <div
            key={force}
            className="flex items-start gap-4 rounded-lg px-4 py-3 border"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <div className="shrink-0 w-24 text-center">
              <span
                className="inline-block font-body text-xs font-bold px-3 py-1 rounded-full"
                style={{ backgroundColor: `${color}22`, color }}
              >
                {level}
              </span>
            </div>
            <div>
              <p className="font-body text-lg font-bold" style={{ color: 'var(--text)' }}>{force}</p>
              <p className="font-body text-base mt-0.5" style={{ color: 'var(--text-label)' }}>{note}</p>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
