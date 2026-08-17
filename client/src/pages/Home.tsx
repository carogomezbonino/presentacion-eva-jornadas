/**
 * Filosofía visual: evidencias situadas y cartografía de aprendizaje.
 * La interfaz emplea recursos reales de la Especialización con interacciones públicas y pertinentes.
 */
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Bot, BookOpenCheck, ChevronRight, ExternalLink,
  Gamepad2, GraduationCap, Menu, MessageCircleMore, Network, PlayCircle,
  ShieldCheck, Sparkles, UsersRound, X,
} from "lucide-react";
import { useEffect, useState } from "react";

type Evidence = "mapa" | "desafio1" | "desafio2" | "bonus" | "metaverso" | null;

const menu = [["inicio", "Inicio", "00"], ["sentido", "Sentido", "01"], ["trayectoria", "Trayectoria", "02"], ["modulo0", "Módulo 0", "03"], ["ecosistema", "Ecosistema", "04"], ["dialogo", "Diálogo", "05"]];

const modalData = {
  mapa: { title: "Mapa de ruta · Módulo 0", subtitle: "El mapa hace visible el itinerario del módulo, sus puntos de encuentro, su metodología y sus criterios de evaluación. Es una decisión de diseño que anticipa el recorrido y orienta la autonomía.", image: "/manus-storage/mapa-ruta-modulo0_2b647a6b.png" },
  desafio1: { title: "Desafío 1 · Construyendo comunidad", subtitle: "Una consigna para experimentar la comunidad como práctica compartida y no como una declaración abstracta.", image: "/manus-storage/DESAFIO1-MODULO0_22e3e81b.JPG" },
  desafio2: { title: "Desafío 2 · Ciudadanía digital", subtitle: "Una propuesta para problematizar identidad, huella digital, cuidado y participación responsable en red.", image: "/manus-storage/DESAFIO2-MODULO0_02f66a7c.JPG" },
  bonus: { title: "Bonus tracks · Recorridos optativos", subtitle: "Los bonus tracks abren exploraciones personales dentro de un marco común. La actividad optativa funciona como una invitación a profundizar y ampliar el trayecto formativo.", image: "/manus-storage/2_5990407a.png" },
  metaverso: { title: "Escenario inmersivo", subtitle: "Una experiencia complementaria para explorar simulaciones y decisiones profesionales cuando ofrece una ganancia pedagógica concreta.", image: "/manus-storage/metaverso_24719039.png" },
};

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Home() {
  const [active, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [evidence, setEvidence] = useState<Evidence>(null);
  const [reflection, setReflection] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const reveal = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .18 }, transition: { duration: .42 } };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const current = entries.filter((item) => item.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) setActive(current.target.id);
    }, { rootMargin: "-20% 0px -65% 0px", threshold: [.12, .35] });
    menu.forEach(([id]) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  return <main className="evidence-site">
    <a className="skip-link" href="#inicio">Saltar al contenido</a>
    <header className="topbar">
      <button className="um-lockup" onClick={() => scrollTo("inicio")} aria-label="Ir al inicio"><img src="/manus-storage/logo-um-redes-cuadrado_ba61d503.svg" alt="Universidad de Mendoza" /><span><b>Especialización en EVA</b><small>Universidad de Mendoza</small></span></button>
      <nav className="main-nav" aria-label="Estaciones de la presentación">{menu.map(([id, label, number]) => <button key={id} className={active === id ? "active" : ""} onClick={() => scrollTo(id)}><i>{number}</i>{label}</button>)}</nav>
      <button className="menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <AnimatePresence>{menuOpen && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>{menu.map(([id, label, number]) => <button key={id} onClick={() => { scrollTo(id); setMenuOpen(false); }}><span>{number}</span>{label}<ChevronRight /></button>)}</motion.nav>}</AnimatePresence>

    <section id="inicio" className="hero section-anchor">
      <div className="hero-lines" />
      <div className="hero-content">
        <motion.p {...reveal} className="eyebrow"><span /> II Jornadas Nacionales de Educación · 2026</motion.p>
        <motion.h1 {...reveal}>Del aula virtual<br />al <em>ecosistema</em><br />de aprendizaje.</motion.h1>
        <motion.p {...reveal} className="hero-summary">Una experiencia de formación docente y profesional de la Especialización en Entornos Virtuales de Aprendizaje.</motion.p>
        <motion.div {...reveal} className="hero-actions"><button className="primary-action" onClick={() => scrollTo("sentido")}>Recorrer la experiencia <ArrowDown /></button><span>Universidad de Mendoza</span></motion.div>
      </div>
      <motion.div {...reveal} className="hero-brand"><img className="hero-visual" src="/manus-storage/hero-cartografia-eva_21f9fd43.png" alt="Cartografía visual de un ecosistema de aprendizaje" /><div className="hero-stamp"><strong>Diseñar · acompañar · evaluar</strong><span>Tecnologías integradas desde decisiones pedagógicas situadas.</span></div></motion.div>
      <div className="hero-foot"><span>Especialización EVA</span><b>UM</b><span>Trayectos · comunidad · diseño</span></div>
    </section>

    <section className="live-question" aria-labelledby="opening-question">
      <div className="section-number">01</div>
      <div><p className="eyebrow">Pausa para dialogar</p><h2 id="opening-question">¿Qué se transforma, verdaderamente, cuando una propuesta educativa se vuelve virtual?</h2></div>
      <button className="open-question" onClick={() => setReflection(reflection === 0 ? null : 0)}><span>ABRIR REFLEXIÓN</span><ChevronRight /></button>
      <AnimatePresence>{reflection === 0 && <motion.p className="reflection-panel" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>La pregunta invita a mirar más allá del soporte: trayectos, tiempos, mediaciones, formas de estar presentes y construcción de comunidad.</motion.p>}</AnimatePresence>
    </section>

    <section id="sentido" className="meaning-section section-anchor">
      <motion.div {...reveal} className="section-intro"><p className="eyebrow"><span /> Estación 01 · Sentido</p><h2>Transformar no es trasladar.</h2><p>Un entorno virtual no es una plataforma: es una arquitectura pedagógica que organiza trayectos, interacciones, acompañamiento, evaluación y comunidad.</p></motion.div>
      <div className="principle-grid">{[{icon:<Network />,title:"Trayectos",text:"Múltiples vías de acceso y progresiones reconocibles."},{icon:<UsersRound />,title:"Presencia",text:"Mediación docente, conversación y acompañamiento sostenido."},{icon:<BookOpenCheck />,title:"Evidencias",text:"Actividades que permiten mostrar y revisar procesos."}].map((item) => <motion.article {...reveal} key={item.title}><div className="principle-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></motion.article>)}</div>
      <blockquote>“La coherencia entre qué se enseña, cómo se enseña y dónde se aprende es una condición de la innovación.”<span>Idea-fuerza de la Especialización</span></blockquote>
    </section>

    <section id="trayectoria" className="trajectory section-anchor">
      <motion.div {...reveal} className="timeline-lead"><p className="eyebrow"><span /> Estación 02 · Trayectoria</p><h2>Una experiencia que crece y se profundiza.</h2><p>La Diplomatura iniciada en 2020 consolidó una comunidad de práctica. Desde 2024, la Especialización amplía ese recorrido de formación de posgrado con reconocimiento de trayectorias previas.</p></motion.div>
      <div className="timeline-large"><article><span>2020</span><strong>Diplomatura</strong><p>Tecnología e Innovación Educativa</p></article><article><span>2024</span><strong>Especialización</strong><p>Inicio del trayecto de posgrado en EVA</p></article><article><span>2026</span><strong>Cohorte 4</strong><p>33 cursantes activos en el inicio del Módulo 4</p></article></div>
      <div className="big-data"><article><span>Diplomatura</span><b>120</b><p>egresos en 7 ediciones</p></article><article><span>Especialización</span><b>72</b><p>egresados de cohortes 1 y 2</p></article><article><span>Cohorte 3</span><b>43</b><p>colegas en desarrollo de TFI</p></article></div><p className="method-line">Los datos de Diplomatura y Especialización se presentan de manera diferenciada: el sistema de equivalencias reconoce trayectorias continuadas.</p>
    </section>

    <section id="modulo0" className="module-zero section-anchor">
      <motion.div {...reveal} className="module-header"><div><p className="eyebrow light"><span /> Estación 03 · Caso de estudio</p><h2>El Módulo 0 inaugura<br />una comunidad.</h2></div><img src="/manus-storage/m0logo_b56357c8.png" alt="Módulo 0" /></motion.div>
      <p className="module-lead">El Taller Comunidades Virtuales de Aprendizaje propone una inmersión en el modelo de la carrera: mapa de ruta, desafíos, actividades optativas, señales de avance y ciudadanía digital.</p>
      <button className="route-evidence" onClick={() => setEvidence("mapa")}><img src="/manus-storage/mapa-ruta-modulo0_2b647a6b.png" alt="Mapa de ruta del Módulo 0" /><div><span>ARQUITECTURA DEL RECORRIDO</span><h3>Mapa de ruta del Módulo 0</h3><p>Una entrada visual que organiza itinerario, cronograma, metodología, punto de encuentro, programa y evaluación.</p><b>Ver mapa en detalle <PlayCircle /></b></div></button>
      <div className="evidence-grid">
        <button className="evidence-card screenshot-card" onClick={() => setEvidence("desafio1")}><img src="/manus-storage/DESAFIO1-MODULO0_22e3e81b.JPG" alt="Captura del Desafío 1 del Módulo 0" /><span className="evidence-chip">ABRIR EVIDENCIA <PlayCircle /></span><div><b>Desafío 1</b><strong>Construyendo comunidad</strong></div></button>
        <button className="evidence-card screenshot-card" onClick={() => setEvidence("desafio2")}><img src="/manus-storage/DESAFIO2-MODULO0_02f66a7c.JPG" alt="Captura del Desafío 2 del Módulo 0" /><span className="evidence-chip">ABRIR EVIDENCIA <PlayCircle /></span><div><b>Desafío 2</b><strong>Ciudadanía digital</strong></div></button>
      </div>
      <div className="interactive-routes">
        {[{id:"bonus",title:"Bonus tracks",text:"Actividades optativas que amplían el trayecto común y habilitan exploraciones personales."},{id:"comunidad",title:"Comunidad",text:"La interacción no se deja librada al azar: se trabaja a través de consignas, mediaciones y responsabilidades compartidas."},{id:"ciudadania",title:"Ciudadanía digital",text:"La identidad, el cuidado, la privacidad y la participación responsable son contenidos de aprendizaje."}].map((item) => <article className={expanded === item.id ? "route-card open" : "route-card"} key={item.id}><button onClick={() => setExpanded(expanded === item.id ? null : item.id)}><div><span>Explorar</span><strong>{item.title}</strong></div><ChevronRight /></button><AnimatePresence>{expanded === item.id && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>{item.text}</motion.p>}</AnimatePresence></article>)}
      </div>
      <div className="module-actions"><a href="https://virtual.um.edu.ar/course/view.php?id=31538&section=0" target="_blank" rel="noreferrer"><BookOpenCheck /> Aula del Módulo 0 <ExternalLink /></a><a href="https://virtual.um.edu.ar/course/view.php?id=31538&section=2#opcion1" target="_blank" rel="noreferrer"><Gamepad2 /> Bonus track <ExternalLink /></a><button onClick={() => setEvidence("bonus")}><Sparkles /> Conocer los bonus tracks</button></div>
    </section>

    <section id="ecosistema" className="ecosystem section-anchor">
      <motion.div {...reveal} className="ecosystem-intro"><p className="eyebrow"><span /> Estación 04 · Expansión</p><h2>Un aula que conversa con otros escenarios.</h2><p>La plataforma institucional sostiene el trayecto. Telegram, Instagram y los entornos inmersivos lo expanden cuando se integran a una propuesta, una consigna y una mediación docente.</p></motion.div>
      <div className="ecosystem-grid"><article className="channel-card telegram"><MessageCircleMore /><span>Comunicación de módulo</span><h3>Telegram</h3><p>Un espacio de avisos, acompañamiento y continuidad conversacional.</p><a href="https://t.me/+EUCK0JQ0vYIwOTVh" target="_blank" rel="noreferrer">Abrir grupo <ExternalLink /></a></article><article className="channel-card instagram"><Network /><span>Comunicación expandida</span><h3>Instagram</h3><p>Un canal para hacer circular recursos y sostener presencia institucional.</p><a href="http://instagram.com/entornosvirtuales_um" target="_blank" rel="noreferrer">Abrir perfil <ExternalLink /></a></article><article className="channel-card metaverse"><Sparkles /><span>Escenario emergente</span><h3>Metaverso</h3><p>Una capa para ensayar situaciones cuando aporta valor pedagógico.</p><button onClick={() => setEvidence("metaverso")}>Ver evidencia <PlayCircle /></button></article></div>
      <div className="activity-band"><div><img src="/manus-storage/trabajoindividual_1be0cc94.png" alt="" /><span>Trabajo individual</span></div><div><img src="/manus-storage/trabajoengrupos_79c16410.png" alt="" /><span>Trabajo en grupos</span></div><div><img src="/manus-storage/trabajocolectvo_5cb20ef0.png" alt="" /><span>Trabajo colectivo</span></div></div>
      <div className="ethics-note"><ShieldCheck /><p><b>Una condición de diseño:</b> accesibilidad, conectividad, datos personales, sostenibilidad y alfabetización digital son parte de la propuesta; no son una nota al pie.</p></div>
    </section>

    <section id="dialogo" className="dialogue section-anchor"><p className="eyebrow light"><span /> Estación 05 · Conversación</p><h2>Preguntas para seguir pensando juntos.</h2><div className="dialogue-cards">{["¿Qué decisiones pedagógicas conviene revisar cuando un aula se expande más allá de la plataforma?", "¿Cómo se construyen experiencias de aprendizaje significativas sin perder de vista las condiciones reales de participación?", "¿Qué lugar pueden ocupar las tecnologías emergentes en una propuesta que busca ser inclusiva, crítica y situada?"].map((item,index) => <button key={item} className={reflection === index + 1 ? "dialogue-card selected" : "dialogue-card"} onClick={() => setReflection(reflection === index + 1 ? null : index + 1)}><span>0{index + 1}</span><strong>{item}</strong><ChevronRight /></button>)}</div><AnimatePresence>{reflection && reflection > 0 && <motion.p className="dialogue-reflection" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>Una pregunta compartida no busca una respuesta única: abre un espacio para reconocer experiencias, tensiones y alternativas en común.</motion.p>}</AnimatePresence></section>

    <section className="final-section"><GraduationCap /><h2>La transformación educativa no comienza con una plataforma.</h2><p>Comienza con decisiones pedagógicas situadas, con comunidad y con condiciones reales de participación.</p><button onClick={() => scrollTo("inicio")}>Volver al inicio <ArrowUpRight /></button></section>
    <footer><div><img src="/manus-storage/logo-um-redes-cuadrado_ba61d503.svg" alt="Universidad de Mendoza" /><span>Especialización en Entornos Virtuales de Aprendizaje<br /><small>Universidad de Mendoza</small></span></div><p>II Jornadas Nacionales de Educación · Eje 1: Innovación Tecnológica y Transformación Digital</p></footer>

    <AnimatePresence>{evidence && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setEvidence(null)}><motion.section className="evidence-modal" role="dialog" aria-modal="true" aria-label={modalData[evidence].title} initial={{ opacity: 0, scale: .96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .96, y: 18 }} onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setEvidence(null)} aria-label="Cerrar ventana"><X /></button><div className="modal-copy"><span>VER EVIDENCIA</span><h2>{modalData[evidence].title}</h2><p>{modalData[evidence].subtitle}</p></div><img src={modalData[evidence].image} alt={modalData[evidence].title} /></motion.section></motion.div>}</AnimatePresence>
  </main>;
}
