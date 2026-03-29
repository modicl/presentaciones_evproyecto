import SlideLayout from './SlideLayout'

function ValuePillar({ num, title, metric, items }: { num: string; title: string; metric: string; items: string[] }) {
  return (
    <div
      className="rounded-lg p-5 flex flex-col gap-3 border"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <div className="flex items-start justify-between">
        <span className="font-heading text-5xl font-bold text-duoc-blue opacity-20">{num}</span>
        <span className="font-heading text-xl font-bold text-duoc-blue text-right leading-tight">{metric}</span>
      </div>
      <h3 className="font-heading text-lg font-bold" style={{ color: 'var(--text)' }}>{title}</h3>
      <ul className="space-y-1.5">
        {items.map(i => (
          <li key={i} className="font-body text-base flex gap-2" style={{ color: 'var(--text-muted)' }}>
            <span className="text-duoc-blue mt-0.5 shrink-0">›</span>{i}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Slide09PropuestaValor() {
  return (
    <SlideLayout
      label="Propuesta de Valor"
      title="¿Por qué este proyecto?"
      stat="99.9%"
      statLabel="uptime garantizado"
    >
      <div className="space-y-4">
        <ValuePillar
          num="1"
          title="Integridad y Trazabilidad de Datos"
          metric="0 pérdidas"
          items={['Garantía de no-borrado en 42.000 registros', 'Auditoría completa bajo Ley 19.628']}
        />
        <ValuePillar
          num="2"
          title="Maximización de Capacidad Instalada"
          metric="+13% oferta"
          items={['Recuperación de horas perdidas por inasistencia', 'Reducción lista de espera de 42.000 pacientes']}
        />
        <div className="text-center pt-2">
          <p className="font-heading text-base font-bold italic" style={{ color: 'var(--text-muted)' }}>
            "Técnicamente factible.{' '}
            <span className="text-duoc-blue">Socialmente rentable.</span>{' '}
            <span className="text-duoc-yellow">Estratégicamente urgente.</span>"
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
