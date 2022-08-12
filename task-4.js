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