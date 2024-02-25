// const topla = (a, b) => {
//   return a + b;
// };

// const cikar = (a, b) => {
//   return a - b;
// };

// const bol = (a, b) => {
//   return a / b;
// };

// const carp = (a, b) => {
//   return a * b;
// };

const topla = require("./topla")
const carp = require("./carp")
const islem = require("./islemler")
const ogrenciler = require("./ogrenciler")
const ornek = require("./ornek.json")

console.log(topla(2,4));
console.log(carp(2,4));
console.log(islem.carp(2,4));
console.log(islem.cikar(2,4));
console.log(ogrenciler);
console.log(ogrenciler.name);

console.log(ornek[0].name);