// import { topla } from "./topla.js";
// import { topla as sum, cikar } from "./islemler.js";
import { islemler } from "./islemler.js";
import chalk from "chalk";

// import ogrenci,{ ogrenciAdi } from "./ogrenciler.js";
import ogrenci, { ogrenciAdi as studentName } from "./ogrenciler.js";

// console.log(topla(5, 6));
// console.log(cikar(5, 6));
console.log(chalk.bgYellow(islemler.cikar(5, 6)));

console.log(chalk.blue(studentName));
console.log(ogrenci);
