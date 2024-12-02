// any

// here we will practice the most important skill when it comes 
// to dealing with any: get used to replace it by a more specific type :)

// 1. Use what you have learnt so far to replace all the any you see
// by a more suitable type (the value assigned gives you a clue)

const myName: any = "John";

const names: any[] = ["John", "Mark", "Monica"];

const bigNum: any = 124234324;

const perfect: any = true;

const car: any = {
    color: "red",
    years: 10,
    price: 5000
}

const reverse = (str: any) => str.split("").reverse().join("");

// 2. extra! this one is tricky and we have not talk about it
// but you can assign more than one type...
// check this: https://www.w3schools.com/typescript/typescript_union_types.php

const things: any[] = [1, "hi", true]