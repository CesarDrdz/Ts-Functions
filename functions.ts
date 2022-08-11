// Functions param types avoid any type by explicitly declairing the type
// we can have as many params as we want but they can have their own type associated with them


function square(num: number) {
    // num()
    return num * num;
};

function greet(person: string) {
    // person * person;
    return `Hello, ${person}!`
}

const doSoemthing = (person: string, age: number, isFunny: boolean) => {

}
doSoemthing("David", 56, true)
// doSoemthing("David", 56, 555)
// ts will let us know if we provided too many or few arguments.
// doSoemthing("Ron")

// greet(true)
greet("Sky");

// any type infered avoid it. Be explicit 
// square(3)
// square("ghgh")
// square(true)

// adding defualt values comes after the type. line 35
// function asf(num=10){
// }

// function greet (person: string ="stranger"){
//     // person * person;
//     return `Hello, ${person}!`
// }
//  greet()
//  greet("Alex")
//  greet(151)

// Function Return Types 

// Creating a function with a return type.
// ex: const addNum = (x: nummber, y: number): number => {
//     return x + y;
// }
// addNum(5, 5);
// ---> 10

// We can specify the type returned by a function. Even though TypeScript can often infer this. Being explicit will have better results easier to not screw up and we know what the function returns.
// Add the type annotation after the function param list

// Return types

// square(2)

function random(num: number) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

const add = (x: number, y: number): number => {
    return x + y;
}

// Anonymous Functions
// const numbers = [1, 2, 3]
// //  Contextual typing on an arrow function
// numbers.forEach(num => {
//     return num.toUpperCase(); // Error!
//     // .toUpperCase () does not work for nums 
// });

// When TypeScript can infer how an unnamed function is going to be called, it can automatically innfer its parametrs types

// const colors = ["red", "pink", "green"];
// colors.map(color =>{
//     // will error toFix doesn't exist on a string.
//     // return color.toFix();
// });

// VOID 

// Void is a return type for functions that don't return anything. It means just that-this function is void of any data.

// TypeScript can infer this type fairly well, but sometimes it may want you to annotate a function with a void return explcitly 
// EX
// const annonUser = (num: number); void =>{
//     for (let i = 0; i < num; i++){
//         alert('Hello sucka');
//     }
// }

// TS will infer void if not explicit
// function printTwice(msg: string): void {
//     console.log(msg);
//     console.log(msg);
//     // return ""
// }

// The NEVER TYPE
// used to never return a function
//  The Never type represents values that never occur. We might use it to annotate a function that always throw =s an exception, or a function that never finsihes executing.

// Don't confuse never with void- void returns undefined or null, which is technically a type of value. With never, a function doesn't even finish executing.

// a function that doesn't finsih running 

// const dontStop = (): never => {
//     while(true) {
//         console.log("I'm still gonna make it");
//     }

// }

// A function that thows an exception

// const giveError = (msg: string) => {
//     throw new Error(msg);
// }

// Never 
 function makeError(msg: string): never {
    // return undefined
    throw new Error(msg)
 }

 function showLoop(){
    while(true){
        console.log("TV show loop running");
    }
 }

 