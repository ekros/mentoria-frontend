// Create a simple web server that returns the contents of the file  "name.txt"
// created in the previous exercise

const http = require('http');
const fs = require("fs");

// create server
const server = http.createServer((req, res) => {
    // 1. load the file "name.txt" (read https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/)
    res.end(); // 2. return response to the client
    // 3. for testing it you can use a browser or postman
});

// listen to port
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
