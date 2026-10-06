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

