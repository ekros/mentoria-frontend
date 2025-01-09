const API_URL = "http://localhost:3000";

// 3. Queremos actualizar el apellido y edad de John Doe
// para ellos vamos a hacer una petición PUT
// solo nos falta añadir el apellido y edad a los parámetros enviados en el body del mensaje
// Utiliza para ello los valores que quieras

// Cuando hayas hecho el cambio, tienes que ejecutar primero post-personas.js para añadir la persona

fetch(`${API_URL}/personas`,
    {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: 'John',
            surname: 'Williams',
            age: 40
        })
    }
)
.then(response => response.text())
.then(text => {
    fetch(`${API_URL}/personas`)
    .then(response => response.json())
    .then(json => console.log(json));
});

