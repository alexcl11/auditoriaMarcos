# 📁 Estructura de Carpetas Recomendada (Para Futuro)

## Estructura Actual (Simplificada)
```
marcosPagina/
├── index.html              # Página principal
├── index.html     # Versión mejorada con SEO
├── styles.css              # Estilos personalizados
├── script.js               # Lógica JavaScript
├── package.json            # Metadata del proyecto
├── README.md               # Documentación principal
├── CONFIGURACION.md        # Guía de configuración
└── ESTRUCTURA.md           # Este archivo
```

## Estructura Expandida (Recomendada para Crecimiento)

```
marcosPagina/
│
├── index.html                    # Página principal
├── 404.html                      # Página error
├── sitemap.xml                   # Mapa del sitio
├── robots.txt                    # Instrucciones para bots
│
├── css/
│   ├── styles.css               # Estilos principales
│   ├── responsive.css           # Estilos móvil
│   └── animations.css           # Animaciones
│
├── js/
│   ├── main.js                  # Script principal
│   ├── form-handler.js          # Gestión de formulario
│   ├── analytics.js             # Google Analytics
│   ├── utils.js                 # Funciones útiles
│   └── vendor/                  # Librerías externas
│       └── (si las necesitas)
│
├── images/
│   ├── hero/
│   │   ├── hero-bg.jpg
│   │   └── hero-pattern.svg
│   ├── icons/
│   │   ├── icon-1.svg
│   │   ├── icon-2.svg
│   │   └── icon-3.svg
│   ├── testimonials/
│   │   ├── person-1.jpg
│   │   └── person-2.jpg
│   └── favicon.ico
│
├── fonts/
│   ├── roboto/
│   │   ├── roboto-400.woff2
│   │   ├── roboto-600.woff2
│   │   └── roboto-700.woff2
│   └── (fuentes custom)
│
├── pages/
│   ├── about.html              # Página About
│   ├── blog.html               # Blog
│   ├── contact.html            # Contacto
│   ├── faq.html                # FAQ expandido
│   ├── privacy.html            # Privacidad
│   └── terms.html              # Términos
│
├── components/
│   ├── header.html             # Header reutilizable
│   ├── footer.html             # Footer reutilizable
│   ├── navigation.html         # Menú
│   └── modals/
│       ├── success-modal.html
│       └── error-modal.html
│
├── data/
│   ├── testimonials.json       # Testimonios
│   ├── faq.json                # FAQs
│   └── benefits.json           # Beneficios
│
├── config/
│   ├── settings.json           # Configuración general
│   ├── colors.json             # Paleta de colores
│   └── constants.js            # Constantes
│
├── build/
│   └── dist/                   # Archivos compilados
│       ├── index.html
│       ├── styles.min.css
│       └── main.min.js
│
└── docs/
    ├── README.md               # Documentación
    ├── INSTALACION.md          # Cómo instalar
    ├── CONFIGURACION.md        # Cómo configurar
    ├── DEPLOYMENT.md           # Cómo desplegar
    └── API.md                  # Si tienes backend
```

## Cómo Implementar Esta Estructura

### Paso 1: Crear las carpetas
```bash
mkdir -p css js images fonts pages components data config docs
```

### Paso 2: Dividir CSS
Mueve `styles.css` a `css/` y crea `css/responsive.css` para móvil.

**css/styles.css:**
```css
/* Estilos principales */
```

**css/responsive.css:**
```css
@media (max-width: 768px) {
    /* Estilos para móvil */
}
```

En `index.html`:
```html
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/responsive.css">
```

### Paso 3: Dividir JavaScript
Mueve `script.js` a `js/` y crea módulos.

**js/main.js:**
```javascript
import { SolarAuditApp } from './app.js';
import { FormHandler } from './form-handler.js';

document.addEventListener('DOMContentLoaded', () => {
    new SolarAuditApp();
});
```

**js/form-handler.js:**
```javascript
export class FormHandler {
    constructor() {
        this.form = document.getElementById('auditForm');
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handle(e));
    }
    
    handle(e) {
        e.preventDefault();
        // Lógica del formulario
    }
}
```

### Paso 4: Organizar imágenes
```
images/
├── hero/
│   └── background.jpg
├── icons/
│   ├── chart.svg
│   ├── target.svg
│   └── growth.svg
└── testimonials/
    └── avatar-1.jpg
```

En HTML:
```html
<img src="images/hero/background.jpg" alt="Hero background">
```

### Paso 5: Crear páginas adicionales
Copia `index.html` como plantilla para otras páginas.

**pages/about.html:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Sobre Nosotros - SolarAudit</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <nav><!-- Menú --></nav>
    
    <main>
        <section>
            <h1>Sobre nosotros</h1>
            <!-- Contenido -->
        </section>
    </main>
    
    <footer><!-- Footer --></footer>
    
    <script src="../js/main.js" defer></script>
</body>
</html>
```

### Paso 6: Crear datos en JSON
**data/testimonials.json:**
```json
[
    {
        "name": "Juan García",
        "company": "SolarPro Madrid",
        "text": "La auditoría nos ayudó a crecer un 40%",
        "avatar": "../images/testimonials/juan.jpg",
        "rating": 5
    },
    {
        "name": "María López",
        "company": "InstalacionesSolar.es",
        "text": "Muy útil, recomendado",
        "avatar": "../images/testimonials/maria.jpg",
        "rating": 5
    }
]
```

En JavaScript:
```javascript
fetch('data/testimonials.json')
    .then(res => res.json())
    .then(testimonials => {
        testimonials.forEach(t => {
            console.log(t.name, t.text);
        });
    });
```

## Ventajas de Esta Estructura

✅ **Escalabilidad**: Fácil de añadir nuevas páginas
✅ **Mantenibilidad**: Código organizado y limpio
✅ **Colaboración**: Múltiples desarrolladores pueden trabajar
✅ **Rendimiento**: Separación de responsabilidades
✅ **SEO**: Estructura clara para buscadores
✅ **Modularidad**: Componentes reutilizables

## Próximos Pasos

1. **Agregar blog** con sistema de categorías
2. **Integrar CMS** como Strapi o Headless WordPress
3. **Implementar backend** con Node.js/Python
4. **Crear APIs** para datos dinámicos
5. **Dockerizar** para deployment fácil
6. **Tests automatizados** con Jest/Cypress

---

Implementa esta estructura cuando la web crezca. Por ahora, mantén todo simple! 🚀
