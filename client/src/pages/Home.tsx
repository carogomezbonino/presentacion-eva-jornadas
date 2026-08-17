/**
 * Filosofía visual: Cartografía de aprendizaje.
 * Micrositio editorial para una exposición coral: recorrido, evidencias y diálogo.
 */
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Bot, ChevronRight, Compass, Eye, Gamepad2,
  GraduationCap, Layers3, Menu, MessageCircleMore, Network, Pause,
  Play, Route, ShieldCheck, Sparkles, UsersRound, X,
} from "lucide-react";
import { useEffect, useState } from "react";

const stations = [
  ["inicio", "Inicio", "00"], ["decidir", "Decidir", "01"],
  ["trayectoria", "Trayectoria", "02"], ["modulo0", "Módulo 0", "03"],
  ["escenarios", "Escenarios", "04"], ["cierre", "Cierre", "05"],
];

const modules = [
  ["00", "Comunidades", "Construir red y presencia digital"],
  ["01", "Tecnologías y educación", "Problematizar la cultura digital"],
  ["02", "Trayectos", "Diseñar experiencias formativas"],
  ["03", "Materiales", "Mediar con lenguajes diversos"],
  ["04", "Comunicación", "Sostener interacción significativa"],
  ["05", "Evaluación", "Acompañar procesos con evidencia"],
  ["06", "Innovación", "Analizar tendencias críticamente"],
  ["07", "TFI", "Transferir saberes a un proyecto situado"],
];

