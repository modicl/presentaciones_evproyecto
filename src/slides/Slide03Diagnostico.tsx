import SlideLayout from './SlideLayout'

function Pilar({ num, title, desc, items }: { num: string; title: string; desc: string; items: string[] }) {
  return (
    <div
      className="rounded-lg p-4 flex gap-4 border"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <div className="shrink-0 w-9 h-9 rounded-full bg-duoc-blue flex items-center justify-center font-heading font-bold text-white">
        {num}
      </div>
      <div>
        <h3 className="font-heading text-lg font-bold mb-0.5" style={{ color: 'var(--text)' }}>{title}</h3>
        <p className="font-body text-base text-duoc-blue mb-2">{desc}</p>
        <ul className="space-y-1">
          {items.map(i => (
            <li key={i} className="font-body text-base flex gap-2" style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--text-dim)' }}>—</span>{i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Slide03Diagnostico() {
  return (
    <SlideLayout
      label="Diagnóstico"
      title="Tres Pilares de Ineficiencia"
      stat="58%"
      statLabel="inasistencias por fallas de notificación"
    >
      <div className="space-y-4">
        <Pilar
          num="1"
          title="Fragmentación de Datos"
          desc="Sistemas SIDRA operando en silos independientes"
          items={['Duplicación de registros clínicos', 'Vista distorsionada de la lista de espera real']}
        />
        <Pilar
          num="2"
          title="Capacidad Ociosa No Gestionada"
          desc="Pérdida de hasta el 18% de horas médicas disponibles"
          items={['Sin motor de reasignación en tiempo real', 'Horas perdidas por inasistencia sin reutilización']}
        />
        <Pilar
          num="3"
          title="Brecha de Comunicación"
          desc="Baja penetración digital en zonas rurales extremas"
          items={['Falta de actualización de datos de pacientes en tránsito']}
        />
      </div>
    </SlideLayout>
  )
}
