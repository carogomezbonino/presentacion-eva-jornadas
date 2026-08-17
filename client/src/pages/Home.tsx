/**
 * Filosofía visual: presentación académica tecnoeducativa.
 * Cada estación dispone de una tesis, una evidencia y una única vía de profundización.
 */
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, BookOpenCheck, ChevronRight, Compass,
  ExternalLink, GraduationCap, Layers3, Lightbulb, Menu,
  MessageCircleMore, Network, PlayCircle, Route, ShieldCheck,
  Sparkles, UsersRound, X,
} from "lucide-react";
import { useEffect, useState } from "react";

type ModalKey = "marcos" | "curriculo" | "mapa" | "desafios" | "insignias" | "bonus" | "ecosistema" | null;

const sections = [
  ["inicio", "Inicio", "00"], ["sentido", "Sentido", "01"], ["trayectoria", "Trayectoria", "02"],
  ["modulo0", "Módulo 0", "03"], ["ecosistema", "Ecosistema", "04"], ["dialogo", "Diálogo", "05"],
];

const modalInfo = {
  mapa: {
    eyebrow: "Evidencia de diseño · Módulo 0", title: "Mapa de ruta: anticipar, orientar y acompañar",
    text: "El mapa sintetiza el itinerario del módulo, sus puntos de encuentro, la metodología y los criterios de evaluación. Su valor no es ornamental: permite que cada participante comprenda el recorrido y tome decisiones con mayor autonomía.",
    image: "/manus-storage/mapa-ruta-modulo0_2b647a6b.png",
  },
  desafios: {
    eyebrow: "Evidencia de aprendizaje", title: "Desafíos que convierten la entrada en experiencia",
    text: "El Desafío 1 sitúa la construcción de comunidad como práctica compartida. El Desafío 2 propone problematizar ciudadanía digital, identidad, cuidado y participación responsable en red.",
    images: [
      ["/manus-storage/DESAFIO1-MODULO0_22e3e81b.JPG", "Desafío 1 · Construyendo comunidad"],
      ["/manus-storage/DESAFIO2-MODULO0_02f66a7c.JPG", "Desafío 2 · Ciudadanía digital"],
    ],
  },
  insignias: {
    eyebrow: "Evidencia de progresión", title: "Insignias como señales de avance",
    text: "Las insignias no condensan el aprendizaje en un ícono. Hacen visible la orientación inicial, la exploración optativa y la participación en lo colectivo dentro de una narrativa de aprendizaje.",
    badges: [
      ["/manus-storage/1_ec9bc6a1.png", "Primeros pasos"],
      ["/manus-storage/2_5990407a.png", "Bonus tracks"],
      ["/manus-storage/5_3a5beb4a.png", "Construir comunidad"],
    ],
  },
  bonus: {
    eyebrow: "Evidencia de autonomía", title: "Bonus tracks: profundizar dentro de un marco común",
    text: "Los recorridos optativos permiten ampliar intereses y ritmos sin perder la referencia de un trayecto compartido. La opción adicional se vuelve una oportunidad de exploración, no una tarea aislada.",
    image: "/manus-storage/2_5990407a.png",
  },
  ecosistema: {
    eyebrow: "Expansión situada", title: "Escenarios que se articulan con intención pedagógica",
    text: "Telegram, Instagram y los espacios inmersivos se integran cuando amplían una consigna, sostienen una conversación o permiten explorar una situación de manera pertinente. La plataforma institucional mantiene la arquitectura común.",
  },
};

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