const rehearsal = [
  ["00:00", "Apertura y pregunta", "Docente 1"],
  ["02:30", "Decisión pedagógica", "Docente 1"],
  ["07:30", "Trayectoria y datos", "Docente 2"],
  ["14:00", "Módulo 0 en acción", "Docente 3"],
  ["21:00", "Escenarios y criterios", "Docente 4"],
  ["28:00", "Cierre coral", "Todas"],
];

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Home() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const [choice, setChoice] = useState<string | null>(null);
  const [routeOpen, setRouteOpen] = useState<number | null>(null);
  const reveal = { initial: { opacity: 0, y: reduced ? 0 : 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 }, transition: { duration: .5 } };

  useEffect(() => {
    const observer = new IntersectionObserver((items) => {
      const current = items.filter((item) => item.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) setActive(current.target.id);
    }, { rootMargin: "-25% 0px -65% 0px", threshold: [0.08, 0.28] });
    stations.forEach(([id]) => { const target = document.getElementById(id); if (target) observer.observe(target); });
    return () => observer.disconnect();
  }, []);

  return <main className="presentation-shell">
    <a className="skip-link" href="#inicio">Saltar al contenido</a>
    <header className="presentation-nav">
      <button className="brand-lockup" onClick={() => go("inicio")} aria-label="Ir al inicio">
        <img src="/manus-storage/marca-brujula-eva_71a6a9f4.png" alt="Símbolo de ruta de EVA" />
        <span><strong>EVA</strong><small>Universidad de Mendoza</small></span>
      </button>
      <nav className="desktop-nav" aria-label="Estaciones de la exposición">
        {stations.map(([id, label, number]) => <button className={active === id ? "nav-station active" : "nav-station"} key={id} onClick={() => go(id)}><span>{number}</span>{label}</button>)}
      </nav>
      <button className="rehearsal-button" onClick={() => setGuideOpen(true)}><Play size={14} fill="currentColor" /><span>Modo ensayo</span></button>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir navegación">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
    </header>
    <AnimatePresence>{menuOpen && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .18 }}>
      {stations.map(([id, label, number]) => <button key={id} onClick={() => { go(id); setMenuOpen(false); }}><span>{number}</span>{label}<ChevronRight size={16} /></button>)}
    </motion.nav>}</AnimatePresence>
    <aside className="route-rail" aria-label="Progreso del recorrido"><span>RECORRIDO</span><i />{stations.map(([id]) => <button aria-label={`Ir a ${id}`} className={active === id ? "rail-marker active" : "rail-marker"} key={id} onClick={() => go(id)} />)}</aside>

    <section id="inicio" className="station hero-station">
      <div className="hero-grid" />
      <div className="hero-copy">
        <motion.p {...reveal} className="eyebrow light"><span /> II Jornadas Nacionales de Educación 2026</motion.p>
        <motion.h1 {...reveal}>Del aula virtual<br /><em>al ecosistema</em><br />de aprendizaje.</motion.h1>
        <motion.p {...reveal} className="hero-body">Una experiencia de la Especialización en Entornos Virtuales de Aprendizaje de la Universidad de Mendoza.</motion.p>
        <motion.div {...reveal} className="hero-actions"><button className="cta-primary" onClick={() => go("decidir")}>Comenzar el recorrido <ArrowDown size={17} /></button><span>30 min de exposición + diálogo</span></motion.div>
      </div>
      <motion.div className="hero-art" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }}>
        <img src="/manus-storage/hero-cartografia-eva_21f9fd43.png" alt="Cartografía visual de un ecosistema de aprendizaje" />
        <div className="hero-label"><Compass size={17} /><span>Una decisión<br />pedagógica</span></div>
      </motion.div>
      <div className="hero-signature">EVA / UM <b>•</b> 2026</div>
    </section>

    <section className="audience-prompt" aria-labelledby="question-title">
      <div className="prompt-number">01</div><div><p className="eyebrow">Pregunta al auditorio</p><h2 id="question-title">Cuando una propuesta se vuelve virtual, ¿qué cambia primero?</h2></div>
      <div className="choice-grid">{["Comunicación", "Evaluación", "Materiales", "Comunidad"].map((item) => <button key={item} onClick={() => setChoice(item)} className={choice === item ? "choice active" : "choice"}>{item}</button>)}</div>
      <p className="prompt-note" aria-live="polite">{choice ? `Elegiste “${choice}”. En sala, recuperá dos respuestas y vinculalas con la siguiente estación.` : "En sala: votar por mano alzada y recuperar dos voces breves."}</p>
    </section>

    <section id="decidir" className="station decision-station">
      <motion.div {...reveal} className="section-lead"><p className="eyebrow"><span /> Estación 01</p><h2>Transformar no es trasladar.</h2><p className="serif-copy">La virtualidad no es un soporte neutro. Reorganiza tiempos, espacios, interacciones y modos de producir conocimiento. Un EVA comienza antes de abrir una plataforma: comienza cuando se toman decisiones pedagógicas.</p></motion.div>
      <div className="architecture-layout">
        <motion.article {...reveal} className="architecture-card"><div className="card-icon"><Layers3 /></div><h3>Arquitectura pedagógica</h3><p>Una trama intencional de trayectos, materiales, mediaciones, evaluación y participación.</p><div className="architecture-nodes">{["Trayecto", "Interacción", "Acompañamiento", "Evaluación", "Comunidad"].map((node) => <span key={node}>{node}</span>)}</div></motion.article>
        <motion.blockquote {...reveal} className="statement-card"><span>“</span>Un entorno virtual no es una plataforma: es una decisión pedagógica.<footer>Idea-fuerza de la Especialización</footer></motion.blockquote>
        <motion.div {...reveal} className="mini-criterion"><Route size={20} /><p><strong>Coherencia</strong><span>Qué se enseña, cómo se enseña y dónde se aprende.</span></p></motion.div>
      </div>
    </section>

    <section id="trayectoria" className="station trajectory-station">
      <div className="trajectory-illustration"><img src="/manus-storage/ecosistema-capasy-nodos_63f3c5b0.png" alt="Capas conectadas de un ecosistema de aprendizaje" /></div>
      <motion.div {...reveal} className="trajectory-copy"><p className="eyebrow"><span /> Estación 02</p><h2>Una trayectoria que se profundiza.</h2><p>La Especialización se construye sobre un recorrido iniciado en 2020 con la Diplomatura en Tecnología e Innovación Educativa y se amplía, desde 2024, como propuesta de posgrado con sistema de equivalencias.</p><div className="timeline"><div><b>2020</b><span>Diplomatura en Tecnología e Innovación Educativa</span></div><div><b>2024</b><span>Inicio de la Especialización en EVA</span></div><div><b>2026</b><span>Cuarta cohorte en curso</span></div></div></motion.div>
      <div className="data-wall"><article className="stat-card diploma"><span>Diplomatura</span><strong>120</strong><p>egresos registrados<br />en 7 ediciones</p></article><article className="stat-card graduates"><span>Especialización</span><strong>72</strong><p>egresados<br />cohortes 1 y 2</p></article><article className="stat-card tfi"><span>Cohorte 3</span><strong>43</strong><p>colegas en proceso<br />de diseño de TFI</p></article><article className="stat-card active-stat"><span>Cohorte 4</span><strong>33</strong><p>cursantes activos<br />inicio de Módulo 4</p></article></div>
      <p className="method-note">Los egresos de la Diplomatura y de la Especialización se informan por separado: las equivalencias pueden incluir trayectorias continuadas.</p>
    </section>

    <section className="modules-strip"><div className="modules-heading"><p className="eyebrow light">Arquitectura curricular</p><h2>Ocho módulos.<br />Un trayecto integrado.</h2></div><div className="modules-list">{modules.map(([number, title, description]) => <article className="module-row" key={number}><span>{number}</span><div><strong>{title}</strong><p>{description}</p></div><ArrowUpRight size={17} /></article>)}</div></section>

    <section id="modulo0" className="station module-zero-station">
      <motion.div {...reveal} className="module-zero-copy"><p className="eyebrow"><span /> Estación 03</p><h2>El Módulo 0 no da la bienvenida: <em>inaugura una comunidad.</em></h2><p>El Taller Comunidades Virtuales de Aprendizaje funciona como inmersión en el modelo de la carrera. El aula adopta un mapa de ruta, combina desafíos, actividades electivas y señales de avance, y trabaja la ciudadanía digital como condición de participación.</p><div className="show-cue"><Eye size={19} /><span><b>En exposición:</b> mostrar Mapa de ruta → Desafío 1 → insignia o bonus track. Máximo 90 segundos.</span></div></motion.div>
      <motion.div {...reveal} className="route-map-card"><img src="/manus-storage/ruta-modulo-cero_07f4bd42.png" alt="Ruta de aprendizaje gamificada" /><div className="map-overlay"><Gamepad2 size={18} /><span>Mapa de ruta<br />Módulo 0</span></div></motion.div>
      <div className="route-accordion">{[["Llegar", "Reconocer el entorno, la comunidad y el mapa de ruta."], ["Participar", "Resolver desafíos y construir presencia digital responsable."], ["Proyectar", "Transferir decisiones de diseño a los contextos profesionales."]].map(([title, body], index) => <button key={title} onClick={() => setRouteOpen(routeOpen === index ? null : index)} className={routeOpen === index ? "route-step open" : "route-step"}><span>0{index + 1}</span><strong>{title}</strong><ChevronRight size={18} />{routeOpen === index && <p>{body}</p>}</button>)}</div>
      <aside className="capture-placeholder"><span>ESPACIO PARA EVIDENCIA</span><strong>Insertar captura anonimizada del Mapa de ruta, Desafío 1 o Desafío 2.</strong><p>Reemplazaremos este marcador cuando compartan las capturas finales.</p></aside>
    </section>

    <section className="community-station"><div className="community-image"><img src="/manus-storage/comunidad-aprendizaje_b725c169.png" alt="Comunidad profesional conectada a través de un mapa compartido" /></div><div className="community-copy"><p className="eyebrow"><span /> Comunidad y presencia</p><h2>La mediación docente convierte conexión en vínculo.</h2><p>El aula institucional, las redes y los espacios de conversación se complementan. Telegram o Instagram no reemplazan el EVA: expanden la presencia, acercan recursos y sostienen una comunidad cuando están integrados a una consigna y a una mediación docente.</p><div className="community-tags"><span><MessageCircleMore size={15} /> diálogo</span><span><UsersRound size={15} /> codiseño</span><span><ShieldCheck size={15} /> ciudadanía digital</span></div></div></section>

    <section id="escenarios" className="station scenarios-station"><motion.div {...reveal} className="section-lead narrow"><p className="eyebrow light"><span /> Estación 04</p><h2>Escenarios que se interrogan, no se acumulan.</h2><p>Las tecnologías emergentes amplían posibilidades cuando aportan valor pedagógico, son sostenibles y amplían la participación.</p></motion.div><div className="scenario-grid"><article className="scenario-card"><Network size={28} /><span>Redes y comunidades</span><h3>Expandir sin reemplazar.</h3><p>Comunicación, cercanía y circulación de saberes, con privacidad y consentimiento.</p></article><article className="scenario-card highlighted"><Bot size={28} /><span>Inteligencia artificial</span><h3>Salir de la caja negra.</h3><p>Usos transparentes, criterios explícitos, autoría y lectura crítica de sesgos.</p></article><article className="scenario-card"><Sparkles size={28} /><span>Inmersión y simulación</span><h3>Usar cuando añade experiencia.</h3><p>Escenarios para ensayar decisiones, sin convertir la novedad en promesa inevitable.</p></article></div><div className="conditions-panel"><ShieldCheck size={25} /><p><strong>Condición de posibilidad:</strong> accesibilidad, conectividad, tiempos, dispositivos, datos personales y sostenibilidad son parte del diseño, no una nota al pie.</p></div></section>

    <section className="transfer-station"><p className="eyebrow"><span /> Proyección situada</p><h2>Diseñar para transferir.</h2><p className="transfer-lead">Los Trabajos Finales Integradores articulan saberes en proyectos que dialogan con contextos concretos.</p><div className="transfer-grid">{["Aulas de formación docente", "Propuestas para nivel superior", "Capacitaciones institucionales", "Comunidades en equipos docentes"].map((item, index) => <div className="transfer-item" key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div></section>

    <section id="cierre" className="station closing-station"><div className="closing-badge"><GraduationCap size={23} /> Especialización en EVA</div><h2>La transformación educativa<br />empieza con una <em>decisión pedagógica.</em></h2><div className="choral-lines"><p><b>Docente 1</b>No comienza con una plataforma.</p><p><b>Docente 2</b>Comienza con trayectos que reconocen a quienes aprenden.</p><p><b>Docente 3</b>Se sostiene con comunidad, presencia y evaluación que acompaña.</p><p><b>Docente 4</b>Se profundiza con decisiones situadas, éticas y críticas.</p></div><button className="cta-dark" onClick={() => go("inicio")}>Volver al inicio <ArrowUpRight size={17} /></button></section>
    <footer className="presentation-footer"><div><img src="/manus-storage/marca-brujula-eva_71a6a9f4.png" alt="" /><span>Especialización en Entornos Virtuales de Aprendizaje<br /><small>Universidad de Mendoza</small></span></div><p>II Jornadas Nacionales de Educación 2026 · Eje 1: Innovación Tecnológica y Transformación Digital</p></footer>
    <AnimatePresence>{guideOpen && <motion.aside className="rehearsal-panel" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: .25 }}><div className="panel-header"><div><p className="eyebrow">Guía operativa</p><h2>Ensayo coral · 30 min</h2></div><button onClick={() => setGuideOpen(false)} aria-label="Cerrar guía"><X /></button></div><p className="panel-intro">Distribuí voces y respetá el tiempo. La demostración del Módulo 0 no debe exceder 90 segundos.</p><ol className="timer-list">{rehearsal.map(([time, focus, speaker]) => <li key={time}><span>{time}</span><div><strong>{focus}</strong><small>{speaker}</small></div></li>)}</ol><div className="panel-tip"><Pause size={18} /><p><strong>Pausa sugerida:</strong> recuperá solo dos voces del auditorio. El debate amplio queda para los 10 minutos posteriores.</p></div></motion.aside>}</AnimatePresence>
  </main>;
}
