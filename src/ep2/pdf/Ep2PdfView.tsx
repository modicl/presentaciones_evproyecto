import duocLogo from '../../assets/Logo_DuocUC.svg'

// PDF color constants — always light theme for printing
const C = {
  bg: '#FFFFFF',
  card: '#F8FAFC',
  right: '#F1F5F9',
  border: '#E2E8F0',
  text: '#1A202C',
  muted: '#4A5568',
  label: '#6B7280',
  dim: '#9CA3AF',
}

// ─── Shared helpers ───────────────────────────────────────────────────

function FullPage({
  label,
  title,
  accentColor = '#307FE2',
  children,
}: {
  label: string
  title: string
  accentColor?: string
  children: React.ReactNode
}) {
  return (
    <div className="pdf-page" style={{ gap: '8px' }}>
      <div className="pdf-accent" style={{ backgroundColor: accentColor }} />
      <p className="pdf-label" style={{ color: accentColor }}>{label}</p>
      <h2 className="pdf-title">{title}</h2>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', minHeight: 0 }}>
        {children}
      </div>
    </div>
  )
}

function Card({ children, leftColor }: { children: React.ReactNode; leftColor?: string }) {
  return (
    <div style={{
      background: C.card,
      border: `1px solid ${C.border}`,
      ...(leftColor ? { borderLeft: `3px solid ${leftColor}` } : {}),
      borderRadius: '6px',
      padding: '8px 12px',
    }}>
      {children}
    </div>
  )
}

function PBadge({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '1px 7px',
      borderRadius: '10px',
      fontSize: '8px',
      fontWeight: 700,
      color,
      background: `${color}22`,
      whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  )
}

// ─── Slide 1 — Portada ────────────────────────────────────────────────

function Slide1() {
  const team = ['Javier Arancibia', 'Luciano Riveros', 'Danilo Quiroz', 'Felipe Villarroel']
  return (
    <div className="pdf-page" style={{ flexDirection: 'row', padding: 0, gap: 0 }}>
      <div className="pdf-accent" style={{ backgroundColor: '#307FE2' }} />
      {/* Left */}
      <div style={{
        flex: 3,
        padding: '16mm 12mm 14mm 24mm',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '8px',
      }}>
        <p className="pdf-label" style={{ color: '#307FE2' }}>
          Escuela de Informática y Telecomunicaciones
        </p>
        <h1 className="pdf-title--hero">
          Evaluación de Alternativas<br />de Desarrollo de Software
        </h1>
        <p style={{ fontSize: '11px', color: C.muted, margin: 0, lineHeight: 1.4 }}>
          EDGDA — Ecosistema Digital de Gestión de Demanda Asistencial<br />
          Servicio Público de Salud RedNorte
        </p>
        <div style={{ display: 'flex', gap: '10px', margin: '2px 0 4px' }}>
          <div style={{ width: '36px', height: '2px', background: '#307FE2' }} />
          <div style={{ width: '18px', height: '2px', background: '#FFB800' }} />
        </div>
        <p style={{
          fontSize: '9px', fontWeight: 700, color: C.label,
          textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0,
        }}>
          Integrantes
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px 20px' }}>
          {team.map(n => (
            <span key={n} style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>{n}</span>
          ))}
        </div>
        <p style={{ fontSize: '10px', color: C.dim, margin: '4px 0 0' }}>
          Docente: Andrés Santoro Del Campo
        </p>
      </div>
      {/* Right */}
      <div style={{
        flex: 2,
        borderLeft: `1px solid ${C.border}`,
        background: C.right,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        padding: '20mm 16mm',
      }}>
        <img src={duocLogo} alt="Duoc UC" style={{ width: '110px', opacity: 0.9 }} />
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: 'Merriweather, serif',
            fontSize: '44px',
            fontWeight: 700,
            color: '#307FE2',
            lineHeight: 1,
            margin: 0,
          }}>EP2</p>
          <p style={{
            fontSize: '9px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: C.dim,
            margin: '8px 0 0',
          }}>
            Evaluación de Proyectos · 2026
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Slide 2 — Problema ───────────────────────────────────────────────

