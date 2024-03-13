"use strict";
//Declaring the variables in typescript
let a = 24;
let b = "Imran";
let c = true;
//This is just conersion or another way of writing it
let d = 24;
let e = "Imran";
let f = true;
//union of two datatypes
let surname = "Ahmed";
surname = 5;
//creating the functions in typescript
const func = (n, m) => {
    console.log(n, m);
    //it can automaticaly detect the return type of the function or wen can explicitly define it
    return n * m;
    // return String(n*m);
};
//func(240,24);
//Arrays in typescript
const arr = [12, 24, 36, 48];
const arr1 = ["imran", "ahmed", "shaikh"];
//another way of creating the arrays !!! imprtnt
const arr2 = new Array(20);
const arr3 = ["number", 20];
arr1.forEach((i) => {
    console.log(i);
});
