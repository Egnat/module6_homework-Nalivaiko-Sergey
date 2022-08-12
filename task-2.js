let i = 0;
let numArr = [0, 1000]
function getMeaning() {
while (i < 1000) {
 
if (i > 1000) {
return "ошибка"; 
}
}

if (numArr %2 == 1) {
return "simple"; 
}else if(numArr %3 !== 2) { 
return "no simple"; 
}
}
console.log(getMeaning());
getMeaning();