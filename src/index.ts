
//Declaring the variables in typescript
let a:number=24;
let b:string="Imran";
let c:boolean=true;

//This is just conersion or another way of writing it
let d=<number>24;
let e=<string>"Imran";
let f=<boolean>true;

//union of two datatypes
let surname: string|number="Ahmed";
surname=5;

//--------------------------------------------------------------------------------------------------------------------------------------


//we can define the type on ther side called type aliases
type funcreturn=(n:number,m:number)=>number
//creating the functions in typescript
const func:funcreturn=(n,m)=>{
    console.log(n,m);
    //it can automaticaly detect the return type of the function or wen can explicitly define it
    return n*m;
   // return String(n*m);

}

//func(240,24);

//--------------------------------------------------------------------------------------------------------------------------------------

//Arrays in typescript
const arr:number[] =[12,24,36,48];
const arr1:string[] =["imran","ahmed","shaikh"];
//another way of creating the arrays !!! imprtnt
const arr2:Array<string>=new Array(20);
const arr3:Array<string|number>=["number",20];

// arr1.forEach((i)=>{
//     console.log(i)
// })

//--------------------------------------------------------------------------------------------------------------------------------------

//objects
type Obj={
    height:number;
    weight:number;
    gender:boolean;
    name?:string;
}
//we can also make the interface for the type
interface Obj1 {
    height:number;
    weight:number;
    gender:boolean;
    name?:string;
}

const obj:Obj1={
    height:24,
    weight:25,
    gender:true,
    name:"imran"
}

//--------------------------------------------------------------------------------------------------------------------------------------

//interface use 
interface NewObj extends Obj {
    func:funcreturn;
}
const obj1:NewObj={
    height:24,
    weight:25,
    gender:true,
    name:"imran" ,
    func:(n,m)=> {
       console.log(n,m) 
       return n*m
    },
}

// const ans:number=obj1.func(20,30)
// console.log("ans",ans)

//--------------------------------------------------------------------------------------------------------------------------------------


//Functions and all|
//optional parameter
type FuncType =(n:number,m:number,l?:number)=>number

const func1:FuncType=(n,m,l)=>{
    if(typeof l ==="undefined") return n*m;
    return n*m*l;
}

func1(5,10);


//rest operator
type FuncType1=(...m:number[])=>number[];
const func2:FuncType1=(...m)=>{
    return m;

}
func2(5,10,15,20,25,30);


//function with object

interface Product {
    name:string,
    stock:number,
    price:number,
    photo?:string
}
type getdataType=(product:Product)=>void;
const getData:getdataType=(product)=>{
    console.log(product)
}

const product1:Product={
    name:"Imran",
    stock:15,
    price:2000,
    photo:"something.com"
}

getData(product1)

//--------------------------------------------------------------------------------------------------------------------------------------

