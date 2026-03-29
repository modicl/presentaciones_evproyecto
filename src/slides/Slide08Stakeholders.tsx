import SlideLayout from './SlideLayout'

const QUADRANTS = [
  { label: 'Alto Poder · Alto Interés', strategy: 'Gestionar de cerca', color: '#E53E3E', actors: ['Dirección RedNorte (Med./Admin.)', 'Sindicatos FENATS / CONFUSAM', 'MINSAL — Depto. TIC/SIDRA'] },
  { label: 'Medio-Alto Poder · Alto Interés', strategy: 'Mantener satisfechos', color: '#FFB800', actors: ['Organizaciones de pacientes', 'Contraloría General (CGR)'] },
  { label: 'Medio Poder · Alto Interés', strategy: 'Informar y capacitar', color: '#307FE2', actors: ['Depto. TI local', 'Personal SOME y administrativo'] },
  { label: 'Alto Poder · Medio Interés', strategy: 'Monitorear y negociar SLAs', color: '#888', actors: ['Proveedores sistemas legacy'] },
]

export default function Slide08Stakeholders() {
  return (
    <SlideLayout
      label="Interesados"
      title="Mapa de Stakeholders"
      stat="4"
      statLabel="grupos de interés identificados"
    >
      <div className="grid grid-cols-2 gap-4">
        {QUADRANTS.map(({ label, strategy, color, actors }) => (
          <div
            key={label}
            className="rounded-lg p-4 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              borderLeftColor: color,
              borderLeftWidth: '3px',
            }}
          >
            <p className="font-body text-sm font-bold mb-0.5" style={{ color }}>{label}</p>
            <p className="font-body text-sm italic mb-3" style={{ color: 'var(--text-dim)' }}>{strategy}</p>
            <ul className="space-y-1.5">
              {actors.map(a => (
                <li key={a} className="flex gap-2 font-body text-lg" style={{ color: 'var(--text-muted)' }}>
                  <span style={{ color }}>›</span>{a}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
