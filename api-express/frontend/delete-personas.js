const API_URL = "http://localhost:3000";

fetch(`${API_URL}/personas/John`,
    {
        method: 'DELETE',
    }
)
.then(response => response.text())
.then(text => {
    fetch(`${API_URL}/personas`)
    .then(response => response.json())
    .then(json => console.log(json));
});

