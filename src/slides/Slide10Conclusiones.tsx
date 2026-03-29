import SlideLayout from './SlideLayout'

const CSF = [
  { num: '01', title: 'Gestión del Cambio Proactiva', desc: 'Adhesión de 2.800 funcionarios. Participación sindical temprana (FENATS/CONFUSAM) para prevenir boicot operativo.' },
  { num: '02', title: 'Interoperabilidad Basada en Estándares', desc: 'Integración HL7 FHIR con SIDRA elimina duplicación de registros y garantiza integridad de datos a nivel nacional.' },
  { num: '03', title: 'Gobernanza de Datos', desc: 'Cumplimiento estricto de Leyes 19.628 y 20.584 para protección de información sensible y transparencia algorítmica.' },
]

export default function Slide10Conclusiones() {
  return (
    <SlideLayout
      label="Conclusiones"
      title="Factores Críticos de Éxito"
      stat="3"
      statLabel="factores críticos de éxito"
      statColor="#43B02A"
      accentColor="#43B02A"
    >
      <div className="space-y-4 mb-5">
        {CSF.map(({ num, title, desc }) => (
          <div
            key={num}
            className="flex gap-4 rounded-lg px-5 py-4 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              borderLeftColor: '#43B02A',
              borderLeftWidth: '3px',
            }}
          >
            <span className="shrink-0 font-heading text-xl font-bold text-duoc-green opacity-40 w-8">{num}</span>
            <div>
              <p className="font-body text-lg font-bold mb-1" style={{ color: 'var(--text)' }}>{title}</p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="rounded-lg px-6 py-4 border"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'rgba(67,176,42,0.3)',
        }}
      >
        <p className="font-heading text-lg font-bold leading-relaxed italic" style={{ color: 'var(--text-muted)' }}>
          "El proyecto permitirá a RedNorte cumplir su mandato fundamental:{' '}
          <span className="text-duoc-green not-italic">brindar atención oportuna, digna y transparente</span>{' '}
          a la población del norte de Chile."
        </p>
      </div>
    </SlideLayout>
  )
}
