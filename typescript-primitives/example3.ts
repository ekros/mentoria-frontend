
// functions
// 1. What do you think the type "any" is doing?
// 2. Pass some parameter to the toBoolean function (try different values and run the program)

const toBoolean = (value: any): boolean => {
    return !!value;
}

const r1: boolean = toBoolean();
console.log("r1", r1);