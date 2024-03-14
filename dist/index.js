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
//--------------------------------------------------------------------------------------------------------------------------------------
//Arrays in typescript
const arr = [12, 24, 36, 48];
const arr1 = ["imran", "ahmed", "shaikh"];
//another way of creating the arrays !!! imprtnt
const arr2 = new Array(20);
const arr3 = ["number", 20];
const obj = {
    height: 24,
    weight: 25,
    gender: true,
    name: "imran"
};
const obj1 = {
    height: 24,
    weight: 25,
    gender: true,
    name: "imran",
    func: (n, m) => {
        console.log(n, m);
        return n * m;
    },
};
const func1 = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
func1(5, 10);
const func2 = (...m) => {
    return m;
};
func2(5, 10, 15, 20, 25, 30);
const getData = (product) => {
    //console.log(product)
};
const product1 = {
    name: "Imran",
    stock: 15,
    price: 2000,
    photo: "something.com"
};
getData(product1);
//--------------------------------------------------------------------------------------------------------------------------------------
//never type
const errorHandler = () => {
    throw new Error();
};
//--------------------------------------------------------------------------------------------------------------------------------------
//classes
class Player {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
        this.myheight = () => {
            return this.height;
        };
    }
}
const imran = new Player(165, 69);
// console.log(imran.height);
//console.log(imran.myheight());
//--------------------------------------------------------------------------------------------------------------------------------------
//type assertion
const button = document.getElementById('btn');
const image = document.getElementById('image');
//without the ? there will be an error because ts does not know what is going on with the html file
button === null || button === void 0 ? void 0 : button.onclick;
image.src;
const myform = document.getElementById("myform");
const myinput = document.getElementById("myinput");
myform.onsubmit = (e) => {
    e.preventDefault();
    console.log(myinput.value);
};
const myobj = {
    name: "Imran",
    email: "imran12334@gamil.com"
};
const getName = () => {
    return myobj["name"];
};
const getEmail = () => {
    return myobj["email"];
};
const getDataa = (key) => {
    return myobj[key];
};
const aa = getDataa("email");
const bb = getDataa("name");
console.log(aa);
console.log(bb);
const user = {
    name: "Imran",
    email: "imran12334@gamil.com"
};
