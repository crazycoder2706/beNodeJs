// var object = {
//   hoVaTen: "Pham Ngoc Tung Lam",
//   phone: "0123456789"
// };

// for (test in object) {
//   console.log(`${test}`);
// }

// var a = 10;

// if (a == 10) {
//   var b = 20;
//   console.log(b);
// }

// console.log(b);

// function maxNumber(a, b) {
//   return (a >= b) ? a : b;
// }

// console.log(maxNumber(10, 15));

// function printFizzBuzz(a) {
//     if(typeof a === "number"){
//       if(a % 3 == 0 && a % 5 != 0){
//         return "Fizz";
//       }else if(a % 5 == 0 && a % 3 != 0){
//         return "Buzz";
//       }else if(a % 3 == 0 && a % 5 == 0){
//         return "FizzBuzz";
//       }else{
//         return "Gia tri nhap vao";
//       }
//     }else{
//       return "Vui long nhap so";
//     }
// }

// console.log(printFizzBuzz(7));


// function checkSpeed(x){
//   if(typeof x === "number"){
//     if(x <= 70){
//       return "van toc an toan";
//     }else if(x > 70 && x < 120){
//       let a = x % 70;
//       let b = a / 5;
//       let c = parseInt(b);
//       return "Bạn đã bị phạt: " + (30000*c) + "đ";
//     }else if(x >= 120){
//       return "bạn đã bị tước bằng lái xe";
//     }
//   }
// }

// console.log(checkSpeed(120))

const person = {
  name: "Le Van A",
  age: 40,
  height: 175,
  country: "Viet Nam",
  designation: "UI Developer",
};

// for (const key in person) {
//   console.log(key + ":" + person[key])
// }

//check String value in object

function checkValueIsStringInObject(value) {
  return (typeof value === "string") ? true : false;
}

for (const key in person) {

  if (checkValueIsStringInObject(person[key])) {
    console.log(key + ": " + person[key]);
  }
}

function CheckPrimerNumber(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function showPrimerNumber(n) {
  for (let i = 0; i <= n; i++) {
    if (CheckPrimerNumber(i)) {
      console.log("Số nguyên tố: " + i)
    }
  }
}

showPrimerNumber(20)

function checkTime(time) {
  let timeNew = 0;
  timeNew += Number(time.charAt(0) + time.charAt(1));
  if (time.includes("AM")) {
    if (timeNew == 12) {
      timeNew = 0;
    }
  } else if (time.includes("PM")) {
    if (timeNew != 12) {
      timeNew += 12;
    }
  }
  timeNew = timeNew.toString();
  for (let index = 2; index < time.length; index++) {
    timeNew += time[index];
  }
  return timeNew;
}

console.log(checkTime("12:40:22AM"));


function checkLeapYear(year){
   return ((year%4==0&&year%100!=0)||(year%100==0&&year%400==0))?true:false;
}

console.log(checkLeapYear(2015))

function takeIndexDootFile(file){
  for(let i = 0; i < file.length; i++){
    if(file.charAt(i)==='.'){
       return i;
    }
  }
  return -1;
}

function takeFile(file){
  let index = takeIndexDootFile(file);
  let duoiFile = "";
  for(let i = index + 1; i < file.length; i++){
    duoiFile += file[i];
  }
  return duoiFile;
}

console.log(takeFile("abc.java"));

const myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];

const nameFriend = [];

for (const iterator of myFriends) {
  if(typeof iterator === "string"){
    nameFriend.push(iterator);
  }
}

console.log(nameFriend)