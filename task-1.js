/*В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, 
но и, например, знаки, null и так далее.

На этот раз оформите решение в виде функции, 
постарайтесь дать этой функции корректное название, вызовите функцию, 
проанализируйте синтаксис.*/

//Если убрать ! после %3 то получится - не число. А какой ответ лучше?
function different(num, str, sing) { 
  if (different %3 !== 1) {
    console.log("odd");
  } else if (different %2 == 2) {
    console.log('even');
  } else {
    console.log('значит не число'); 
 }
};
different();
console.log(typeof different);