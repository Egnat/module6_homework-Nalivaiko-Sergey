/*Напишите функцию, которая принимает два числа. 
Каждую секунду необходимо выводить в консоль, 
начиная от первого и заканчивая вторым. Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. 
Каждую секунду в консоль должно печататься число, 
начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).*/

const showNum = function (a, b) {  
let timerId = setInterval(function () {
console.log(a);
if (a == b) {
clearInterval(timerId);
} 
a++;
  }, 1000);
}
showNum(5, 15);

///////////////

let i;
const shownum = setTimeout(function(a, b) {
for (let i = 5; i < 16; i++) {
setTimeout(function() {
console.log(i)   
}, 1000 * (i + 1));      
} 
}, 1000 * (i + 1)); 
//clearTimeout(shownum);