import SlideLayout from './SlideLayout'

const FACTORS = [
  { letter: 'P', name: 'Político', text: 'Tensión centralismo MINSAL vs. autonomía regional; presupuesto sujeto a ciclos políticos' },
  { letter: 'E', name: 'Económico', text: 'Alto costo de vida en el norte; competencia salarial con la minería; 12-18% ineficiencia' },
  { letter: 'S', name: 'Social', text: 'Migración transfronteriza; enfermedades ocupacionales mineras; baja alfabetización digital' },
  { letter: 'T', name: 'Tecnológico', text: 'Brecha de conectividad en zonas extremas; oportunidad con microservicios y dashboards' },
  { letter: 'E', name: 'Ecológico', text: 'Determinantes ambientales mineros (metales pesados); aumento demanda oncología/nefrología' },
  { letter: 'L', name: 'Legal', text: 'Ley 20.584 — transparencia obligatoria; Ley 19.628 — protección de datos personales' },
]

export default function Slide05Pestel() {
  return (
    <SlideLayout
      label="Análisis del Macroentorno"
      title="Análisis PESTEL"
      stat="6"
      statLabel="dimensiones analizadas"
    >
      <div className="grid grid-cols-2 gap-3">
        {FACTORS.map(({ letter, name, text }) => (
          <div
            key={name}
            className="rounded-lg p-4 border"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-full bg-duoc-blue flex items-center justify-center font-heading font-bold text-white text-sm shrink-0">
                {letter}
              </span>
              <span className="font-body text-base font-bold" style={{ color: 'var(--text)' }}>{name}</span>
            </div>
            <p className="font-body text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{text}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