function Modal({ modal, onClose }: { modal: ModalKey; onClose: () => void }) {
  if (!modal) return null;
  if (modal === "marcos") return <Dialog onClose={onClose} eyebrow="Marcos para interpretar la experiencia" title="Una conversación tecnoeducativa situada"><div className="framework-list"><article><b>Miriam Kap</b><h3>Virtualidad constitutiva</h3><p>La virtualidad transforma espacialidades, temporalidades y modos de circulación del conocimiento; por eso un diseño no puede suponer un único recorrido.</p></article><article><b>Mariana Maggio</b><h3>Inclusión genuina</h3><p>Integrar tecnologías implica alterar las condiciones clásicas de espacio, tiempo y secuencia para crear experiencias poderosas.</p></article><article><b>Valeria Odetti</b><h3>La forma también enseña</h3><p>La organización visual, la navegabilidad y los lenguajes participan de la mediación didáctica.</p></article><article><b>Cristóbal Cobo y Carina Lion</b><h3>Aprendizaje en red y apropiación crítica</h3><p>La formación digital requiere redes, resolución de problemas y decisiones conscientes frente a algoritmos, datos e inteligencia artificial.</p></article></div></Dialog>;
  if (modal === "curriculo") return <Dialog onClose={onClose} eyebrow="Arquitectura curricular" title="Ocho módulos articulados por proyectos situados"><div className="curriculum-modal">{[["M00", "Comunidades virtuales", "Inmersión y construcción de red"], ["M01", "Nuevas tecnologías", "Fundamentos y cultura digital"], ["M02", "Diseño de trayectos", "Escenarios y TPACK"], ["M03", "Materiales didácticos", "Multimodalidad y mediación"], ["M04", "Comunicación", "Interactividad y lenguajes"], ["M05", "Evaluación y calidad", "Evidencias y acompañamiento"], ["M06", "Innovación y tendencias", "IA, juego y metodologías activas"], ["M07", "Taller de TFI", "Transferencia a un EVA situado"]].map(([code, title, text]) => <article key={code}><span>{code}</span><b>{title}</b><p>{text}</p></article>)}</div></Dialog>;
  const info = modalInfo[modal];
  return <Dialog onClose={onClose} eyebrow={info.eyebrow} title={info.title}><p className="modal-description">{info.text}</p>{"image" in info && info.image && <img className={modal === "bonus" ? "modal-symbol" : "modal-image"} src={info.image} alt={info.title} />}{"images" in info && info.images && <div className="modal-gallery">{info.images.map(([image, label]) => <figure key={label}><img src={image} alt={label} /><figcaption>{label}</figcaption></figure>)}</div>}{"badges" in info && info.badges && <div className="modal-badges">{info.badges.map(([image, label]) => <figure key={label}><img src={image} alt={label} /><figcaption>{label}</figcaption></figure>)}</div>}{modal === "ecosistema" && <div className="modal-links"><a href="https://t.me/+EUCK0JQ0vYIwOTVh" target="_blank" rel="noreferrer">Grupo de Telegram <ExternalLink /></a><a href="https://instagram.com/entornosvirtuales_um" target="_blank" rel="noreferrer">Instagram EVA <ExternalLink /></a></div>}</Dialog>;
}

function Dialog({ eyebrow, title, children, onClose }: { eyebrow: string; title: string; children: React.ReactNode; onClose: () => void }) {
  return <motion.div className="dialog-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}><motion.section className="dialog" role="dialog" aria-modal="true" initial={{ opacity: 0, scale: .98, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .98, y: 12 }} onMouseDown={(event) => event.stopPropagation()}><button className="dialog-close" onClick={onClose} aria-label="Cerrar"><X /></button><p className="dialog-eyebrow">{eyebrow}</p><h2>{title}</h2>{children}</motion.section></motion.div>;
}

