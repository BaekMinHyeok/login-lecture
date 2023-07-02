"use strict";

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click",login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch("/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"//내가 전달하는 데이터가 json이라고 알려주는 것
        },  
        body: JSON.stringify(req), //key 값과 value가 문자열로 나옴
    })

    
}