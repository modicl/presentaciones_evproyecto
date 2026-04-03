import duocLogo from '../assets/Logo_DuocUC.svg'
import PdfLayout from './PdfLayout'

/* ── helpers ─────────────────────────────────────── */
function Card({ children }: { children: React.ReactNode }) {
  return <div className="pdf-card">{children}</div>
}

function Bullet({ children, color = '#307FE2' }: { children: React.ReactNode; color?: string }) {
  return (
    <li className="pdf-bullet">
      <span style={{ color }}>›</span>
      <span>{children}</span>
    </li>
  )
}

function Dots({ value, color }: { value: number; color: string }) {
  return (
    <span className="pdf-dots">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="pdf-dot" style={{ background: i < value ? color : '#DDE3EC' }} />
      ))}
    </span>
  )
}

/* ── Slides PDF ───────────────────────────────────── */

function Slide1() {
  return (
    <div className="pdf-page pdf-page--center">
      <div className="pdf-accent" style={{ backgroundColor: '#307FE2' }} />
      <img src={duocLogo} alt="Duoc UC" className="pdf-logo" />
      <p className="pdf-label" style={{ color: '#307FE2' }}>Escuela de Informática y Telecomunicaciones</p>
      <h1 className="pdf-title--hero">
        Sistema Integrado de Gestión<br />de Demanda y Capacidad Asistencial
      </h1>
      <p className="pdf-subtitle">Caso de Estudio — Servicio Público de Salud RedNorte</p>
      <div className="pdf-divider" />
      <div className="pdf-team">
        {['Javier Arancibia', 'Luciano Riveros', 'Danilo Quiroz', 'Felipe Villarroel'].map(n => (
          <span key={n}>{n}</span>
        ))}
      </div>
      <p className="pdf-footnote">Docente: Andrés Santoro Del Campo · Evaluación de Proyectos · 2026</p>
    </div>
  )
}

function Slide2() {
  return (
    <PdfLayout label="Contexto" title="Servicio de Salud RedNorte" accentColor="#FFB800">
      <div className="pdf-stats-row">
        {[
          { val: '>42.000', label: 'Pacientes en lista de espera' },
          { val: '>18 meses', label: 'Tiempo promedio de respuesta' },
          { val: '12–18%', label: 'Ineficiencia operacional' },
          { val: '2.800', label: 'Funcionarios en la red' },
        ].map(({ val, label }) => (
          <div key={label} className="pdf-stat-card">
            <p className="pdf-stat-val">{val}</p>
            <p className="pdf-stat-label">{label}</p>
          </div>
        ))}
      </div>
      <div className="pdf-grid-2">
        <Card>
          <p className="pdf-card-title">Infraestructura</p>
          <ul className="pdf-list">
            <Bullet>1 hospital de alta complejidad</Bullet>
            <Bullet>3 hospitales comunitarios · 12 CESFAM</Bullet>
            <Bullet>2.800 funcionarios en la red</Bullet>
          </ul>
        </Card>
        <Card>
          <p className="pdf-card-title">Crisis asistencial</p>
          <ul className="pdf-list">
            <Bullet>Tiempos de respuesta superiores a 18 meses</Bullet>
            <Bullet>12–18% de ineficiencia operacional</Bullet>
            <Bullet>Dispersión geográfica extrema — Desierto de Atacama</Bullet>
          </ul>
        </Card>
        <Card>
          <p className="pdf-card-title">Factores de presión</p>
          <ul className="pdf-list">
            <Bullet>Migración transfronteriza y población flotante minera</Bullet>
            <Bullet>Envejecimiento demográfico y patologías crónicas</Bullet>
          </ul>
        </Card>
      </div>
    </PdfLayout>
  )
}

function Slide3() {
  const pilares = [
    { num: '1', title: 'Fragmentación de Datos', desc: 'Sistemas SIDRA en silos — duplicación de registros y visión distorsionada de la lista de espera real.' },
    { num: '2', title: 'Capacidad Ociosa No Gestionada', desc: 'Pérdida de hasta el 18% de horas médicas sin motor de reasignación en tiempo real.' },
    { num: '3', title: 'Brecha de Comunicación', desc: 'Baja penetración digital en zonas rurales y falta de actualización de datos de pacientes en tránsito.' },
  ]
  const exclusiones = [
    'Modificación del código fuente de SIDRA',
    'Historia Clínica Electrónica (HCE)',
    'Gestión de equipamiento o insumos médicos',
    'Integración con mutuales mineras privadas',
    '12 CESFAM completos en Fase 1 (60% inicial)',
  ]
  return (
    <PdfLayout label="Diagnóstico" title="Problemática y Alcance">
      <div className="pdf-pilares">
        {pilares.map(({ num, title, desc }) => (
          <Card key={num}>
            <div className="pdf-pilar-header">
              <span className="pdf-pilar-num">{num}</span>
              <strong>{title}</strong>
            </div>
            <p className="pdf-pilar-desc">{desc}</p>
          </Card>
        ))}
      </div>
      <div className="pdf-exclusiones">
        <p className="pdf-exclusiones-title">Exclusiones explícitas del proyecto</p>
        <div className="pdf-exclusiones-grid">
          {exclusiones.map(e => (
            <p key={e} className="pdf-exclusion-item"><span style={{ color: '#307FE2' }}>✕</span> {e}</p>
          ))}
        </div>
      </div>
    </PdfLayout>
  )
}

