"use strict";

//모듈
const express = require("express");
const app = express();


//라우팅
const home = require("./src/routes/home") // 표시된 경로의 파일을 읽기

//앱 세팅
app.set("views","./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));// __dirname : 현재 app.js있는 위치를 반환 /src/public 정적경로로 추가

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드

module.exports = app; //app을 내보내기

