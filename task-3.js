/*Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.*/

function getNum(sum) {
  sum();
  return (sum)  
}
function argSum() {  
  console.log(2+1);   
} 
const resultArgSum = getNum(argSum)

resultArgSum();