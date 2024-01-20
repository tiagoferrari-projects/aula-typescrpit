"use strict";
// tipos basicos
let age = 5;
const firstName = "Tiago";
const isValid = true;
let idk = 5;
idk = '12';
idk = true;
const ids = [1, 2, 3, 4];
const booleans = [];
const names = ["Tiago", "Ferrari", "Angela"];
// Tupla
const person = [30, "Almeida"];
// Lista de Tuplas
const people = [
    [1, "Rick"],
    [2, "Morty"]
];
// Intersections
const productId = false;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Up;
// Type Assertions
const productName = "Boné";
// let itemmId = productName as string;
let itemmId = productName;
console.log(age);
