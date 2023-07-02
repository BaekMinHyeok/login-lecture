"use strict";

const output = { //안에 렌더링되어진 내용을 객체로 빼줌
  home: (req, res) => {
    res.render("home/index")
  }, // /routes/home/index.js 메인페이지에 표시되는 기능
  login: (req, res) => {
    res.render("home/login") // 위에 views로 파일을 지정해서 경로가 views/home/login 
  },
}

const users = {
  id: ["woorimIT", "나개발", "김팀자"],
  psword  : ["1234", "1234", "123456"],
}//users 데이터랑 프론트엔드에서 전달하는 body 데이터랑 인증하는 과정

const process = {
  login: (req, res) => {
    const id = req.body.id; //body를 pasing 하기 위해서 app.js에 parser를 만들고 npm i body-parser -s 로 설치
    const psword = req.body.psword;

    if(users.id.includes(id)){  //id와 psword 값이 동일한 위치로 맞추는 과정
      const idx = users.id.indexOf(id); //includes(id)는 프론트에서 전달해주는 id가  users.id에 있으면가져온다 
      if (users.psword[idx] === psword){  //프론트에서 가져오는 psword가 같은지 확인
        return res.json({
          success: true, //위에 조건이 맞으면 프론트에 응답처리
        });
      }
    }
//return으로 나왔기 때문에 else 사용을 안해도 됨
    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};



module.exports = {
  output, // home : home, 위에 home을 넘겨준다
  process, // login : login,
}; //object에서 원래 key:value 하지만 key를 1개만 지정하면 자체적으로 key와 value가 같아짐
