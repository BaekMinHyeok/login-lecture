"use strict";

class UserStorage {
  static #users = { //#을 붙이여야 private로 바뀌게 됨(외부에서 불러올 수 없음)
    //static을 사용해서 정적 변수로 바꾼 후에 home.ctrl에 불러온다. 로그인버튼을 누르면 안에 값이 터미널에 표시가됨
    id: ["woorimIT", "나개발", "김팀장"],
    psword  : ["1234", "1234", "123456"],
    name: ["우리밋", "나개발", "김팀장"],
  };
//위에 은닉화 시킨후에 메서드로 전달해줘야함
  static getUsers(...fields) { //정적 메서드  fields라는 배열에 저장
    const users = this.#users
    const newUsers = fields.reduce((newUsers, fields)=>{ //newUsers에 fiedls라는 초기값이 들어감, 그 다음 변수는 newUsers옆 fields에 들어감
      if(users.hasOwnProperty(fields)){
        newUsers[fields] = users[fields]; //위의 키와 값을 가져온 newUsers[키] = [값]으로 생각
      }
      return newUsers;
    },{}); //{}); 초기값을 오브젝트로 지정
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // #users의 값을 여기로 받아왔고 이 users의 key값들을 리스트로 변경 [id,psword,name] 
    const userInfo = usersKeys.reduce((newUser, info) =>{
      newUser[info] = users[info][idx]; //idx 값들을 info에 넣어줌
      return newUser;
    }, {});

    return userInfo;
  }
} // class 안에 변수 선언은 필요없다

module.exports = UserStorage;