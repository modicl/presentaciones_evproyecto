import SlideLayout from './SlideLayout'

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      className="rounded-lg p-4 border"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <p className="font-body text-sm tracking-widest text-duoc-blue uppercase mb-3">{title}</p>
      <ul className="space-y-1.5">
        {items.map(item => (
          <li key={item} className="font-body text-lg flex gap-2" style={{ color: 'var(--text-muted)' }}>
            <span className="text-duoc-blue mt-0.5 shrink-0">›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Slide02Contexto() {
  return (
    <SlideLayout
      label="Contexto"
      title="Servicio de Salud RedNorte"
      stat=">42.000"
      statLabel="pacientes en lista de espera"
      accentColor="#FFB800"
    >
      <div className="grid grid-cols-1 gap-4">
        <InfoCard
          title="Infraestructura"
          items={[
            '1 hospital de alta complejidad',
            '3 hospitales comunitarios · 12 CESFAM',
            '2.800 funcionarios en la red',
          ]}
        />
        <InfoCard
          title="Crisis asistencial"
          items={[
            'Tiempos de respuesta superiores a 18 meses',
            '12–18% de ineficiencia operacional',
            'Dispersión geográfica extrema — Desierto de Atacama',
          ]}
        />
        <InfoCard
          title="Factores de presión"
          items={[
            'Migración transfronteriza y población flotante minera',
            'Envejecimiento demográfico y patologías crónicas',
          ]}
        />
      </div>
    </SlideLayout>
  )
}
