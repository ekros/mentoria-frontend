var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sqlite3 = require('./sqlite3');
var http = require('http');

const { initDB, addPersona, getPersonas, updatePersona, deletePersona } = sqlite3;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

initDB();

// aqui los endpoints *************************

app.get('/ping', (req, res) => {
  res.send('pong');
})

app.get('/personas', async (req, res) => {
  const personas = await getPersonas();
  res.send(personas);
})

app.post('/personas', (req, res) => {
  console.log("body", req.body);
  const { name, surname, age } = req.body;
  console.log("body", name, surname, age);
  if (!name || !surname || !age) {
    res.status(400).send('Bad request');
    return;
  }
  addPersona(name, surname, age);
  res.send('ok');
})

app.put('/personas', (req, res) => {
  const { name, surname, age } = req.body;
  updatePersona(name, surname, age);
  res.send('ok');
})

// 4. completa la ruta faltante en el siguiente endpoint
// se utiliza para eliminar una persona y recibe el nombre de la persona como parametro
// correr el fichero delete-persona.js para probarlo
// pista: leer apartado Route parameters de aquí: https://expressjs.com/en/guide/routing.html
app.delete('', (req, res) => { // cual es la ruta?
  deletePersona(req.params.name);
  res.send('ok');
})

// 5. necesitamos un endpoint que devuelva una única persona basada en su nombre
// sabrías hacerlo, observando únicamente el código de los endpoints anteriores?
// no es necesario tocar el archivo sqlite3.js
// puedes probar el endpoint corriendo el fichero get-persona-by-name.js
// Recuerda que al reiniciar el backend desaparece la base de datos, por lo que debes volver a añadir una persona

// ?

http.createServer({
  name: 'api-express',
  version: '0.0.0',
}, app).listen(3000);