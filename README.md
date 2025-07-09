# Serious Game para Celulares

Este repositorio contiene cuatro mini-juegos educativos desarrollados en HTML, CSS y JavaScript. Ahora todos se integran en un único hub con registro de usuario y envío de puntajes a Google Sheets. El conjunto forma un *Serious Game* sobre **Educational Digital Storytelling** (EDS).

## Estructura

- `01. Definiciones/` – Pregunta de opción múltiple sobre EDS.
- `02. Completar palabras/` – Texto con espacios en blanco para rellenar.
- `03. Unir palabras/` – Juego de emparejar conceptos con sus definiciones.
- `04. Ahorcado/` – Versión sencilla del juego del ahorcado con sistema de ranking.

Cada carpeta mantiene su propio `index.html`, pero puedes acceder a ellos desde `index.html` en la raíz.

## Uso rápido

1. Clona este repositorio o descarga el paquete ZIP.
2. Abre cualquiera de los archivos `index.html` en tu navegador preferido.
3. El diseño está optimizado para pantallas de teléfonos en orientación vertical.

No es necesario instalar dependencias. Solo se requiere un navegador moderno con soporte para JavaScript.

### Reiniciar progreso

Abre la consola del navegador y ejecuta:

```js
localStorage.clear();
```

### Cambiar el endpoint

El envío de registros y puntajes usa el archivo `utils/sendScore.js`. Modifica la constante `ENDPOINT` o define la variable `VITE_SHEETS_ENDPOINT` si trabajas con un bundler.

### Añadir nuevos mini-juegos

1. Crea una carpeta numerada (`05. Nombre/`).
2. Coloca un `index.html` enlazando `../style.css` y usa módulos existentes (`gameState.js`, `sendScore.js`).
3. Agrega el nuevo juego en el array `games` de `index.html` en la raíz.

## Contribución

Las mejoras son bienvenidas. Si vas a añadir otro mini-juego, crea una nueva carpeta numerada (`05. Nombre del juego`) con su propio `index.html`. Mantén el código ligero para asegurar la compatibilidad en dispositivos móviles.

