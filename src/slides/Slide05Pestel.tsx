import SlideLayout from './SlideLayout'

const FACTORS = [
  {
    letter: 'P',
    name: 'Político',
    items: [
      'Tensión centralismo MINSAL vs. autonomía regional',
      'Fondos concursables para transformación digital',
      'Acuerdos binacionales con Bolivia y Perú',
    ],
  },
  {
    letter: 'E',
    name: 'Económico',
    items: [
      '12–18% ineficiencia = activo recuperable',
      'Competencia salarial minera para perfiles TI',
      'Cloud Híbrido: CAPEX → OPEX escalable',
    ],
  },
  {
    letter: 'S',
    name: 'Social',
    items: [
      'Demanda flotante no enrolada distorsiona métricas',
      'Enfermedades mineras → oncología y nefrología',
      'Baja alfabetización digital en zonas rurales',
    ],
  },
  {
    letter: 'T',
    name: 'Tecnológico',
    items: [
      'Silos SIDRA → integración HL7 FHIR (42.000 registros)',
      'Zonas sin conectividad → modo offline + sincronización',
      'SMS/IVR como canales redundantes para zonas remotas',
    ],
  },
  {
    letter: 'E',
    name: 'Ecológico',
    items: [
      'Metales pesados mineros → alta morbilidad compleja',
      'Política "cero papel" — flujos 100% digitales',
      'Eventos climáticos extremos interrumpen conectividad',
    ],
  },
  {
    letter: 'L',
    name: 'Legal',
    items: [
      'Ley 20.584 — transparencia de tiempos de espera',
      'Ley 19.628 — protección de datos desde día 1',
      'Ley 21.663 Ciberseguridad + WCAG 2.1 accesibilidad',
    ],
  },
]

export default function Slide05Pestel() {
  return (
    <SlideLayout
      label="Análisis del Macroentorno"
      title="Análisis PESTEL"
      stat="6"
      statLabel="dimensiones analizadas"
    >
      <p className="font-body text-sm italic mb-3" style={{ color: 'var(--text-dim)' }}>
        * Se presentan los 3 hallazgos más impactantes por dimensión.
      </p>
      <div className="grid grid-cols-3 gap-3">
        {FACTORS.map(({ letter, name, items }) => (
          <div
            key={name}
            className="rounded-lg p-4 border"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-9 h-9 rounded-full bg-duoc-blue flex items-center justify-center font-heading font-bold text-white text-base shrink-0">
                {letter}
              </span>
              <span className="font-body text-lg font-bold" style={{ color: 'var(--text)' }}>{name}</span>
            </div>
            <ul className="space-y-2">
              {items.map(i => (
                <li key={i} className="font-body text-base flex gap-1.5 leading-snug" style={{ color: 'var(--text-muted)' }}>
                  <span className="text-duoc-blue shrink-0 mt-0.5">›</span>{i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
