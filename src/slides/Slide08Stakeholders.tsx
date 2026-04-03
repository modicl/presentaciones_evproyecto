const INTERNOS = [
  { name: 'Dirección del Servicio y Subdirecciones',      power: 5, interest: 5, strategy: 'Reportes quincenales con métricas de impacto. Validación de hitos por fase.' },
  { name: 'Gremios (FENATS / CONFUSAM / Colegio Médico)', power: 5, interest: 5, strategy: 'Co-diseño obligatorio de interfaces y flujos de trabajo antes del despliegue.' },
  { name: 'Departamentos TI Locales',                     power: 3, interest: 5, strategy: 'Capacitación en microservicios y ciberseguridad. Transferencia de conocimiento.' },
  { name: 'Personal Administrativo y SOME',               power: 3, interest: 5, strategy: 'Capacitación en el sistema. Incentivos por adherencia a nuevos flujos.' },
]

const COLOR = '#307FE2'

function Dots({ value, color }: { value: number; color: string }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: i < value ? color : 'var(--border)' }} />
      ))}
    </div>
  )
}

export default function Slide08Stakeholders() {
  return (
    <div
      className="relative w-full h-full flex flex-col justify-center px-14 py-8 overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: COLOR }} />

      {/* Header */}
      <div className="text-center mb-6">
        <p className="font-body text-sm tracking-[0.25em] uppercase mb-1" style={{ color: COLOR }}>Interesados — Parte 1 / 2</p>
        <h2 className="font-heading text-5xl font-bold" style={{ color: 'var(--text)' }}>Stakeholders Internos</h2>
        <p className="font-body text-base mt-2" style={{ color: 'var(--text-dim)' }}>
          <strong style={{ color: 'var(--text-label)' }}>P</strong> = Poder (1–5) &nbsp;·&nbsp;
          <strong style={{ color: 'var(--text-label)' }}>I</strong> = Interés (1–5)
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {INTERNOS.map(({ name, power, interest, strategy }) => (
          <div
            key={name}
            className="rounded-lg px-5 py-4 border flex gap-4 items-center"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', borderLeftColor: COLOR, borderLeftWidth: '3px' }}
          >
            <div className="flex-1 min-w-0">
              <p className="font-body text-xl font-bold leading-tight" style={{ color: 'var(--text)' }}>{name}</p>
              <p className="font-body text-lg mt-1" style={{ color: 'var(--text-label)' }}>{strategy}</p>
            </div>
            <div className="shrink-0 flex flex-col gap-2 items-end">
              <div className="flex items-center gap-2">
                <span className="font-body text-base font-bold" style={{ color: 'var(--text-dim)' }}>P</span>
                <Dots value={power} color={COLOR} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-body text-base font-bold" style={{ color: 'var(--text-dim)' }}>I</span>
                <Dots value={interest} color={COLOR} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <span className="font-heading text-4xl font-bold" style={{ color: COLOR }}>4</span>
        <span className="font-body text-base uppercase tracking-widest ml-3" style={{ color: 'var(--text-dim)' }}>actores internos</span>
      </div>
    </div>
  )
}
