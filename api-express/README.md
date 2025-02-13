# Ejercicio sobre el uso y creación de APIs

Este pequeño proyecto se compone de dos partes:
- Un backend en Express que expone una API, con la cual es posible gestionar una entidad PERSONAS.
- Una base de datos SQLite3 almacenada en memoria
- Un "frontend" consistente en unos ficheros JS que lanzan peticiones contra la API.

## Ejecutar el backend

Instalar las dependencias
```bash
    npm install
```

Lanzar el servidor
```bash
    npm run start
```

Esto lanzará el servidor en el puerto 3000.

## Ejecutar el frontend

Este frontend no tiene UI. No es más que varios ficheros que lanzan peticiones contra la API utilizando la fetch API de javascript.

El objetivo es que puedas lanzarlas y ver los resultados en el terminal.

Como ejemplo, tenemos el fichero `ping.js` que lanza una petición GET a la ruta `/ping` y muestra el resultado en la consola.

Para ejecutarlo, lanza el siguiente comando:
```bash
    node ping.js
```
Deberías ver como respuesta: `pong`

## Objetivos

### frontend
- Completa el enunciado 1 del fichero get-personas.js
- Completa el enunciado 2 del fichero post-personas.js
- Completa el enunciado 3 del fichero put-personas.js

### backend
- Completa el enunciado 4 del fichero app.js
- Completa el enunciado 5 del fichero app.js