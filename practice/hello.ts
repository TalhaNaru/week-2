                                    // Week-2 Day-1

const message: string = "Hello From Typescript";
console.log(message);                                    

                                    // Primitive Types

const username : string = "TALHA NARU";
const age : number = 20;
const isStudent : boolean = true;
console.log(username,age,isStudent);                                   

                                    // Arrays

const scores : number[] = [10,30,40];
scores.push(70);
console.log(scores);       

                                    // Any vs Unknown

const safe : unknown = "talha";
if ( typeof safe == "string"){
    console.log(safe.toUpperCase());
}

                                    // Union and Literal

let id: string | number = 101;
id = "A1-101";
const role : "admin" | "user" = "user";
console.log(id,role);

                                    // Inference vs Annotation

const count = 5;
const double = (n:number) => n * 2;                                    
const items : string[] = [];
items.push("juice");
console.log(count,double(4),items);

                        // Inference: TypeScript works out the type from the value

let city = "Lahore";
const year = 2026;
let total = 10 + 5 + 6;
const flags = [true,false];

                              // Annotation needed: nothing to infer from
let nickname : string;
nickname = "Talha Naru";

const names : string[] = [];
names.push("Ali");
const greet = (person : string): string =>`Hy ${person}`;
console.log(city,year,total,flags,nickname,names,greet("Sara"));

                                    // --Day 2--

                                    // Interface   
                                    
interface person {
        name : string;
        age : number;    
}                    
const person1 : person = {name:"TalhaNaru",age:24};
console.log(person1);

                                    // Type
                                    
type book = {
    title:string;
    pages:number;
} ;

type status ='Active' | 'Inactive';
const book1 : book = {title:"TS Basics",pages:200};
const state1 : status = "Active";
console.log(book1,state1);

                                    // Optional properties

 interface Member {
    name : string;
    email? : string;
 }    
 
 const member1 : Member = {name : "Talha" };
 const member2 : Member = {name : "Sara" , email : "xyz@gmail.com"}; 
 console.log(member1,member2);
 console.log(member1.email?.toUpperCase());

                                    // Readonly Properties

interface Account {
    readonly id : number;
    owner : string;
}          
const account1 : Account = {id : 5 , owner : "TALHA"};
account1.owner = "Ali";
console.log(account1);                             

                                    // Function types

type Mathfn = (a : number , b : number) => number;
const addnumbers : Mathfn = (a,b) => a+b;
const multiply : Mathfn = (a,b) => a*b;
console.log(addnumbers(2,3) , multiply(2,3));                                    

                                    // Objects and Arrays of Objects

interface product  {
    readonly id : number;
    name : string;
    price : number;
    discount? : number;
}                                 
const products : product[] = [
    {id : 1, name : "Pen", price : 40},
    {id : 2, name : "Book", price : 100, discount : 20}
];
console.log(products);
const productNames = products.map((p) => p.name); 

console.log(productNames);

const showproduct = (p:product):string => `${p.name},${p.price}`;
console.log(products.map(showproduct));

                                    // Another example

interface Appuser {
    id : number;
    name? : string;
    phone : string;
}
const users : Appuser[] = [
    {id : 1, phone : "0309-6789098"},
    {id : 2, name : "Talha", phone : "0309-6789098"},
];

const name = users.map((n)=>n.name?? "undefined or not registered");
console.log(name);
                                     // Another example

interface Cartitem{
    name : string;
    price : number;
    quantity : number;
}                  
const cart :   Cartitem[] = [
    {name : "pen", price : 40, quantity : 4},
    {name : "paper", price : 50, quantity : 3},
]    
const totalcost = cart.reduce((sum ,item) => sum +item.price * item.quantity, 100);
console.log(totalcost);            