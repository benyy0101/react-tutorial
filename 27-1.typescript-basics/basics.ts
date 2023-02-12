//Primitives: numbers, string, boolean
//More complex types: arrays, objects
//Function types, parameters

//1. Primitives

let age: number;
age = 12;

let userName: string;

userName = 'MAx';

let isStudent: boolean;

isStudent = false;


//2. Complex types:

let hobbies: string[];

hobbies = ['a','b']



type Person =  {
    name: string;
    age: number;
};

let person: Person[];

function add(a: number,b: number): number | string {
    return a+b;
}

//Generics

function insertBeginning<T> (array: T[], value:T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertBeginning(demoArray, 0);




