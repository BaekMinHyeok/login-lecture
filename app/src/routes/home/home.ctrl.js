"use strict";
const output = { //안에 렌더링되어진 내용을 객체로 빼줌
  home: (req, res) => {
    res.render("home/index")
  }, // /routes/home/index.js 메인페이지에 표시되는 기능
  login: (req, res) => {
    res.render("home/login") // 위에 views로 파일을 지정해서 경로가 views/home/login 
  },
}

const process = {
  login: (req, res) => {
    console.log(req.body); //body를 pasing 하기 위해서 app.js에 parser를 만들고 npm i body-parser -s 로 설치
  }
}



module.exports = {
  output, // home : home, 위에 home을 넘겨준다
  process, // login : login,
}; //object에서 원래 key:value 하지만 key를 1개만 지정하면 자체적으로 key와 value가 같아짐
