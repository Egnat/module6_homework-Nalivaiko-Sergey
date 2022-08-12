function getNum(sum) {
sum();
return (sum)  
}
function argSum(){  
console.log(2+1);   
} 
const resultArgSum = getNum(argSum)
resultArgSum();