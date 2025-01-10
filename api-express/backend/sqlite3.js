const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database(':memory:')

const initDB = () => {
  db.serialize(() => {
    db.run('CREATE TABLE personas (name TEXT, surname TEXT, age INTEGER)')
  })
}

const addPersona = (name, surname, age) => {
  db.run('INSERT INTO personas VALUES (?, ?, ?)', [name, surname, age])
}

const getPersonas = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM personas', (err, rows) => {
      if (err) {
        reject(err)
      } else {
        resolve(rows)
      }
    })
  })
}

const updatePersona = (name, surname, age) => {
  db.run('UPDATE personas SET name = ?, surname = ?, age = ? WHERE name = ?', [name, surname, age, name])
}

const deletePersona = name => {
  db.run('DELETE FROM personas WHERE name = ?', [name]);
}

module.exports = {
  initDB,
  addPersona,
  getPersonas,
  updatePersona,
  deletePersona
}