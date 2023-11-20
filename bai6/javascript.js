var object = {
  hoVaTen: "Pham Ngoc Tung Lam",
  phone: "0123456789"
};

for (test in object) {
  console.log(`${test}`);
}

var a = 10;

if (a == 10) {
  var b = 20;
  console.log(b);
}

console.log(b);

function maxNumber(a, b) {
  return (a >= b) ? a : b;
}

console.log(maxNumber(10, 15));

function printFizzBuzz(a) {
    if(typeof a === "number"){
      if(a % 3 == 0 && a % 5 != 0){
        return "Fizz";
      }else if(a % 5 == 0 && a % 3 != 0){
        return "Buzz";
      }else if(a % 3 == 0 && a % 5 == 0){
        return "FizzBuzz";
      }else{
        return "Gia tri nhap vao";
      }
    }else{
      return "Vui long nhap so";
    }
}

console.log(printFizzBuzz(7));


function checkSpeed(x){
  if(typeof x === "number"){
    if(x <= 70){
      return "van toc an toan";
    }else if(x > 70 && x < 120){
      let a = x % 70;
      let b = a / 5;
      let c = parseInt(b);
      return "Bạn đã bị phạt: " + (30000*c) + "đ";
    }else if(x >= 120){
      return "bạn đã bị tước bằng lái xe";
    }
  }
}

console.log(checkSpeed(120))