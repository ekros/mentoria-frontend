
// functions
// 1. What do you think the type "any" is doing?
// 2. Pass the correct types
// 3. is there something wrong with the type of "result"? Fix it.

const toBoolean = (value: any): boolean => {
    return !!value;
}

const r1: boolean = toBoolean();
console.log("r1", r1);