

var number = sum(1,2,3,4,5);
function sum(a,b,c,d,e){
  let sum = 0;
  for (const iterator of arguments) {
    sum += iterator;
  }
  return sum;
}
console.log(number)

