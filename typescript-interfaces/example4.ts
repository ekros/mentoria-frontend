// Extending interfaces

// 1. Create a new interface called "CarExtended" that extends from CarBase. This will only have those optional properties:
// maxVelocity (number)
// doors (number)
// innerMaterial (string)

interface CarBase {
    model: string;
    color: string;
    constructionYear: number;
}

const car4: CarBase = { // 2. modify this line to extend car4 from the new interface with the extra properties
    model: "Ibiza",
    color: "black",
    constructionYear: 2018,
    maxVelocity: 180,
    doors: 5,
    innerMaterial: "leather"
}
