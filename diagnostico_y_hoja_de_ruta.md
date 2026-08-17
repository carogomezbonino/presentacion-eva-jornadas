# Diagnóstico de diseño y hoja de ruta de corrección

## Criterio rector

El micrositio debe dejar de comportarse como una sucesión de recursos visuales y convertirse en una **pieza académica tecnoeducativa navegable**. Cada estación necesita una única idea fuerza, una evidencia central y una posibilidad de ampliación. Lo que hoy funciona como contenido simultáneo debe redistribuirse en niveles: **ver, comprender y profundizar**.

## Hallazgos prioritarios

| Prioridad | Problema observado | Efecto sobre la presentación | Corrección propuesta |
|---|---|---|---|
| Crítica | Exceso de componentes visibles en una misma estación, especialmente en Módulo 0. | Se diluye la idea principal y se percibe saturación visual. | Dejar siempre visible una idea, una evidencia y una acción; mover el resto a pestañas, acordeones o ventanas emergentes. |
| Crítica | Movimiento vertical en tarjetas y transiciones de entrada que reducen temporalmente la opacidad. | Puede generar sensación de superposición y textos de bajo contraste al navegar por anclas. | Quitar desplazamientos verticales en tarjetas estructurales; mantener opacidad plena en títulos y textos críticos. |
| Crítica | Uso de ilustraciones genéricas con personas en la portada y en Ecosistema. | Compiten con la identidad académica y con las evidencias propias. | Limitar la imagen conceptual a una sola pieza abstracta; priorizar mapa de ruta, capturas reales, iconografía y diagramas propios. |
| Alta | Escalas tipográficas heterogéneas: la lectura principal funciona, pero las etiquetas, navegación, metadatos y textos de apoyo siguen siendo pequeños. | Pierde legibilidad a distancia y debilita la jerarquía. | Eliminar microetiquetas no esenciales; llevar navegación y textos auxiliares a un mínimo equivalente de 16 px en escritorio; usar un único sistema tipográfico de 3 niveles. |
| Alta | Trayectoria concentra cronología, indicadores y ocho módulos en una única sección. | Hay demasiada información antes de llegar al caso de estudio. | Dejar visibles la cronología y tres indicadores; transformar los módulos en cuatro núcleos o en una ventana ampliable. |
| Alta | El Módulo 0 presenta metáfora, mapa, desafíos, tarjetas, insignias y enlaces en una misma secuencia. | La evidencia real queda relativizada y la sección se hace demasiado larga. | Usar el mapa real como foco; organizar desafíos, insignias y bonus tracks en tres pestañas o en una galería de evidencias. |
| Media | El cierre propone tres preguntas extensas con el mismo peso visual. | Se vuelve una pared de lectura y no una verdadera apertura al diálogo. | Mostrar una pregunta eje y ofrecer dos preguntas complementarias solo al activar “profundizar”. |
| Media | Los fondos cambian de forma abrupta entre estaciones. | Se pierde continuidad narrativa y aparecen espacios de transición poco resueltos. | Establecer una secuencia de cuatro superficies: claro editorial, azul profundo para Módulo 0, claro editorial y cierre turquesa. |

## Composición recomendada

| Estación | Función | Contenido siempre visible | Contenido bajo demanda |
|---|---|---|---|
| Portada | Situar la propuesta | Título, subtítulo, identidad UM y una pieza abstracta sobria. | Ninguno. |
| Idea pedagógica | Formular la tesis | Una definición de EVA, tres principios y una cita/idea fuerza. | Autores y desarrollos teóricos en una única ventana “Marcos conceptuales”. |
| Trayectoria | Acreditar experiencia | Cronología breve y los tres indicadores confirmados. | Progresión de módulos en un panel ampliable o cuatro núcleos formativos. |
| Módulo 0 | Demostrar cómo se trabaja | Mapa de ruta real con explicación clara. | Desafío 1, Desafío 2, insignias y bonus tracks como galería de evidencias. |
| Ecosistema y transferencia | Mostrar expansión situada | Tres escenarios: aula, comunicación y producción colaborativa. | Telegram, Instagram, metaverso y contextos de transferencia en tarjetas desplegables. |
| Diálogo | Abrir conversación | Una pregunta reflexiva central. | Dos preguntas complementarias y una síntesis final. |

## Reglas visuales que aplicaría

La interfaz debe usar una cuadrícula estable, con un ancho de contenido único y espacios verticales constantes. Las secciones claras tendrán fondo marfil, texto azul profundo y un único acento turquesa o magenta. Las secciones oscuras usarán blanco pleno para títulos y texto, sin transparencias que comprometan el contraste.

Las tarjetas no deberían elevarse ni desplazarse sobre otras piezas. En los elementos interactivos, el efecto de paso de cursor se resolverá con cambio de borde, sombra y color de fondo, no con traslaciones que puedan aparentar desajustes. Las animaciones de entrada quedarán reservadas para imágenes, paneles secundarios y ventanas emergentes; títulos, datos e indicaciones de navegación aparecerán inmediatamente y a opacidad completa.

El mapa de ruta, los desafíos y las insignias se presentarán como evidencia de diseño. Cada uno incluirá una leyenda académica breve que explique **qué decisión pedagógica evidencia**, no solo qué se ve en la captura.

## Interacciones que conservaría

Se conservarían las ventanas emergentes para ampliar evidencias, las pestañas de marcos conceptuales y una galería de Módulo 0. Se simplificarían los acordeones y se eliminarían interacciones decorativas. La interacción debe ayudar a que el equipo expositivo decida cuánto profundizar según el diálogo con el público, no producir movimiento por sí mismo.

## Orden de intervención

1. Reconstruir la arquitectura de estaciones y retirar componentes redundantes.
2. Reemplazar o retirar las imágenes genéricas con personas y ordenar las evidencias propias.
3. Corregir espaciado, escala tipográfica y contraste; desactivar movimientos que producen superposición.
4. Reimplementar ventanas emergentes y desplegables solo sobre contenidos secundarios.
5. Revisar cada ancla de navegación y hacer un ensayo completo en pantalla de proyección.
