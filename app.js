let main = document.getElementsByTagName("main");

let headings = document.getElementsByClassName("headings");

let paras = document.getElementsByClassName("content");

let a = document.getElementById("navigation");

let FirstChild = document.getElementById("firstSection");

console.log(main);
console.log(headings);
console.log(paras);
console.log(a);
console.log(main[0]);


para[1].textcontent ="I just changed you";
para[1].style.color = "red";


let newElement = document.createElement("section");

main[0].insertBefore(newElement, FirstChild);