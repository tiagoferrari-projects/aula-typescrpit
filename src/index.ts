// tipos basicos

let age: number = 5;
const firstName: string = "Tiago";
const isValid: boolean = true;
let idk: any = 5;

idk = '12';
idk = true;

const ids: number[] = [1, 2, 3, 4];
const booleans: boolean[] = [];
const names: string[] = ["Tiago", "Ferrari", "Angela"];

// Tupla
const person: [number, string] = [30, "Almeida"];

// Lista de Tuplas
const people: [number, string][] = [
    [1, "Rick"],
    [2, "Morty"]
];

// Intersections
const productId: string | number | boolean = false;

// Enum
enum Direction{
    Up = 1,
    Down = 2,
    Left = "Esquerda"
}

const direction = Direction.Up;

// Type Assertions
const productName: any = "Boné";

// let itemId = productName as string;
let itemmId = <string>productName;

console.log(age);
