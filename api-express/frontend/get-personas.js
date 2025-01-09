const API_URL = "http://localhost:3000";

// 1. Lanzar una petición GET contra la ruta '/personas' de la API
// procesar el JSON y mostrarlo por consola

fetch(`${API_URL}/personas`)
.then(response => response.json())
.then(json => console.log(json));