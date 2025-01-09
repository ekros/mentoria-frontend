const API_URL = "http://localhost:3000";

// 2. Aquí lo que queremos es añadir una nueva persona y luego
// mostrar la lista de personas para comprobar que se ha añadido

// el problema es que la siguiente implementación no funciona
// hay 3 errores en la implementación. ¿Los puedes corregir?

fetch(`${API_URL}/personas`,
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: 'John',
            surname: 'Doe',
            age: 30
        })
    }
)
.then(response => response.text())
.then(text => {
    fetch(`${API_URL}/personas`)
    .then(response => response.json())
    .then(json => console.log(json));
});

