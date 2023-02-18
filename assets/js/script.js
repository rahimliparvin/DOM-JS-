"use strict";


//console.log(document);

//let heads = document.getElementsByTagName("h1");

//console.log(heads);


// for (const item of heads) {
//     console.log(item);
// }
// for (let i = 0; i < heads.length; i++) {
//     console.log(heads[i]);

// }

//console.log(head[0]);

// let elem = document.getElementById("header");

// console.log(elem);

// let elem = document.getElementsByClassName("header");

// console.log(elem);

// let elem = document.querySelector("#header1");

//let elem = document.querySelectorAll("#header1");

// console.log(elem);

// for (const iterator of elem) {
//     console.log(iterator);
// }


// let h1 =  document.querySelector("#products .card-item1 h1");

// console.log(h1);

// let h1 =  document.querySelector("#products .card-item2 h1:nth-child(3)");

// console.log(h1);

// let elems = document.querySelectorAll("#products .card-item2 h1");

//console.log(elems);

//  for (let i = 0; i < elems.length; i++) {

//     console.log(elems[i]);

//  }

//  console.log(elems[0]);

//let elem = document.querySelector("#products .card-item1 h1");

// console.log(elem.innerText);

// let elemText = elem.innerText;

// if (elemText == "Salam") {
//     console.log("Correct");
// }

//let a = document.querySelector("#products .card-item1 a");

//a.innerText = "<span>Roya</span>";

//a.innerHTML = "<span>Roya</span>";

//let element = document.querySelector("#products .card-item1 h1")

// element.style.color = "red";
// element.style.backgroundColor = "yellow";
// element.style.position = "relative";
// element.style.top = "100px";

//element.className = "test";

//element.classList.add("active");

//console.log(element.classList);

// element.classList.add("Roya");

// element.classList.remove("Roya");

//let button = document.querySelector("#products .on");

// console.log(button);

// button.onclick = function() {
//     console.log("Click")
// };

// button.onclick = function() {
//     alert("Clicked1");
// };

// button.onclick = function() {
//     alert("Clicked2");
// };

// button.addEventListener("click",function() {
//     alert("Clicked1");
// });

// button.addEventListener("click",function() {
//     alert("Clicked2");
// });

// button.addEventListener("click",function() {
//     this.style.backgroundColor = "red";
// });

// button.addEventListener("click",function(event) {
//     event.target.style.backgroundColor = "red";
//     console.log(event.target);
// });


// let btnOn = document.querySelector("#products .buttons .on");

// let btnOff = document.querySelector("#products .buttons .off");

// let body = document.querySelector("body");

// let icon = document.querySelector("#products .icon i");

// console.log(btnOn);
// console.log(btnOff);
// console.log(body);
// console.log(icon);

// btnOn.addEventListener("click",function(){
//     body.style.backgroundColor = "white";
//     icon.style.color = "yellow";
// })

// btnOff.addEventListener("click",function() {
//     body.style.backgroundColor = "black";
//     icon.style.color = "gray"
// })

// icon.addEventListener("click", function () {
//     if (!this.classList.contains("active-icon") && !body.classList.contains("active-body")) {
//         this.classList.add("active-icon");
//         body.classList.add("active-body");
//     }
//     else {
//         this.classList.remove("active-icon");
//         body.classList.remove("active-body");
//     }
// })

// icon.addEventListener("mouseout",function(){
//     this.classList.remove("active-icon");
//     body.classList.remove("active-body");
// })

// icon.addEventListener("mouseover",function(){
//     this.classList.add("active-icon");
//     body.classList.add("active-body");
// })

let btn = document.querySelector("#products button");
let input = document.querySelector("#products input");
// let header =document.querySelector("#products h1");
let ul = document.querySelector("#products ul");
let li = document.querySelector("#products li");


//<li class="list-group-item">Salam</li> 


// btn.addEventListener("click",function(){
//     let inputValue = input.value;
//     header.innerText = inputValue;
//     input.value = "";
// })


btn.addEventListener("click", function () {

    if (input.value.trim() == "") {
        alert("Don't empty")
        input.value = "";
        return;
    }

    let items = document.querySelectorAll("li");

    for (const item of items) {
        if (item.innerText == input.value) {
            alert("Already exist");
            input.value = "";
            return;
        }
    }

    let inputValue = input.value;
    let li = document.createElement("li");
    li.className = "list-group-item mt-2";
    li.innerText = inputValue;

    ul.append(li);
    input.value = "";



    li.addEventListener("click", function () {

        li.remove();
    });

})



