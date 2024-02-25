const slug = require("slugify");
const lod = require("lodash");

console.log(slug("Merhaba Node JS"));
console.log(slug("Merhaba Node JS", "/"));

console.log(lod.reverse([1, 2, 3]));
console.log(lod.last([1, 2, 3, 45, 43, 12, 0, 765]));
console.log(lod.take([1, 2, 3, 45, 43, 12, 0, 765], 4));
console.log(lod.take([1, 2, 3, 45, 43, 12, 0, 765], 4));
console.log("Merhaba Nodemon");


