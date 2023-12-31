"use strict";

const User = require("../../models/User");



const output = { //안에 렌더링되어진 내용을 객체로 빼줌
  home: (req, res) => {
    res.render("home/index")
  }, // /routes/home/index.js 메인페이지에 표시되는 기능
  login: (req, res) => {
    res.render("home/login") // 위에 views로 파일을 지정해서 경로가 views/home/login 
  },
  register: (req, res) => {
    res.render("home/register") // register 연결
  },
  
}

//users 데이터랑 프론트엔드에서 전달하는 body 데이터랑 인증하는 과정

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    console.log(response);
    return res.json(response); //클라이언트에 응답
  },
   //body를 pasing 하기 위해서 app.js에 parser를 만들고 npm i body-parser -s 로 설치
    //id와 psword 값이 동일한 위치로 맞추는 과정
    //includes(id)는 프론트에서 전달해주는 id가  users.id에 있으면가져온다
    //프론트에서 가져오는 psword가 같은지 확인
    //위에 조건이 맞으면 프론트에 응답처리
    //return으로 나왔기 때문에 else 사용을 안해도 됨

};



module.exports = {
  output, // home : home, 위에 home을 넘겨준다
  process, // login : login,
}; //object에서 원래 key:value 하지만 key를 1개만 지정하면 자체적으로 key와 value가 같아짐
