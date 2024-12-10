// Interface features

// can you catch the implementaton errors in the objects?
// DO NOT modify the interface
interface Car {
    model: string;
    color: string;
    constructionYear: number;
}

const car: Car = {
    model: "Ibiza",
    color: "black",
}

const car2: Car = {
    model: "Tarraco",
    color: "blue",
    constructionYear: 2016,
    enginePower: 100
}