const PROBLEMA_CARDS = [
  {
    title: 'Crisis Asistencial',
    items: [
      'Tiempos de respuesta superiores a 18 meses',
      '12–18% de ineficiencia operacional por no-show y errores de registro',
      '15% de inasistencia promedio a citaciones médicas',
    ],
  },
  {
    title: 'Causas Sistémicas',
    items: [
      'Dispersión geográfica extrema — Desierto de Atacama',
      'Sistemas SIDRA operando en silos sin interoperabilidad',
      'Migración transfronteriza y población flotante minera',
    ],
  },
  {
    title: 'Necesidad del Sistema EDGDA',
    items: [
      'Gestión digital integrada de demanda y capacidad asistencial',
      'Interoperabilidad con SIDRA bajo estándar HL7 FHIR',
      'Transparencia activa para pacientes y Contraloría',
    ],
  },
]

function Slide2() {
  const RED = '#E53E3E'
  return (
    <FullPage label="Necesidad del Cliente" title="Descripción del Problema" accentColor={RED}>
      {PROBLEMA_CARDS.map(({ title, items }) => (
        <Card key={title} leftColor={RED}>
          <p style={{
            fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em',
            fontWeight: 700, color: RED, margin: '0 0 5px',
          }}>{title}</p>
          <ul className="pdf-list">
            {items.map(item => (
              <li key={item} className="pdf-bullet">
                <span style={{ color: RED }}>›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </FullPage>
  )
}

// ─── Slide 3 — Alternativas ───────────────────────────────────────────

const MODULOS_ALT = [
  {
    cod: 'M1', nombre: 'Motor de Priorización Bio-Psico-Social',
    desc: 'Reemplaza la lógica FIFO por un algoritmo que pondera gravedad clínica, tiempo acumulado y vulnerabilidad social. Incluye variables del norte: exposición a metales pesados y condición migratoria.',
    score: '73/84', fase: 'Fase 1', color: '#43B02A',
  },
  {
    cod: 'M2', nombre: 'Gestor de Reasignación Multicanal',
    desc: 'Detecta cancelaciones y horas ociosas en tiempo real y reasigna automáticamente vía SMS, IVR y WhatsApp. Ataca directamente la pérdida del 12–18% de horas médicas.',
    score: '66/84', fase: 'Fase 1', color: '#43B02A',
  },
  {
    cod: 'M3', nombre: 'Hub de Interoperabilidad HL7 FHIR',
    desc: 'Capa técnica que conecta EDGDA con la plataforma SIDRA del MINSAL bajo HL7 FHIR. Requiere certificación CENS y SLA con proveedor legado antes de iniciar desarrollo.',
    score: '53/84', fase: 'Fase 2', color: '#E53E3E',
  },
  {
    cod: 'M4', nombre: 'Portal de Autogestión del Paciente',
    desc: 'Plataforma web/móvil para consulta de posición en lista de espera, confirmación de citas y notificaciones. Implementa directamente la obligación legal de la Ley 20.584.',
    score: '65/84', fase: 'Fase 2', color: '#307FE2',
  },
  {
    cod: 'M5', nombre: 'Analytics de Capacidad Asistencial',
    desc: 'Dashboard de inteligencia de datos para directivos: proyección de demanda, rendimiento por especialidad y alertas tempranas. Su valor depende de que M1 y M2 estén operativos.',
    score: '56/84', fase: 'Fase 2', color: '#FFB800',
  },
]

function Slide3() {
  return (
    <FullPage label="Opciones de Desarrollo" title="Cinco Módulos del Ecosistema EDGDA">
      {MODULOS_ALT.map(({ cod, nombre, desc, score, fase, color }) => (
        <div key={cod} style={{
          display: 'flex',
          gap: '10px',
          background: C.card,
          border: `1px solid ${C.border}`,
          borderLeft: `3px solid ${color}`,
          borderRadius: '6px',
          padding: '7px 12px',
        }}>
          <span style={{
            flexShrink: 0,
            fontFamily: 'Merriweather, serif',
            fontSize: '14px',
            fontWeight: 700,
            opacity: 0.4,
            width: '26px',
            color,
            lineHeight: 1.1,
          }}>{cod}</span>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px', flexWrap: 'wrap' }}>
              <p style={{ fontSize: '10px', fontWeight: 700, color: C.text, margin: 0 }}>{nombre}</p>
              <PBadge color={color}>{fase} · {score}</PBadge>
            </div>
            <p style={{ fontSize: '9px', color: C.muted, margin: 0, lineHeight: 1.35 }}>{desc}</p>
          </div>
        </div>
      ))}
    </FullPage>
  )
}

// ─── Slide 4 — Criterios Técnicos ─────────────────────────────────────

const TECNICOS = [
  {
    num: '01', ponderacion: 'Relevante',
    titulo: 'Herramientas técnicas y expertise del equipo',
    detalle: '¿El equipo dispone de las herramientas, infraestructura y perfiles especializados para desarrollar el módulo? La escasez de talento en microservicios, HL7 FHIR y seguridad en salud es el principal obstáculo diferencial de RedNorte frente a otras regiones.',
    obstaculo: 'Competencia salarial con la industria minera provoca fuga constante de personal técnico calificado hacia el sector privado.',
  },
  {
    num: '02', ponderacion: 'Relevante',
    titulo: 'Integración con SIDRA bajo HL7 FHIR',
    detalle: '¿El módulo puede integrarse con SIDRA bajo el estándar HL7 FHIR del MINSAL y obtener la certificación CENS? Sin ella, el módulo opera en aislamiento total — requisito determinante para cualquier entrega.',
    obstaculo: 'Proveedores legados controlan APIs. Formalizar SLAs con penalidades es condición previa.',
  },
  {
    num: '03', ponderacion: 'Neutral',
    titulo: 'Operación offline y alta disponibilidad',
    detalle: '¿El módulo puede operar en modo desconectado y garantizar uptime ≥99,9% en nodos remotos? El 58% de las inasistencias se atribuye a fallas de comunicación en campamentos y localidades rurales.',
    obstaculo: 'Sin modo offline, los módulos de reasignación y priorización no operarán donde más se necesitan.',
  },
]

function Slide4() {
  const BLUE = '#307FE2'
  return (
    <FullPage label="Factibilidad Técnica" title="Criterios Técnicos" accentColor={BLUE}>
      {TECNICOS.map(({ num, ponderacion, titulo, detalle, obstaculo }) => (
        <Card key={num} leftColor={BLUE}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span style={{
              flexShrink: 0, fontFamily: 'Merriweather, serif',
              fontSize: '14px', fontWeight: 700, opacity: 0.3,
              width: '22px', color: BLUE, lineHeight: 1.1,
            }}>{num}</span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px', flexWrap: 'wrap' }}>
                <p style={{ fontSize: '10px', fontWeight: 700, color: C.text, margin: 0 }}>{titulo}</p>
                <PBadge color={BLUE}>{ponderacion}</PBadge>
              </div>
              <p style={{ fontSize: '9px', color: C.muted, margin: '0 0 3px', lineHeight: 1.35 }}>{detalle}</p>
              <p style={{ fontSize: '9px', color: '#FFB800', margin: 0, fontWeight: 600 }}>⚠ Obstáculo: {obstaculo}</p>
            </div>
          </div>
        </Card>
      ))}
    </FullPage>
  )
}

// ─── Slide 5 — Criterios Organizacionales ────────────────────────────

const ORGANIZACIONALES = [
  {
    num: '01', ponderacion: 'Relevante',
    titulo: 'Plan de gestión del cambio con funcionarios',
    detalle: '¿Existe un plan de co-diseño activo con los funcionarios que operarán el módulo? FENATS y CONFUSAM tienen capacidad real de paralizar la operación. El SOME —usuario directo de M1 y M2— debe co-diseñar los flujos antes del despliegue, no después.',
    impacto: '2.800 funcionarios en la red — adhesión gremial es condición previa a cualquier módulo.',
  },
  {
    num: '02', ponderacion: 'Neutral',
    titulo: 'Viabilidad en el plazo de 12 meses',
    detalle: '¿El módulo puede completarse dentro del plazo establecido para el proyecto EDGDA? M3 (Hub de Interoperabilidad) es el único que presenta riesgo real de superar el plazo por su dependencia de la cooperación del proveedor SIDRA.',
    impacto: 'El cronograma de Fase 2 depende de que el SLA con el proveedor SIDRA esté firmado antes de iniciar M3.',
  },
  {
    num: '03', ponderacion: 'Marginal',
    titulo: 'Estrategia para reducir la brecha digital',
    detalle: '¿El módulo contempla canales alternativos para la población sin acceso digital? El 72% de los pacientes desconoce su posición en la lista. M4 (Portal) no cumplirá su mandato legal sin kioskos asistidos, IVR y enrolamiento presencial diferenciado para zonas extremas.',
    impacto: 'M2 y M4 deben incluir IVR y SMS como canales de primer nivel, no como funcionalidades secundarias.',
  },
]

function Slide5() {
  const YELLOW = '#FFB800'
  return (
    <FullPage label="Factibilidad Organizacional" title="Criterios Organizacionales" accentColor={YELLOW}>
      {ORGANIZACIONALES.map(({ num, ponderacion, titulo, detalle, impacto }) => (
        <Card key={num} leftColor={YELLOW}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span style={{
              flexShrink: 0, fontFamily: 'Merriweather, serif',
              fontSize: '14px', fontWeight: 700, opacity: 0.3,
              width: '22px', color: YELLOW, lineHeight: 1.1,
            }}>{num}</span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px', flexWrap: 'wrap' }}>
                <p style={{ fontSize: '10px', fontWeight: 700, color: C.text, margin: 0 }}>{titulo}</p>
                <PBadge color={YELLOW}>{ponderacion}</PBadge>
              </div>
              <p style={{ fontSize: '9px', color: C.muted, margin: '0 0 3px', lineHeight: 1.35 }}>{detalle}</p>
              <p style={{ fontSize: '9px', color: YELLOW, margin: 0, fontWeight: 700 }}>→ {impacto}</p>
            </div>
          </div>
        </Card>
      ))}
    </FullPage>
  )
}

// ─── Slide 6 — Criterios Normativos ──────────────────────────────────

const NORMATIVOS = [
  {
    ley: 'Leyes 19.628 · 20.584 · 21.663', ponderacion: 'Relevante',
    nombre: 'Cumplimiento normativo desde el diseño',
    requisito: 'Aplica a M1, M2 y M3, que procesan datos clínicos. Sin cumplimiento desde el día 1, el módulo expone al Servicio a sanciones y paralización. No es una capa adicional: debe estar en el núcleo del diseño.',
    verificacion: 'Revisión legal por hito: el Departamento Jurídico verifica el comportamiento funcional antes de autorizar el paso de fase.',
  },
  {
    ley: 'Ley 19.628 · Art. 12', ponderacion: 'Relevante',
    nombre: 'Protección de datos: cifrado, RBAC y auditoría',
    requisito: 'Cifrado extremo a extremo, control de acceso por roles (RBAC) y logs de auditoría accesibles por la Contraloría desde el día 1. Aplica a todos los módulos que acceden a la ficha clínica del paciente.',
    verificacion: '100% de registros cifrados en tránsito y en reposo. Logs auditables en tiempo real por la CGR.',
  },
  {
    ley: 'Guía CENS 2021 · MINSAL', ponderacion: 'Neutral',
    nombre: 'Certificación técnica CENS para operar en SIDRA',
    requisito: 'M3 (Hub de Interoperabilidad) debe superar la certificación formal del CENS antes de conectarse al ambiente productivo de SIDRA. Sin ella, el módulo —y todo el ecosistema que depende de él— no puede operar.',
    verificacion: 'Pentest de seguridad + aprobación de la ANCI antes del despliegue productivo de M3. Gestionado por el Director del Servicio.',
  },
]

function Slide6() {
  const RED = '#E53E3E'
  return (
    <FullPage label="Factibilidad Normativa y Legal" title="Criterios Normativos" accentColor={RED}>
      {NORMATIVOS.map(({ ley, nombre, ponderacion, requisito, verificacion }) => (
        <div key={ley} style={{
          background: C.card,
          border: `1px solid ${C.border}`,
          borderLeft: `3px solid ${RED}`,
          borderRadius: '6px',
          padding: '7px 12px',
          display: 'flex',
          gap: '8px',
        }}>
          <span style={{
            flexShrink: 0,
            fontSize: '8px',
            fontWeight: 700,
            padding: '2px 6px',
            borderRadius: '4px',
            background: `${RED}22`,
            color: RED,
            whiteSpace: 'nowrap',
            alignSelf: 'flex-start',
            marginTop: '2px',
          }}>{ley}</span>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px', flexWrap: 'wrap' }}>
              <p style={{ fontSize: '10px', fontWeight: 700, color: C.text, margin: 0 }}>{nombre}</p>
              <PBadge color={RED}>{ponderacion}</PBadge>
            </div>
            <p style={{ fontSize: '9px', color: C.muted, margin: '0 0 2px', lineHeight: 1.35 }}>{requisito}</p>
            <p style={{ fontSize: '9px', color: C.label, margin: 0 }}>✓ Verificación: {verificacion}</p>
          </div>
        </div>
      ))}
      <div style={{
        background: 'rgba(48,127,226,0.06)',
        border: '1px solid rgba(48,127,226,0.25)',
        borderRadius: '6px',
        padding: '7px 12px',
      }}>
        <p style={{ fontSize: '8px', color: '#307FE2', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 4px' }}>
          Marco adicional — Ley 20.584
        </p>
        <p style={{ fontSize: '9px', color: C.label, margin: 0, lineHeight: 1.35 }}>
          El módulo M4 (Portal del Paciente) es un requisito de cumplimiento de esta ley, no una funcionalidad opcional.
          Sin él, RedNorte incumple el derecho del paciente a conocer su posición en la lista de espera en cada día de operación.
        </p>
      </div>
    </FullPage>
  )
}

// ─── Slide 7 — Criterios Financieros ─────────────────────────────────

const FINANCIEROS = [
  {
    num: '01', ponderacion: 'Relevante',
    titulo: 'Costo sostenible dentro del presupuesto fiscal',
    detalle: '¿La inversión requerida por el módulo es manejable dentro del presupuesto fiscal disponible de RedNorte? M1 (Motor de Priorización) es el de mayor inversión en Fase 1, pero con ROI inmediatamente medible: reducción del tiempo de espera en especialidades críticas.',
    impacto: 'M3 requiere presupuesto de contingencia específico — su plazo es incierto y no debe comprometerse en Fase 1.',
  },
  {
    num: '02', ponderacion: 'Neutral',
    titulo: 'Modelo OPEX/CAPEX sostenible a largo plazo',
    detalle: '¿Los costos de operación y mantenimiento son proyectables y sostenibles? M2 (Reasignación Multicanal) tiene bajo CAPEX de desarrollo pero costos recurrentes por mensaje SMS/IVR que deben proyectarse en el modelo OPEX anual del Servicio.',
    impacto: 'RedNorte carece de financiamiento plurianual garantizado — los módulos con OPEX recurrente son los más expuestos.',
  },
  {
    num: '03', ponderacion: 'Marginal',
    titulo: 'Riesgo de dependencia de proveedores externos',
    detalle: '¿El módulo minimiza el vendor lock-in? Los módulos desarrollados con estándares abiertos (HL7 FHIR, APIs REST, herramientas BI open source) son migrables sin fricción económica. M3 en particular debe diseñarse sin dependencia de un único proveedor de integración.',
    impacto: 'Alta dependencia de un proveedor único haría inviable cualquier migración futura sin pérdida de datos.',
  },
]

function Slide7() {
  const GREEN = '#43B02A'
  return (
    <FullPage label="Factibilidad Financiera" title="Criterios Financieros" accentColor={GREEN}>
      {FINANCIEROS.map(({ num, ponderacion, titulo, detalle, impacto }) => (
        <Card key={num} leftColor={GREEN}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span style={{
              flexShrink: 0, fontFamily: 'Merriweather, serif',
              fontSize: '14px', fontWeight: 700, opacity: 0.3,
              width: '22px', color: GREEN, lineHeight: 1.1,
            }}>{num}</span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px', flexWrap: 'wrap' }}>
                <p style={{ fontSize: '10px', fontWeight: 700, color: C.text, margin: 0 }}>{titulo}</p>
                <PBadge color={GREEN}>{ponderacion}</PBadge>
              </div>
              <p style={{ fontSize: '9px', color: C.muted, margin: '0 0 3px', lineHeight: 1.35 }}>{detalle}</p>
              <p style={{ fontSize: '9px', color: GREEN, margin: 0, fontWeight: 700 }}>→ {impacto}</p>
            </div>
          </div>
        </Card>
      ))}
    </FullPage>
  )
}

// ─── Slide 8 — Matriz de Factibilidad ────────────────────────────────

const RANKING = [
  {
    rank: '1°', cod: 'M1', nombre: 'Motor de Priorización Bio-Psico-Social',
    score: 73, max: 84, pct: Math.round((74 / 84) * 100),
    nota: 'Mayor impacto en la crisis asistencial · ROI inmediatamente medible',
    fase: 'Fase 1', color: '#43B02A',
  },
  {
    rank: '2°', cod: 'M2', nombre: 'Gestor de Reasignación Multicanal',
    score: 66, max: 84, pct: Math.round((73 / 84) * 100),
    nota: 'Aliado natural de la gestión del cambio con SOME y gremios',
    fase: 'Fase 1', color: '#43B02A',
  },
  {
    rank: '3°', cod: 'M4', nombre: 'Portal de Autogestión del Paciente',
    score: 65, max: 84, pct: Math.round((71 / 84) * 100),
    nota: 'Mandato legal Ley 20.584 · Primera entrega de Fase 2',
    fase: 'Fase 2', color: '#307FE2',
  },
  {
    rank: '4°', cod: 'M3', nombre: 'Hub de Interoperabilidad HL7 FHIR',
    score: 53, max: 84, pct: Math.round((53 / 84) * 100),
    nota: 'Mayor riesgo técnico · Requiere SLA SIDRA firmado previo',
    fase: 'Fase 2', color: '#E53E3E',
  },
  {
    rank: '5°', cod: 'M5', nombre: 'Analytics de Capacidad Asistencial',
    score: 56, max: 84, pct: Math.round((56 / 84) * 100),
    nota: 'Última entrega · Valor condicionado a calidad de M1+M2',
    fase: 'Fase 2', color: '#FFB800',
  },
]

const TIPOS = [
  { label: 'Técnica', ponderacion: '2 Relevantes · 1 Neutral', color: '#307FE2' },
  { label: 'Normativa/Legal', ponderacion: '2 Relevantes · 1 Neutral', color: '#E53E3E' },
  { label: 'Organizacional', ponderacion: '1 Relevante · 1 Neutral · 1 Marginal', color: '#FFB800' },
  { label: 'Financiera', ponderacion: '1 Relevante · 1 Neutral · 1 Marginal', color: '#43B02A' },
]

function Slide8() {
  return (
    <div className="pdf-page" style={{ flexDirection: 'row', padding: 0, gap: 0 }}>
      <div className="pdf-accent" style={{ backgroundColor: '#307FE2' }} />
      {/* Left — ranking */}
      <div style={{
        flex: 3,
        padding: '14mm 10mm 12mm 24mm',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '6px',
      }}>
        <p className="pdf-label" style={{ color: '#307FE2' }}>Evaluación de Módulos</p>
        <h2 className="pdf-title" style={{ marginBottom: '6px' }}>Resumen Matriz de Factibilidad</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {RANKING.map(({ rank, cod, nombre, score, max, pct, nota, fase, color }) => (
            <div key={cod} style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: '6px',
              padding: '6px 10px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{
                  fontFamily: 'Merriweather, serif', fontSize: '13px',
                  fontWeight: 700, flexShrink: 0, width: '20px', color,
                }}>{rank}</span>
                <PBadge color={color}>{cod}</PBadge>
                <span style={{ fontSize: '9.5px', fontWeight: 700, flex: 1, color: C.text }}>{nombre}</span>
                <PBadge color={color}>{fase}</PBadge>
                <span style={{
                  fontFamily: 'Merriweather, serif', fontSize: '13px',
                  fontWeight: 700, flexShrink: 0, color,
                }}>
                  {score}<span style={{ fontSize: '9px', opacity: 0.5, fontFamily: 'sans-serif' }}>/{max}</span>
                </span>
              </div>
              <div style={{ height: '4px', background: C.border, borderRadius: '2px', marginBottom: '3px' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: '2px' }} />
              </div>
              <p style={{ fontSize: '8px', color: C.label, margin: 0, paddingLeft: '28px' }}>{nota}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Right — structure */}
      <div style={{
        flex: 2,
        borderLeft: `1px solid ${C.border}`,
        background: C.right,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '14mm 12mm',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4px' }}>
          <span style={{
            fontFamily: 'Merriweather, serif',
            fontSize: '48px',
            fontWeight: 700,
            color: '#307FE2',
            lineHeight: 1,
            display: 'block',
          }}>84</span>
          <p style={{
            fontSize: '8px', textTransform: 'uppercase',
            letterSpacing: '0.12em', color: C.dim, margin: '4px 0 0',
          }}>puntos máximos</p>
        </div>
        <div style={{ width: '100%' }}>
          <p style={{
            fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em',
            color: C.label, textAlign: 'center', margin: '0 0 8px',
          }}>12 criterios · 4 dimensiones</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {TIPOS.map(({ label, ponderacion, color }) => (
              <div key={label} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: C.card,
                border: `1px solid ${C.border}`,
                borderLeft: `3px solid ${color}`,
                borderRadius: '6px',
                padding: '6px 10px',
              }}>
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: C.text, margin: 0 }}>{label}</p>
                  <p style={{ fontSize: '8px', color: C.label, margin: 0 }}>{ponderacion}</p>
                </div>
                <span style={{
                  fontFamily: 'Merriweather, serif', fontSize: '14px',
                  fontWeight: 700, color,
                }}>3</span>
              </div>
            ))}
            <div style={{
              background: 'rgba(48,127,226,0.06)',
              border: '1px solid rgba(48,127,226,0.25)',
              borderRadius: '6px',
              padding: '6px 10px',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '9px', color: C.label, margin: 0 }}>
                6 Relevantes · 4 Neutrales · 2 Marginales
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Slide 9 — Conclusiones ───────────────────────────────────────────

const FASES = [
  {
    fase: 'Fase 1', modulos: 'M1 + M2', color: '#43B02A',
    titulo: 'Motor de Priorización + Gestor de Reasignación',
    desc: 'Módulos de mayor viabilidad (74 y 73/84) y mayor impacto operativo inmediato. Generan resultados medibles antes de comprometer presupuesto en los módulos de mayor riesgo.',
  },
  {
    fase: 'Fase 2a', modulos: 'M4', color: '#307FE2',
    titulo: 'Portal de Autogestión del Paciente',
    desc: 'Primera entrega de Fase 2. Mandato legal de la Ley 20.584 — cumplimiento obligatorio. Menor costo de desarrollo y mayor impacto ciudadano visible.',
  },
  {
    fase: 'Fase 2b', modulos: 'M3', color: '#E53E3E',
    titulo: 'Hub de Interoperabilidad HL7 FHIR',
    desc: 'Condicionado a que el SLA con el proveedor SIDRA esté firmado y el proceso CENS iniciado. El puntaje bajo (59/84) no indica inviabilidad: indica precondiciones contractuales no técnicas.',
  },
  {
    fase: 'Fase 2c', modulos: 'M5', color: '#FFB800',
    titulo: 'Analytics de Capacidad Asistencial',
    desc: 'Última entrega. Su valor estratégico depende de que M1 y M2 estén generando datos de calidad. Sin esa base, cualquier inversión en analytics es prematura.',
  },
]

function Slide9() {
  const GREEN = '#43B02A'
  return (
    <FullPage label="Conclusiones" title="Secuencia de Implementación" accentColor={GREEN}>
      {FASES.map(({ fase, modulos, color, titulo, desc }) => (
        <div key={fase} style={{
          display: 'flex',
          gap: '10px',
          background: C.card,
          border: `1px solid ${C.border}`,
          borderLeft: `3px solid ${color}`,
          borderRadius: '6px',
          padding: '7px 12px',
        }}>
          <div style={{ flexShrink: 0, width: '44px', textAlign: 'center' }}>
            <p style={{ fontSize: '8px', fontWeight: 700, textTransform: 'uppercase', color, margin: 0 }}>{fase}</p>
            <p style={{ fontFamily: 'Merriweather, serif', fontSize: '11px', fontWeight: 700, color, margin: '2px 0 0' }}>{modulos}</p>
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: '10px', fontWeight: 700, color: C.text, margin: '0 0 2px' }}>{titulo}</p>
            <p style={{ fontSize: '9px', color: C.muted, margin: 0, lineHeight: 1.35 }}>{desc}</p>
          </div>
        </div>
      ))}
      <div style={{
        background: 'rgba(67,176,42,0.06)',
        borderLeft: `3px solid ${GREEN}`,
        borderRadius: '0 6px 6px 0',
        padding: '8px 14px',
        marginTop: '2px',
      }}>
        <p style={{ fontSize: '10px', fontStyle: 'italic', color: C.muted, margin: 0, lineHeight: 1.45 }}>
          "El ecosistema EDGDA es técnicamente factible, normativamente urgente y socialmente necesario.{' '}
          <span style={{ color: GREEN, fontStyle: 'normal' }}>
            La evaluación módulo a módulo permite gestionar el riesgo de forma transparente
          </span>{' '}
          y priorizar la inversión donde el impacto es mayor."
        </p>
      </div>
    </FullPage>
  )
}

// ─── Main export ──────────────────────────────────────────────────────

export default function Ep2PdfView() {
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
    </div>
  )
}
