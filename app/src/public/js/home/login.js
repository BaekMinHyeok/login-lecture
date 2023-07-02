"use strict";
//자바스크립트와 연결되는 프론트 화면
const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", login);

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
    .then((res) => res.json())
    .then((res) =>{
      if(res.success){
        location.href = "/";
      } else {
        alert(res.msg);  
      }
    }) //서버에서 응답하는 데이터를 받기
    .catch((err) =>{
      console.error(new Error("로그인 중 에러 발생")); //new Error 로 사용하면 에러문구 앞에 Error로 출력
    });
    //res.json()의 반환 값은 promise다.
    //기본 res의 반환 값은 response 스트림인데, "json()" 메서드를 통해 Response(응답) 스트림을 읽을 수 있다.
    //Response는 데이터가 모두 받아진 상태가 아니다.
    //".json()"으로 Response 스트림을 가져와 완료될 때까지 읽는다,
    // 읽은 body의 텍스트를 Promise 형태로 반환한다.
    //promise 타입은 then을 사용해서 받는다.

    
}