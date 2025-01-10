const API_URL = "http://localhost:3000";

fetch(`${API_URL}/persona/John`)
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error));