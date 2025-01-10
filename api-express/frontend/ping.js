const API_URL = "http://localhost:3000";

fetch(`${API_URL}/ping`)
.then(response => response.text())
.then(text => console.log(text));
