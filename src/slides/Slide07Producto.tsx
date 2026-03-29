import SlideLayout from './SlideLayout'

const MODULES = [
  { num: '01', name: 'Motor de Priorización Biopsicosocial', desc: 'Scoring: severidad clínica + tiempo de espera + vulnerabilidad social. Asignación auditable y libre de discrecionalidad.' },
  { num: '02', name: 'Gestor de Reasignación Multicanal', desc: 'Reasignación automática ante cancelaciones. Gateway híbrido SMS/WhatsApp/IVR para zonas con conectividad intermitente.' },
  { num: '03', name: 'Hub de Interoperabilidad HL7 FHIR', desc: 'REST APIs para sincronización bidireccional con SIDRA. Integración con Repositorio Nacional de Lista de Espera.' },
  { num: '04', name: 'Portal de Transparencia y Autogestión', desc: 'Interfaz web y móvil para consulta en tiempo real. Módulo de inscripción asistida. Cumplimiento Ley 20.584.' },
  { num: '05', name: 'Analytics de Capacidad Asistencial (BI)', desc: 'Dashboards en tiempo real, throughput de pacientes, SLA por especialidad para los 16 nodos de la red.' },
]

export default function Slide07Producto() {
  return (
    <SlideLayout
      label="Solución"
      title="Arquitectura del Producto — 5 Módulos"
      stat="5"
      statLabel="módulos del sistema"
    >
      <div className="space-y-3">
        {MODULES.map(({ num, name, desc }) => (
          <div
            key={num}
            className="flex gap-4 rounded-lg px-5 py-3 border"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <span className="shrink-0 font-heading text-xl font-bold text-duoc-blue opacity-40 w-8">{num}</span>
            <div>
              <p className="font-body text-lg font-bold mb-0.5" style={{ color: 'var(--text)' }}>{name}</p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
