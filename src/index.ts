
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



//creating the functions in typescript
const func=(n:number,m:number):number=>{
    console.log(n,m);
    //it can automaticaly detect the return type of the function or wen can explicitly define it
    return n*m;
   // return String(n*m);

}

func(240,24);