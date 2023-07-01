"use strict";

const app = require("../app") //상위 폴더에 app.js을 불러온다
const PORT = 3000; //포트번호

app.listen(PORT, () => {
    console.log("서버 가동");
});