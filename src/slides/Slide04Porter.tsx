import SlideLayout from './SlideLayout'

const FORCES = [
  {
    force: 'Poder negociador — Pacientes',
    level: 'Bajo',
    color: '#43B02A',
    note: 'Dependencia total del sistema público · asimetría de información · sin capacidad real de elección.',
  },
  {
    force: 'Poder negociador — Proveedores',
    level: 'Muy Alto',
    color: '#E53E3E',
    note: 'Escasez de especialistas · sindicatos FENATS/CONFUSAM · Legacy IT con control de APIs · vendor lock-in Cloud.',
  },
  {
    force: 'Amenaza de nuevos competidores',
    level: 'Bajo',
    color: '#43B02A',
    note: 'CAPEX estatal insustituible · certificación CENS/HL7 FHIR · aprobación MINSAL obligatoria.',
  },
  {
    force: 'Amenaza de sustitutos',
    level: 'Media-Alta',
    color: '#FFB800',
    note: 'Urgencias como válvula de escape · telemedicina privada · mutuales mineras para trabajadores formales.',
  },
  {
    force: 'Rivalidad entre competidores',
    level: 'Muy Alto',
    color: '#E53E3E',
    note: '"Brain drain" médico y TI hacia minería · competencia por fondos MINSAL · rivalidad por talento TI especializado.',
  },
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
            className="flex items-center gap-4 rounded-lg px-4 py-3 border"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <div className="shrink-0 w-28 text-center">
              <span
                className="inline-block font-body text-sm font-bold px-3 py-1 rounded-full"
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
