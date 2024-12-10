// Interface optional types

// 1. the accessories property is not present in the object, so TS gives an error
// do we want this property to be optional. Modify the interface.
interface CarWithExtras {
    model: string;
    color: string;
    constructionYear: number;
    accessories: string[];
}

const car3: CarWithExtras = {
    model: "Ibiza",
    color: "black",
    constructionYear: 2018
}
