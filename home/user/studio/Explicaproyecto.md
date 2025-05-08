# Proyecto: Aplicación Web Club Libertad

## Descripción General

La aplicación web "Club Libertad" es un recurso digital diseñado para los hinchas y seguidores del Club Atlético Libertad. Su objetivo principal es servir como un punto central de información y interacción, proporcionando acceso a noticias actualizadas, detalles del equipo, información histórica, calendario de partidos y una forma directa de contactar con el club. La aplicación busca fortalecer el vínculo entre el club y su comunidad de seguidores.

## Funcionalidades Principales

La aplicación web incluye las siguientes funcionalidades clave:

1.  **Visualización del Logo:**
    *   El escudo oficial del Club Atlético Libertad, caracterizado por sus franjas verticales rojas y blancas, se muestra prominentemente, especialmente en la cabecera y secciones destacadas, reforzando la identidad visual del club.

2.  **Cronología Histórica:**
    *   Una sección dedicada a la rica historia del club.
    *   Presenta información clave desde su fundación el 18 de Marzo de 1906.
    *   Destaca hitos importantes, logros tempranos, campeonatos significativos y participaciones destacadas en torneos a lo largo de los años, presentados en un formato de línea de tiempo visualmente atractivo.

3.  **Plantel del Equipo:**
    *   Muestra la plantilla actual de jugadores del primer equipo y los miembros del cuerpo técnico.
    *   Cada miembro tiene una tarjeta de perfil que incluye:
        *   Imagen de perfil (fotografía).
        *   Nombre completo.
        *   Rol o posición (p.ej., Delantero, Mediocampista, Director Técnico).
        *   Número de camiseta (para jugadores, si aplica).
        *   Una breve biografía o descripción (opcional).
    *   La información está organizada por categorías (Jugadores, Cuerpo Técnico) para facilitar la navegación.

4.  **Calendario y Resultados de Partidos:**
    *   **Próximos Partidos:** Muestra una lista de los futuros encuentros programados, incluyendo:
        *   Equipo local y visitante (con logos si están disponibles).
        *   Fecha y hora del partido.
        *   Lugar (estadio o cancha).
    *   **Resultados Anteriores:** Presenta una lista de los partidos ya jugados, mostrando:
        *   Equipo local y visitante.
        *   Resultado final (marcador).
        *   Fecha del partido.
    *   **Detalles del Partido:** Al hacer clic en un partido (tanto próximo como pasado), el usuario es dirigido a una página con información más detallada sobre ese encuentro específico (resumen, estadísticas si aplica, enlaces a crónicas o highlights).

5.  **Formulario de Contacto:**
    *   Permite a los usuarios comunicarse directamente con el club.
    *   Incluye un formulario de contacto donde los usuarios pueden ingresar su nombre, correo electrónico, asunto y mensaje.
    *   También se muestra información de contacto alternativa como dirección física de la sede, número de teléfono y correo electrónico de contacto general.

6.  **Sección de Noticias:**
    *   Presenta las últimas noticias y novedades relacionadas con el Club Atlético Libertad.
    *   Cada noticia muestra un título, un extracto/resumen, fecha de publicación y una imagen destacada (si está disponible).
    *   Un enlace "Ver Más" permite al usuario acceder al contenido completo de la noticia en una página dedicada.
    *   La página de inicio muestra una selección de las noticias más recientes.

7.  **Sección "El Club Hoy":**
    *   Ofrece una visión del estado actual del club.
    *   Incluye información sobre el rendimiento y composición del equipo principal.
    *   Describe proyectos institucionales relevantes, como mejoras en infraestructura (estadio, complejo deportivo), desarrollo de divisiones formativas o iniciativas sociales y comunitarias.
    *   Contiene enlaces directos a secciones relacionadas como la página del equipo (/team) o la página de contacto para más información sobre proyectos.

8.  **Sección "Hazte Socio":**
    *   Promociona el programa de socios del club.
    *   Detalla los beneficios exclusivos para los miembros (descuentos en entradas, prioridad de compra, descuentos en la tienda oficial, acceso a eventos).
    *   Explica el proceso para asociarse, con un llamado a la acción claro y un enlace a la página de contacto o un formulario específico (si existiera).
    *   Integra visualmente la Tienda Oficial, mostrando imágenes de productos (camisetas, bufandas) y destacando los descuentos para socios, con un enlace directo a la tienda (/tienda).

## Guía de Estilo

El diseño visual de la aplicación sigue las siguientes directrices para asegurar consistencia y alineación con la identidad del club:

*   **Colores:**
    *   **Primario:** Rojo (`hsl(var(--primary))` - `#DC2626` aprox.), color principal del club, usado en elementos clave como botones principales, encabezados y detalles destacados.
    *   **Secundario:** Blanco (`hsl(var(--primary-foreground))` - `#FFFFFF`), utilizado para texto sobre fondos primarios y como color de fondo complementario para asegurar contraste y limpieza. También se usa Gris Claro (`hsl(var(--secondary))`) para fondos de secciones alternativas.
    *   **Acento:** Dorado (`hsl(var(--accent))` - `#EAB308` aprox.), simboliza la tradición y logros del club. Se usa para elementos que requieren énfasis visual, como botones especiales o íconos destacados.
    *   **Texto:** Gris Oscuro/Casi Negro (`hsl(var(--foreground))`) sobre fondos claros y Blanco/Gris Claro (`hsl(var(--foreground))` en modo oscuro) sobre fondos oscuros para máxima legibilidad.
*   **Tipografía:**
    *   Se utiliza una combinación de fuentes sans-serif (Geist Sans) clásica y legible para garantizar claridad tanto en encabezados como en el cuerpo del texto.
    *   Los tamaños y pesos de fuente varían jerárquicamente para estructurar el contenido (títulos más grandes y en negrita, párrafos con peso normal).
*   **Iconografía:**
    *   Se emplean íconos de la librería `lucide-react` relacionados con el deporte y la navegación web (calendario, usuarios, trofeo, correo, flechas) para mejorar la interfaz visual y la comprensión rápida de las secciones y acciones.
*   **Diseño (Layout):**
    *   Se prioriza un diseño limpio, moderno y estructurado, utilizando un sistema de grid y flexbox (proporcionado por Tailwind CSS) para organizar el contenido de forma coherente.
    *   Amplio uso de espacios en blanco para evitar la saturación visual y mejorar la legibilidad.
    *   El diseño es completamente responsivo, adaptándose a diferentes tamaños de pantalla (móvil, tablet, escritorio).
*   **Animaciones:**
    *   Se incorporan animaciones sutiles y transiciones suaves (ej., hover en botones y enlaces, carga de elementos) para proporcionar retroalimentación visual al usuario y mejorar la experiencia general sin ser intrusivas. Se usan utilidades de `tailwindcss-animate`.
