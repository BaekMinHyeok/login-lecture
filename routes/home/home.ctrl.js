"use strict";

const home = (req , res) => {
    res.render("home/index")
}// /routes/home/index.js 메인페이지에 표시되는 기능

const login = (req, res) => {
    res.render("home/login") // 위에 views로 파일을 지정해서 경로가 views/home/login 
}// /routes/home/index.js -> login 안에 실행하는 내용

module.exports = {
    home, // home : home, 위에 home을 넘겨준다
    login, // login : login,
};  //object에서 원래 key:value 하지만 key를 1개만 지정하면 자체적으로 key와 value가 같아짐

