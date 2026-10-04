# WinterArc: cómo publicarla gratis

Tiempo aproximado: 15 minutos. Necesitas una cuenta de Google (para Firebase) y una de GitHub.

## 1. Crea tu base de datos en Firebase (gratis, plan Spark)

1. Entra a https://console.firebase.google.com y toca **Agregar proyecto**. Ponle `winterarc`. Google Analytics puedes desactivarlo.
2. En el menú, abre **Compilación › Authentication › Comenzar**. En la pestaña **Método de acceso**, activa **Correo electrónico/contraseña** y guarda.
3. Abre **Compilación › Firestore Database › Crear base de datos**. Elige la ubicación `nam5 (us-central)` e inicia en **modo de producción**.
4. En Firestore, abre la pestaña **Reglas**, borra lo que hay, pega el contenido de `firestore.rules` y toca **Publicar**.
5. Ve a **Configuración del proyecto** (el engrane) › **Tus apps** › el ícono **</>** (Web). Ponle el nombre `winterarc-web`; no actives Hosting.
6. Firebase te muestra un bloque `firebaseConfig = { apiKey: ..., ... }`. Copia esos valores al archivo `firebase-config.js`, en lugar de `PEGA_AQUI` y los campos vacíos.

La `apiKey` de Firebase no es una contraseña: está hecha para ir en páginas públicas. Lo que protege tus datos son las reglas del paso 4.

## 2. Publícala en GitHub Pages

1. En https://github.com/new crea un repositorio público llamado `winterarc`. GitHub Pages gratis requiere que el repositorio sea público; tus datos no quedan expuestos porque viven en Firebase, no en el repositorio.
2. Toca **uploading an existing file** y arrastra **todo el contenido** de esta carpeta: `index.html`, `firebase-config.js`, `manifest.json`, `sw.js` y la carpeta `icons`. Luego toca **Commit changes**.
3. Ve a **Settings › Pages**. En **Branch**, elige `main` y la carpeta `/ (root)`, y toca **Save**.
4. En 1 o 2 minutos tu app queda en `https://TU-USUARIO.github.io/winterarc/`.
5. De vuelta en Firebase, abre **Authentication › Configuración › Dominios autorizados**, toca **Agregar dominio** y escribe `TU-USUARIO.github.io`.

## 3. Instálala en tu iPhone

1. Abre la URL en **Safari**.
2. Toca **Compartir › Agregar a pantalla de inicio**.
3. Abre la app desde el ícono y toca **Crear cuenta** con tu correo y una contraseña. Después de esa primera vez, usa **Entrar**.
4. En la PC, abre la misma URL y entra con la misma cuenta: verás los mismos datos.

Una vez cargada, la app funciona sin señal en el gimnasio y sincroniza cuando vuelve el internet.

## Actualizar la app

Sube el `index.html` nuevo al repositorio. Luego cambia `winterarc-v1` por `winterarc-v2` en `sw.js` y súbelo también. En el iPhone, cierra la app y ábrela dos veces para que tome la nueva versión.

## Respaldo

En **Ajustes › Exportar respaldo** descargas un archivo `.json` con todos tus datos. Con **Importar respaldo** los cargas en otro dispositivo o cuenta. También sirve para pasar a la nube lo que hayas registrado en modo "solo este dispositivo".

## Límites del plan gratis

El plan Spark incluye 50,000 lecturas y 20,000 escrituras al día, y 1 GB de almacenamiento. Tu uso personal queda muy por debajo de esos límites y no se pide tarjeta.
