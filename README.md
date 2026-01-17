# Solar Audit Landing Page

Landing page profesional para una mini auditoría de oportunidades dirigida a instaladores de placas solares. La página es una réplica exacta de [friendly-maker-zone.lovable.app](https://friendly-maker-zone.lovable.app/).

## 🎨 Características

- ✅ Diseño completamente responsivo
- ✅ Basado en Tailwind CSS
- ✅ Animaciones suaves y transiciones
- ✅ Secciones claramente estructuradas
- ✅ Formulario de contacto funcional
- ✅ FAQ interactivo
- ✅ Navegación fija
- ✅ Optimización SEO
- ✅ JavaScript vanilla (sin dependencias)

## 📁 Estructura del Proyecto

```
marcosPagina/
├── index.html          # Archivo principal HTML
├── styles.css          # Estilos CSS personalizados
├── script.js           # Lógica JavaScript
├── package.json        # Metadatos del proyecto
└── README.md           # Este archivo
```

## 🚀 Secciones

1. **Navegación Fija** - Menú principal con CTA flotante
2. **Hero Section** - Titular y proposición de valor principal
3. **Problemas** - 4 problemas comunes de instaladores
4. **Solución** - La clave para resolver los problemas
5. **¿Qué es la Auditoría?** - Explicación del servicio
6. **Incluye** - 3 puntos principales de la auditoría
7. **Victoria Rápida** - Beneficios en 48h
8. **Bonuses** - 4 bonos gratis valorados en +150€
9. **¿Por qué 9€?** - Justificación del precio
10. **Formulario** - Solicitud de auditoría
11. **FAQ** - Preguntas frecuentes
12. **CTA Final** - Última llamada a la acción
13. **Footer** - Enlaces y información

## 🎯 Componentes Principales

### Tarjetas (Cards)
- Efecto hover con elevación
- Bordes de color según categoría
- Iconos emoji intuitivos

### Botones
- Gradiente personalizado
- Efecto ripple en hover
- Animación de escala

### Formulario
- Validación en tiempo real
- Campos requeridos
- Modal de éxito
- Integración WhatsApp lista

## 🔧 Personalización

### Cambiar colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary: #667eea;
    --secondary: #764ba2;
    --accent: #ff6b6b;
}
```

### Número de WhatsApp
Busca en `script.js`:
```javascript
const whatsappNumber = '34XXXXXXXXX'; // Reemplaza con tu número
```

### Contenido
Todo el contenido está en `index.html` y es fácil de editar.

## 📱 Responsivo

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Rendimiento

- Carga rápida (solo CSS + JS necesarios)
- Sin dependencias externas pesadas
- Optimizado para SEO
- Compresión de imágenes (emojis en lugar de imágenes)

## 🌐 Compatibilidad

- Chrome/Edge (últimas versiones)
- Firefox (últimas versiones)
- Safari (últimas versiones)
- Mobile browsers

## 📊 Conversión

Optimizado para:
- Tasa de clic en CTA
- Velocidad de carga
- Legibilidad
- Confianza del usuario

## 🔒 Seguridad

- Sin scripts maliciosos
- Validación de formulario en cliente
- HTTPS ready
- GDPR compatible (ajustar según necesidades)

## 📝 Licencia

MIT

## 👨‍💻 Desarrollo

Para servir localmente:
```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node.js live-server
npm install -g live-server
live-server

# Opción 3: PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

---

**Última actualización:** Enero 2026
