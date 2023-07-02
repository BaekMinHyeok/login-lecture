"use strict"; //에크마스크립트를 명시하겠다는 표시

//모듈
const express = require("express")

const router = express.Router(); //express에 router 불러오기

const ctrl = require("./home.ctrl")

router.get("/", ctrl.output.home); //  ./home.ctrl에 home을 부른다
router.get("/login", ctrl.output.login); 
router.post("/login", ctrl.process.login); 

module.exports = router; //router를 외부로 사용할 수 있게 만들어줌 (연결을 하기위해서)