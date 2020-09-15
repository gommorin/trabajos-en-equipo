# DESAFÍO MEDIUM PARTE 2 > REQUERIMIENTOS ISRA
- Vamos a trabajar una maqueta basada en la homepage de Medium. La página debe realizar las siguiente funciones:

## Funciones Necesarias:

### Post Nuevo
- Subir nuevos post a el endpoint asignado a tu equipo: https://ajaxclass9g.firebaseio.com/{nombre_del_equipo}/medium/posts/.json
- El formulario de subida debe ser un elemento modal en la misma página

### Ver Artículo
- El artículo debe ser visible en una ventana modal dentro de la misma página

### Filtrar y Mostrar
- Filtrar y mostrar Artículo Principal
- Filtrar y mostrar Artículos Destacados
- Filtrar y mostrar Editors Pick
- Filtrar y mostrar Todos los Artículos
- Filtrar y Mostrar Top 5 Pop
- Insignia de Koder
- No se repite ningún artículo en ningun filtro del sitio
- Post únicos (Título, imagen, autor, texto)
- Infinite scrolling


----------------------

NOTAS EQUIPO REQUERIMIENTOS (PREVIO A LO QUE ISRA NOS DEBE COMPARTIR)

Header (container 1)
> Upgrade: modal que contiene:
    - Formulario donde capturamos la información que construye un artículo
    - Título
    - Body

> Cuando el artículo es un favorito / popular
  Filtros:
    cuando es popular, debe aparecer en el top body
    qué tan popular (escala de 1 a 5)

Main section (container 2)
  > 2 columns:
    - Artículos más popular
    - 3 artículos populares

  > 1 column:
    - Editors’ pick
    - Link editor’s pick

  > Elementos y Objetos a utilizar dentro de la página:
      1. Cards (usamos las de luis)
          - Foto
          - Título
          - Text-box
          - Autor
          - Sección del Menú donde está el artículo
          - Fecha
          - Tiempo de lectura
          - Popular ★
      2. Navbar (usamos el de eddy)
      3. Menu secciones (usamos el de eddy)

Qué tenemos listo:
  - Maqueta de la página (Luis)
  - Cards (Luis)
  - Navbar (Luis)
  - Scroll Bar (Eddy)

Qué hace falta:
  - Botón Upgrade
  - Modal con formulario
  - Avatar
  - Estilos de algunos cards (por ejemplo, aside de news from your network)
  - Cards con el botón bookmark del main section
  - Revisar responsividad
  - Funciones javascript
  
-------