function Slide4() {
  const forces = [
    { force: 'Poder negociador — Pacientes', level: 'Bajo', color: '#43B02A', note: 'Dependencia total del sistema público · asimetría de información · sin capacidad real de elección.' },
    { force: 'Poder negociador — Proveedores', level: 'Muy Alto', color: '#E53E3E', note: 'Escasez de especialistas · sindicatos FENATS/CONFUSAM · Legacy IT con control de APIs · vendor lock-in Cloud.' },
    { force: 'Amenaza de nuevos competidores', level: 'Bajo', color: '#43B02A', note: 'CAPEX estatal insustituible · certificación CENS/HL7 FHIR · aprobación MINSAL obligatoria.' },
    { force: 'Amenaza de sustitutos', level: 'Media-Alta', color: '#FFB800', note: 'Urgencias como válvula de escape · telemedicina privada · mutuales mineras para trabajadores formales.' },
    { force: 'Rivalidad entre competidores', level: 'Muy Alto', color: '#E53E3E', note: '"Brain drain" médico y TI hacia minería · competencia por fondos MINSAL · rivalidad por talento TI especializado.' },
  ]
  return (
    <PdfLayout label="Análisis del Microentorno" title="Modelo de Porter — 5 Fuerzas">
      <table className="pdf-table">
        <thead>
          <tr>
            <th>Fuerza</th>
            <th>Intensidad</th>
            <th>Análisis</th>
          </tr>
        </thead>
        <tbody>
          {forces.map(({ force, level, color, note }) => (
            <tr key={force}>
              <td><strong>{force}</strong></td>
              <td><span className="pdf-badge" style={{ color, background: `${color}22` }}>{level}</span></td>
              <td>{note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </PdfLayout>
  )
}

function Slide5() {
  const factors = [
    { letter: 'P', name: 'Político', items: ['Tensión centralismo MINSAL vs. autonomía regional', 'Fondos concursables para transformación digital', 'Acuerdos binacionales con Bolivia y Perú'] },
    { letter: 'E', name: 'Económico', items: ['12–18% ineficiencia = activo recuperable', 'Competencia salarial minera para perfiles TI', 'Cloud Híbrido: CAPEX → OPEX escalable'] },
    { letter: 'S', name: 'Social', items: ['Demanda flotante no enrolada distorsiona métricas', 'Enfermedades mineras → oncología y nefrología', 'Baja alfabetización digital en zonas rurales'] },
    { letter: 'T', name: 'Tecnológico', items: ['Silos SIDRA → integración HL7 FHIR (42.000 registros)', 'Zonas sin conectividad → modo offline + sincronización', 'SMS/IVR como canales redundantes para zonas remotas'] },
    { letter: 'E', name: 'Ecológico', items: ['Metales pesados mineros → alta morbilidad compleja', 'Política "cero papel" — flujos 100% digitales', 'Eventos climáticos extremos interrumpen conectividad'] },
    { letter: 'L', name: 'Legal', items: ['Ley 20.584 — transparencia de tiempos de espera', 'Ley 19.628 — protección de datos desde día 1', 'Ley 21.663 Ciberseguridad + WCAG 2.1 accesibilidad'] },
  ]
  return (
    <PdfLayout label="Análisis del Macroentorno" title="Análisis PESTEL">
      <p className="pdf-note">* Se presentan los 3 hallazgos más impactantes por dimensión.</p>
      <div className="pdf-grid-3">
        {factors.map(({ letter, name, items }) => (
          <Card key={name}>
            <div className="pdf-pestel-header">
              <span className="pdf-pestel-letter">{letter}</span>
              <strong>{name}</strong>
            </div>
            <ul className="pdf-list">
              {items.map(i => <Bullet key={i}>{i}</Bullet>)}
            </ul>
          </Card>
        ))}
      </div>
    </PdfLayout>
  )
}

function Slide6() {
  const metas = [
    { num: 1, title: 'Optimización oferta médica', metric: '12–18% → 7%', detail: 'Motor automático de reasignación geográfica' },
    { num: 2, title: 'Adopción digital paciente', metric: '70% penetración portal', detail: '40% vía kioscos digitales en APS' },
    { num: 3, title: 'Interoperabilidad sistémica', metric: '100% en 10 meses', detail: 'Hospital + 3 comunitarios con HL7 FHIR' },
    { num: 4, title: 'Cumplimiento regulatorio', metric: '100% desde día 1', detail: 'Leyes 19.628 y 20.584' },
  ]
  return (
    <PdfLayout label="Objetivos" title="Objetivos del Proyecto">
      <div className="pdf-objetivo-general">
        <p className="pdf-card-title">Objetivo General</p>
        <p>Implementar un ecosistema de gestión de demanda y capacidad asistencial integrado con SIDRA bajo estándares <strong>HL7 FHIR</strong> en un ciclo de <strong>12 meses</strong>.</p>
      </div>
      <div className="pdf-grid-2">
        {metas.map(({ num, title, metric, detail }) => (
          <Card key={num}>
            <div className="pdf-meta-header">
              <span className="pdf-meta-num">{num}</span>
              <div>
                <p className="pdf-meta-title">{title}</p>
                <p className="pdf-meta-metric">{metric}</p>
                <p className="pdf-meta-detail">{detail}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PdfLayout>
  )
}

function Slide7() {
  const modules = [
    { num: '01', name: 'Motor de Priorización Biopsicosocial', desc: 'Scoring auditable: severidad clínica + tiempo de espera + vulnerabilidad social.' },
    { num: '02', name: 'Gestor de Reasignación Multicanal', desc: 'Reasignación automática con gateway híbrido SMS/WhatsApp/IVR para zonas remotas.' },
    { num: '03', name: 'Hub de Interoperabilidad HL7 FHIR', desc: 'REST APIs bidireccionales con SIDRA para sincronización de 42.000 registros.' },
    { num: '04', name: 'Portal de Transparencia y Autogestión', desc: 'Interfaz web/móvil con consulta en tiempo real. Cumplimiento Ley 20.584.' },
    { num: '05', name: 'Analytics de Capacidad Asistencial (BI)', desc: 'Dashboards en tiempo real con SLA por especialidad para los 16 nodos de la red.' },
  ]
  return (
    <PdfLayout label="Solución" title="Arquitectura del Producto — 5 Módulos">
      <div className="pdf-modules">
        {modules.map(({ num, name, desc }) => (
          <Card key={num}>
            <div className="pdf-module-row">
              <span className="pdf-module-num">{num}</span>
              <div>
                <p className="pdf-module-name">{name}</p>
                <p className="pdf-module-desc">{desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PdfLayout>
  )
}

function Slide8() {
  const internos = [
    { name: 'Dirección del Servicio y Subdirecciones', power: 5, interest: 5, strategy: 'Reportes quincenales con métricas de impacto. Validación de hitos por fase.' },
    { name: 'Gremios (FENATS / CONFUSAM / Colegio Médico)', power: 5, interest: 5, strategy: 'Co-diseño obligatorio de interfaces y flujos de trabajo antes del despliegue.' },
    { name: 'Departamentos TI Locales', power: 3, interest: 5, strategy: 'Capacitación en microservicios y ciberseguridad. Transferencia de conocimiento.' },
    { name: 'Personal Administrativo y SOME', power: 3, interest: 5, strategy: 'Capacitación en el sistema. Incentivos por adherencia a nuevos flujos.' },
  ]
  return (
    <PdfLayout label="Interesados — Parte 1 / 2" title="Stakeholders Internos">
      <p className="pdf-note"><strong>P</strong> = Poder (1–5) · <strong>I</strong> = Interés (1–5) · ● nivel máximo</p>
      <table className="pdf-table">
        <thead><tr><th>Actor</th><th>Estrategia de gestión</th><th>P</th><th>I</th></tr></thead>
        <tbody>
          {internos.map(({ name, power, interest, strategy }) => (
            <tr key={name}>
              <td><strong>{name}</strong></td>
              <td>{strategy}</td>
              <td><Dots value={power} color="#307FE2" /></td>
              <td><Dots value={interest} color="#307FE2" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </PdfLayout>
  )
}

function Slide9() {
  const color: Record<string, string> = { Conectado: '#FFB800', Externo: '#43B02A' }
  const actors = [
    { cat: 'Conectado', name: 'MINSAL — Depto. TIC / SIDRA', power: 5, interest: 3, strategy: 'Cumplimiento HL7 FHIR y seguridad en cada hito certificable.' },
    { cat: 'Conectado', name: 'Proveedores Legacy IT', power: 5, interest: 3, strategy: 'SLAs estrictos con penalizaciones por incumplimiento.' },
    { cat: 'Conectado', name: 'Proveedores Cloud', power: 4, interest: 3, strategy: 'Estrategia multi-cloud para mitigar riesgo de vendor lock-in.' },
    { cat: 'Externo', name: 'Agrupaciones de Pacientes y Sociedad Civil', power: 3, interest: 5, strategy: 'Portal del Paciente con criterios de priorización transparentes.' },
    { cat: 'Externo', name: 'Medios de Comunicación Regionales', power: 3, interest: 4, strategy: 'Comunicación con métricas de impacto social publicables.' },
    { cat: 'Externo', name: 'Municipios y Gobernaciones Regionales', power: 3, interest: 4, strategy: 'Coordinación para acceso a CESFAM e instalación de Kioskos.' },
  ]
  return (
    <PdfLayout label="Interesados — Parte 2 / 2" title="Stakeholders Conectados y Externos">
      <p className="pdf-note"><strong>P</strong> = Poder (1–5) · <strong>I</strong> = Interés (1–5) · ● nivel máximo</p>
      <table className="pdf-table">
        <thead><tr><th>Categoría</th><th>Actor</th><th>Estrategia de gestión</th><th>P</th><th>I</th></tr></thead>
        <tbody>
          {actors.map(({ cat, name, power, interest, strategy }) => (
            <tr key={name}>
              <td><span className="pdf-badge" style={{ color: color[cat], background: `${color[cat]}22` }}>{cat}</span></td>
              <td><strong>{name}</strong></td>
              <td>{strategy}</td>
              <td><Dots value={power} color={color[cat]} /></td>
              <td><Dots value={interest} color={color[cat]} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </PdfLayout>
  )
}

function Slide10() {
  return (
    <PdfLayout label="Propuesta de Valor" title="¿Por qué este proyecto?">
      <div className="pdf-grid-3">
        <Card>
          <p className="pdf-card-title" style={{ color: '#307FE2' }}>0 pérdidas</p>
          <p className="pdf-module-name">Integridad y Trazabilidad</p>
          <ul className="pdf-list">
            <Bullet>Garantía de no-borrado en 42.000 registros</Bullet>
            <Bullet>Auditoría completa bajo Ley 19.628</Bullet>
          </ul>
        </Card>
        <Card>
          <p className="pdf-card-title" style={{ color: '#307FE2' }}>+13% oferta</p>
          <p className="pdf-module-name">Maximización Capacidad</p>
          <ul className="pdf-list">
            <Bullet>Recuperación de horas perdidas por inasistencia</Bullet>
            <Bullet>Reducción lista de espera de 42.000 pacientes</Bullet>
          </ul>
        </Card>
        <Card>
          <p className="pdf-card-title" style={{ color: '#307FE2' }}>99.9% uptime</p>
          <p className="pdf-module-name">Continuidad Operacional</p>
          <ul className="pdf-list">
            <Bullet>Infraestructura Hybrid Cloud con redundancia local</Bullet>
            <Bullet>Notificaciones SMS/IVR para zonas sin conectividad</Bullet>
          </ul>
        </Card>
      </div>
      <div className="pdf-tagline">
        "Técnicamente factible. <span style={{ color: '#307FE2' }}>Socialmente rentable.</span> <span style={{ color: '#FFB800' }}>Estratégicamente urgente.</span>"
      </div>
    </PdfLayout>
  )
}

function Slide11() {
  const csf = [
    { num: '01', title: 'Gestión del Cambio Proactiva', desc: 'Adhesión de 2.800 funcionarios. Participación sindical temprana (FENATS/CONFUSAM) para prevenir boicot operativo.' },
    { num: '02', title: 'Interoperabilidad Basada en Estándares', desc: 'Integración HL7 FHIR con SIDRA elimina duplicación de registros y garantiza integridad de datos a nivel nacional.' },
    { num: '03', title: 'Gobernanza de Datos', desc: 'Cumplimiento estricto de Leyes 19.628 y 20.584 para protección de información sensible y transparencia algorítmica.' },
  ]
  return (
    <PdfLayout label="Conclusiones" title="Factores Críticos de Éxito" accentColor="#43B02A">
      <div className="pdf-modules">
        {csf.map(({ num, title, desc }) => (
          <Card key={num}>
            <div className="pdf-module-row">
              <span className="pdf-module-num" style={{ color: '#43B02A' }}>{num}</span>
              <div>
                <p className="pdf-module-name">{title}</p>
                <p className="pdf-module-desc">{desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="pdf-final-quote">
        "El proyecto permitirá a RedNorte cumplir su mandato fundamental:{' '}
        <span style={{ color: '#43B02A' }}>brindar atención oportuna, digna y transparente</span>{' '}
        a la población del norte de Chile."
      </div>
    </PdfLayout>
  )
}

/* ── Main export ─────────────────────────────────── */
export default function PdfView() {
  return (
    <div className="pdf-root">
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <Slide7 />
      <Slide8 />
      <Slide9 />
      <Slide10 />
      <Slide11 />
    </div>
  )
}
