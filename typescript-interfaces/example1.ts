// basic use

// given de following object with information about a flight
// Can you create an interface that matches it? Assign the interface to the object so you can catch errors

const flight = {
    departureTime: "2024-12-10T10:44:00.000Z",
    landingTime: "2024-12-10T20:30:00.000Z",
    origin: "Madrid",
    destination: "Caracas",
    flightCode: "584934H",
    planeModel: "A747",
    delayed: false,
    passengerCapacity: 300,
    passengerList: [{
        fullName: "Maria Antonia Rojas Benavente",
        passport: "483924037F"
    },
    {
        fullName: "José Ramón Dominguez",
        passport: "433934703A"
    },
    {
        fullName: "Federica Santos Jímenez",
        passport: "532424323D"
    },
    {
        fullName: "Benito Vargas Navarro",
        passport: "384859345C"
    }]
}