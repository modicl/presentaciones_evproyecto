const STAKEHOLDERS = [
  { cat: 'Conectado', name: 'MINSAL — Depto. TIC / SIDRA',                power: 5, interest: 3, strategy: 'Cumplimiento HL7 FHIR y seguridad en cada hito certificable.' },
  { cat: 'Conectado', name: 'Proveedores Legacy IT',                      power: 5, interest: 3, strategy: 'SLAs estrictos con penalizaciones por incumplimiento de integración.' },
  { cat: 'Conectado', name: 'Proveedores Cloud',                          power: 4, interest: 3, strategy: 'Estrategia multi-cloud para mitigar riesgo de vendor lock-in.' },
  { cat: 'Externo',   name: 'Agrupaciones de Pacientes y Sociedad Civil', power: 3, interest: 5, strategy: 'Portal del Paciente con criterios de priorización transparentes.' },
  { cat: 'Externo',   name: 'Medios de Comunicación Regionales',          power: 3, interest: 4, strategy: 'Comunicación con métricas de impacto social publicables.' },
  { cat: 'Externo',   name: 'Municipios y Gobernaciones Regionales',      power: 3, interest: 4, strategy: 'Coordinación para acceso a CESFAM e instalación de Kioskos.' },
]

const CAT_COLOR: Record<string, string> = {
  Conectado: '#FFB800',
  Externo:   '#43B02A',
}

function Dots({ value, color }: { value: number; color: string }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: i < value ? color : 'var(--border)' }} />
      ))}
    </div>
  )
}

export default function Slide09Stakeholders() {
  return (
    <div
      className="relative w-full h-full flex flex-col justify-center px-16 py-10 overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-duoc-blue" />

      <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
        Interesados — Parte 2 / 2
      </p>
      <h2 className="font-heading text-5xl font-bold mb-2" style={{ color: 'var(--text)' }}>
        Stakeholders Conectados y Externos
      </h2>
      <p className="font-body text-base mb-6" style={{ color: 'var(--text-dim)' }}>
        <strong style={{ color: 'var(--text-label)' }}>P</strong> = Poder (1–5) &nbsp;·&nbsp;
        <strong style={{ color: 'var(--text-label)' }}>I</strong> = Interés (1–5)
      </p>

      <div className="grid grid-cols-2 gap-4">
        {(['Conectado', 'Externo'] as const).map(cat => (
          <div key={cat} className="flex flex-col gap-3">
            <p className="font-body text-base font-bold uppercase tracking-widest" style={{ color: CAT_COLOR[cat] }}>
              {cat}s
            </p>
            {STAKEHOLDERS.filter(s => s.cat === cat).map(({ name, power, interest, strategy }) => (
              <div
                key={name}
                className="rounded-lg px-4 py-3 border flex gap-4 items-center"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', borderLeftColor: CAT_COLOR[cat], borderLeftWidth: '3px' }}
              >
                <div className="flex-1 min-w-0">
                  <p className="font-body text-lg font-bold leading-tight" style={{ color: 'var(--text)' }}>{name}</p>
                  <p className="font-body text-base mt-0.5" style={{ color: 'var(--text-label)' }}>{strategy}</p>
                </div>
                <div className="shrink-0 flex gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-body text-base font-bold" style={{ color: 'var(--text-dim)' }}>P</span>
                    <Dots value={power} color={CAT_COLOR[cat]} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-body text-base font-bold" style={{ color: 'var(--text-dim)' }}>I</span>
                    <Dots value={interest} color={CAT_COLOR[cat]} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
