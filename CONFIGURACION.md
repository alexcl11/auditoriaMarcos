# Guía de Configuración y Personalización

## 🎨 Cambiar Colores

### Colores Principales
Edita en `styles.css` (líneas iniciales):

```css
:root {
    --color-primary: #667eea;      /* Azul - cambiar para color principal */
    --color-secondary: #764ba2;    /* Púrpura - cambiar para color secundario */
    --color-accent: #ff6b6b;       /* Rojo - cambiar para color de acento */
}
```

### Ejemplos de Paletas
**Opción Verde (Eco-friendly):**
```css
--color-primary: #10b981;
--color-secondary: #059669;
--color-accent: #34d399;
```

**Opción Naranja (Energía):**
```css
--color-primary: #f97316;
--color-secondary: #ea580c;
--color-accent: #fb923c;
```

**Opción Azul Profesional:**
```css
--color-primary: #2563eb;
--color-secondary: #1d4ed8;
--color-accent: #3b82f6;
```

## 📝 Cambiar Textos

### Logotipo/Marca
Busca en `index.html`:
```html
<div class="font-bold text-2xl text-gray-900">
    ⚡ SolarAudit  <!-- CAMBIAR AQUÍ -->
</div>
```

### Precios
Busca "9€" en `index.html` y reemplaza el monto según necesites.

### Textos Largos
- Título principal: `<h1>` en la sección Hero
- Descripciones: En cada `<p>` dentro de las secciones
- Botones: Dentro de tags `<a>` y `<button>`

## 📧 Integrar WhatsApp

En `script.js`, busca la función `showSuccessMessage()`:

```javascript
// Cambiar este número
const whatsappNumber = '34XXXXXXXXX'; // Tu número aquí sin +

// Para enviar automáticamente a WhatsApp:
const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
window.open(whatsappURL, '_blank');
```

## 🔗 Enlaces Externos

### Redes Sociales
En el footer, busca:
```html
<a href="#">Contacto</a>
```
Y reemplaza `#` con:
- WhatsApp: `https://wa.me/34XXXXXXXXX`
- Email: `mailto:info@tudominio.com`
- LinkedIn: `https://linkedin.com/company/tuempresa`
- Instagram: `https://instagram.com/tuempresa`

## 🖼️ Cambiar Imágenes

Los placeholders actuales usan emojis. Para agregar imágenes reales:

```html
<!-- Reemplazar esto -->
<div class="bg-gradient-to-br from-purple-100 to-pink-100">
    <p class="text-6xl mb-4">💡</p>
</div>

<!-- Con esto -->
<div>
    <img src="ruta/a/tu/imagen.jpg" alt="Descripción" class="w-full rounded-2xl">
</div>
```

## 🚀 Desplegar la Web

### Opción 1: Servidor Local (Desarrollo)
```bash
# Python 3
python -m http.server 8000

# Node.js (instalar live-server primero)
npm install -g live-server
live-server

# PHP
php -S localhost:8000
```

### Opción 2: Hosting Gratuito

#### Netlify (Recomendado)
1. Ve a [netlify.com](https://netlify.com)
2. Crea una cuenta
3. Arrastra la carpeta `marcosPagina`
4. ¡Listo! Tu web está en vivo

#### Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio GitHub
3. Haz deploy en un click

#### GitHub Pages
1. Sube los archivos a un repositorio
2. Ve a Settings → Pages
3. Selecciona `main branch` como source

### Opción 3: Hosting Pagado

Servicios como:
- Hostinger (desde 2€/mes)
- Bluehost (desde 2.95€/mes)
- SiteGround (desde 2.99€/mes)

## 📊 Google Analytics

Para rastrear visitantes, agrega al `<head>` de `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID'); <!-- Reemplaza GA_ID con tu ID -->
</script>
```

## 💾 Base de Datos para Formularios

Para guardar respuestas del formulario, usa servicios como:

### Opción 1: Formspree (Gratuito)
```html
<form action="https://formspree.io/f/TU_ID_AQUI" method="POST">
    <!-- campos del formulario -->
</form>
```

### Opción 2: Basin (Gratuito)
```html
<form action="https://basin.launch.app" method="POST">
    <!-- campos del formulario -->
</form>
```

### Opción 3: Telegram Bot
```javascript
const botToken = 'TU_BOT_TOKEN';
const chatId = 'TU_CHAT_ID';
const message = `Nueva solicitud:\n${formData}`;
fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    body: JSON.stringify({
        chat_id: chatId,
        text: message
    })
});
```

## 🔐 SSL/HTTPS

Si usas hosting propio, obtén un certificado gratis en [letsencrypt.org](https://letsencrypt.org)

## ⚡ Optimizaciones

### Velocidad
1. Compress images en [tinypng.com](https://tinypng.com)
2. Minify CSS/JS en [minify-js.com](https://minify-js.com)
3. Lazy load images:
```html
<img src="imagen.jpg" loading="lazy" alt="">
```

### SEO
- Edita los meta tags en el `<head>`
- Agrega Google Search Console
- Crea un `sitemap.xml`
- Submite a Google

## 📱 Probando en Móvil

Abre la web desde tu teléfono usando:
```
http://tu-ip-local:8000
```

O usa el DevTools de Chrome (F12) → Device Emulation

## 🐛 Solución de Problemas

**Problema**: El formulario no funciona
**Solución**: Integra con Formspree o Basin (ver arriba)

**Problema**: La web se ve mal en móvil
**Solución**: Revisa `@media` en `styles.css`

**Problema**: Los colores no cambian
**Solución**: Asegúrate de editar `:root` en `styles.css`, no en HTML

**Problema**: Las fuentes no cargan
**Solución**: Añade Google Fonts al `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

## 📞 Soporte

Para más ayuda, consulta:
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/es/)
- [Stack Overflow](https://stackoverflow.com)

---

¡La web está lista para personalizar! 🚀
