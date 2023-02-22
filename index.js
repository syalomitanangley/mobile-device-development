//1. mengkonversi suhu dari fahrenheit ke celcius
import { fToC } from "./export.js";
const fahrenheit = 100;
const celcius = fToC(fahrenheit);
console.log(`${fahrenheit} Fahrenheit = ${celcius} Celsius`);

//2. menghitung BMI (Body Mass Index)
const b = 70;
const t = 1.75;
const bmi = hitungBMI(b, t);
console.log(`BMI = ${bmi.bmi} (${bmi.jenis})`);