export default function Home() {
  const [active, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState<ModalKey>(null);
  const [openQuestions, setOpenQuestions] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) setActive(current.target.id);
    }, { rootMargin: "-18% 0px -70% 0px", threshold: [.14, .32] });
    sections.forEach(([id]) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);

  const navigate = (id: string) => { scrollTo(id); setMenuOpen(false); };

  return <main className="academic-site">
    <a className="skip-link" href="#inicio">Saltar al contenido</a>
    <header className="site-header"><button className="brand-lockup" onClick={() => navigate("inicio")} aria-label="Ir al inicio"><img src="/manus-storage/logo-um-redes-cuadrado_ba61d503.svg" alt="Universidad de Mendoza" /><span><b>Especialización en EVA</b><small>Universidad de Mendoza</small></span></button><nav className="site-nav" aria-label="Navegación principal">{sections.map(([id, title, number]) => <button key={id} className={active === id ? "active" : ""} onClick={() => navigate(id)}><i>{number}</i>{title}</button>)}</nav><button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir navegación">{menuOpen ? <X /> : <Menu />}</button></header>
    <AnimatePresence>{menuOpen && <motion.nav className="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>{sections.map(([id, title, number]) => <button key={id} onClick={() => navigate(id)}><span>{number}</span>{title}<ChevronRight /></button>)}</motion.nav>}</AnimatePresence>

    <section id="inicio" className="hero section-anchor"><div className="hero-grid" /><div className="hero-content"><p className="kicker">II Jornadas Nacionales de Educación · 2026</p><h1>Del aula virtual<br />al <em>ecosistema</em><br />de aprendizaje.</h1><p className="hero-copy">Una experiencia de formación docente y profesional de la Especialización en Entornos Virtuales de Aprendizaje.</p><button className="hero-cta" onClick={() => navigate("sentido")}>Recorrer la experiencia <ArrowDown /></button></div><aside className="hero-side" aria-label="Idea fuerza"><span>01</span><b>Diseñar</b><b>Acompañar</b><b>Evaluar</b><p>Tecnologías integradas desde decisiones pedagógicas situadas.</p></aside></section>

    <section id="sentido" className="light-section section-anchor"><div className="section-wrap"><p className="kicker">01 · Sentido</p><h2>Transformar no es trasladar.</h2><p className="lead">Un entorno virtual no es una plataforma: es una arquitectura pedagógica que organiza trayectos, interacciones, acompañamiento, evaluación y comunidad.</p><div className="principles"><article><Route /><h3>Trayectos</h3><p>Múltiples vías de acceso y progresiones reconocibles.</p></article><article><UsersRound /><h3>Presencia</h3><p>Mediación docente, conversación y acompañamiento sostenido.</p></article><article><BookOpenCheck /><h3>Evidencias</h3><p>Actividades que permiten hacer visibles y revisar procesos.</p></article></div><div className="insight-row"><blockquote>“La coherencia entre qué se enseña, cómo se enseña y dónde se aprende es una condición de la innovación.”<span>Idea-fuerza de la Especialización</span></blockquote><button className="outline-action" onClick={() => setModal("marcos")}>Ver marcos conceptuales <ArrowRight /></button></div></div></section>

    <section id="trayectoria" className="trajectory section-anchor"><div className="section-wrap"><p className="kicker">02 · Trayectoria</p><h2>Una experiencia que crece y se profundiza.</h2><p className="lead">La Diplomatura iniciada en 2020 consolidó una comunidad de práctica. Desde 2024, la Especialización amplía ese recorrido como formación de posgrado y reconoce trayectorias previas mediante equivalencias.</p><div className="timeline"><article><span>2020</span><b>Diplomatura</b><p>Tecnología e Innovación Educativa</p></article><article><span>2024</span><b>Especialización</b><p>Inicio del trayecto de posgrado en EVA</p></article><article><span>2026</span><b>Cohorte 4</b><p>33 cursantes activos en el Módulo 4</p></article></div><div className="metrics"><article><span>Diplomatura</span><b>120</b><p>egresos en 7 ediciones</p></article><article><span>Especialización</span><b>72</b><p>egresados de cohortes 1 y 2</p></article><article><span>Cohorte 3</span><b>43</b><p>colegas en desarrollo de TFI</p></article></div><div className="trajectory-foot"><p>Los datos de Diplomatura y Especialización se presentan de manera diferenciada: el sistema de equivalencias reconoce trayectorias continuadas.</p><button className="outline-action dark" onClick={() => setModal("curriculo")}>Explorar arquitectura curricular <Layers3 /></button></div></div></section>

    <section id="modulo0" className="module section-anchor"><div className="section-wrap"><div className="module-heading"><div><p className="kicker light">03 · Caso de estudio</p><h2>El Módulo 0 inaugura una comunidad.</h2><p>El Taller Comunidades Virtuales de Aprendizaje transforma la llegada a la carrera en una inmersión: orienta, propone desafíos y habilita una primera experiencia de participación.</p></div><img src="/manus-storage/m0logo_b56357c8.png" alt="Módulo 0" /></div><div className="map-feature"><button onClick={() => setModal("mapa")} className="map-preview"><img src="/manus-storage/mapa-ruta-modulo0_2b647a6b.png" alt="Mapa de ruta del Módulo 0" /><span>Ampliar mapa <PlayCircle /></span></button><div className="map-copy"><p className="kicker light">Evidencia central</p><h3>Un mapa para comprender el recorrido.</h3><p>El mapa hace visible el itinerario, los puntos de encuentro, las mediaciones y las condiciones de evaluación. No solo informa: anticipa decisiones y ofrece orientación para transitar el entorno con autonomía.</p><ul><li><Compass /> Anticipa el recorrido</li><li><Route /> Organiza tiempos y acciones</li><li><UsersRound /> Conecta con una comunidad</li></ul></div></div><div className="evidence-actions"><article><div><span>01</span><h3>Desafíos</h3><p>Consignas para experimentar comunidad y ciudadanía digital.</p></div><button onClick={() => setModal("desafios")}>Ver evidencias <ArrowRight /></button></article><article><div><span>02</span><h3>Insignias</h3><p>Señales que orientan avance, exploración y participación.</p></div><button onClick={() => setModal("insignias")}>Comprender su función <ArrowRight /></button></article><article><div><span>03</span><h3>Bonus tracks</h3><p>Recorridos optativos que profundizan dentro de un marco común.</p></div><button onClick={() => setModal("bonus")}>Abrir recorrido <ArrowRight /></button></article></div><div className="module-links"><a href="https://virtual.um.edu.ar/course/view.php?id=31538&section=0" target="_blank" rel="noreferrer"><BookOpenCheck /> Aula del Módulo 0 <ExternalLink /></a><a href="https://virtual.um.edu.ar/course/view.php?id=31538&section=2#opcion1" target="_blank" rel="noreferrer"><Sparkles /> Bonus track <ExternalLink /></a></div></div></section>

    <section id="ecosistema" className="light-section section-anchor"><div className="section-wrap"><p className="kicker">04 · Ecosistema y transferencia</p><h2>Un aula que conversa con otros escenarios.</h2><p className="lead">La plataforma institucional sostiene el trayecto. Otros espacios lo expanden cuando responden a una propuesta, una consigna y una mediación docente.</p><div className="ecosystem-layers"><article><BookOpenCheck /><span>01</span><h3>Aula institucional</h3><p>Arquitectura del trayecto, materiales, actividades, acompañamiento y evaluación.</p></article><article><MessageCircleMore /><span>02</span><h3>Comunicación expandida</h3><p>Canales que sostienen presencia, información y circulación de recursos.</p></article><article><UsersRound /><span>03</span><h3>Producción colaborativa</h3><p>Espacios para crear, compartir, discutir y construir evidencias colectivas.</p></article></div><div className="ecosystem-note"><Network /><p>La tecnología no es el centro del esquema: lo son las relaciones que una propuesta habilita entre contenidos, personas, lenguajes y contextos.</p><button className="outline-action" onClick={() => setModal("ecosistema")}>Abrir escenarios vinculados <ArrowRight /></button></div><div className="transfer"><div><p className="kicker">Transferencia situada</p><h3>Diseñar respuestas para problemas reales de formación.</h3></div><p>Los Trabajos Finales Integradores articulan los saberes de la carrera con aulas de formación docente, propuestas de nivel superior, capacitaciones institucionales y comunidades de aprendizaje en equipos docentes.</p><ShieldCheck /></div></div></section>

    <section id="dialogo" className="dialogue section-anchor"><div className="section-wrap"><p className="kicker light">05 · Diálogo</p><h2>¿Qué decisiones pedagógicas conviene revisar cuando un aula se expande más allá de la plataforma?</h2><p>La pregunta no busca una respuesta única: abre una conversación sobre trayectos, mediaciones, condiciones de participación y sentidos de la tecnología en cada institución.</p><button className="dialogue-action" onClick={() => setOpenQuestions(!openQuestions)}>{openQuestions ? "Cerrar preguntas complementarias" : "Abrir preguntas complementarias"} <ChevronRight /></button><AnimatePresence>{openQuestions && <motion.div className="secondary-questions" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}><article><span>01</span><p>¿Cómo se construyen experiencias significativas sin perder de vista las condiciones reales de participación?</p></article><article><span>02</span><p>¿Qué lugar pueden ocupar las tecnologías emergentes en una propuesta inclusiva, crítica y situada?</p></article></motion.div>}</AnimatePresence></div></section>

    <section className="closing"><GraduationCap /><h2>La transformación educativa no comienza con una plataforma.</h2><p>Comienza con decisiones pedagógicas situadas, con comunidad y con condiciones reales de participación.</p><button onClick={() => navigate("inicio")}>Volver al inicio <ArrowRight /></button></section>
    <footer><div><img src="/manus-storage/logo-um-redes-cuadrado_ba61d503.svg" alt="Universidad de Mendoza" /><span><b>Especialización en Entornos Virtuales de Aprendizaje</b><small>Universidad de Mendoza</small></span></div><p>II Jornadas Nacionales de Educación · Eje 1: Innovación Tecnológica y Transformación Digital</p></footer>
    <AnimatePresence>{modal && <Modal modal={modal} onClose={() => setModal(null)} />}</AnimatePresence>
  </main>;
}
