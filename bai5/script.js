// var button = document.querySelector("button");
// button.onclick = function () {
//   alert("Hello World!");
// }

// var a = 10;
// var b = 20;
// var c = a + b;

// console.log(c);



// var a = 3;
// var b = 2;
// var fullName = "Lam dep trai so ";
// var c = a + 1;

// b **= a;

// console.log(b);
// console.log(c);

// var m = --a;
// console.log(m);
// m = a--;
// console.log(m);
// m = a;
// console.log(m);

// //4.2 kiểu function

// function sum(a,b,c){
//   return a + b + c;
// }

// console.log(sum(a,b,c))

// var value1 = "one";

// var value2 = "two";

// console.log(value1);
// console.log(value2);
// console.log("swap");

// var temp = value1;
// value1 = value2;
// value2 = temp;

// console.log(value1);
// console.log(value2);

// function checkPalindrome(string){
//     const check = string.split("").reverse().join("");
//     return string == check;
// } 

// var s = "rotavator"

// console.log(checkPalindrome(s));

// var b = "20"

// console.log(+b++)

// console.log(true)

// 1 số hàm built - in

//alert in ra thông báo trên pop up
// alert("xin chao cac ban")

//hàm confirm
//ấn oke trả về true còn cancel thì giá trị sẽ trả về false
// var result = confirm("ban có muốn chuyển trang không");
// console.log(result)


//hàm prompt() : trả về 1 ô để chuyền vào
// var result = prompt("Nhập n: ");
// //ở đây sẽ trả về String
// console.log(Number(result));

// console.warn("hihi") // console màu vàng
// console.error("jiji") // console màu đỏ

//setTimeOut : chạy 1 lần duy nhất sau 1 khoảng thời gian nào đó

// setTimeout(function){
//     //code
// }time;

//chỉ chạy 1 lần duy nhất
// setTimeout(function () {
//     console.log("Đã được 5s");
// }, 5000)

//chạy lặp đi lặp lại sau 1 khoảng thời gian nào đó

setInterval(function(){
    console.log("Đã được 10p");
},600000);


var b = setInterval(function(){
  console.log("B")
},1000)

setTimeout(function(){
  clearInterval(b)
},5000);

console.log(typeof(b));

var array = "HTML, CSS, JavaScript";

console.log(array.split(',',2))
