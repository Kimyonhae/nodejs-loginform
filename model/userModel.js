"use strict";

const fs = require("fs/promises");

class UserModel {

    static getUsers(...paramas){
        // const users = this.#users;
        //이러면 newUsers는 빈 객체 또는 배열이 됨.
        const newUsers = paramas.reduce((newUser,param) => {
            if(users.hasOwnProperty(param)){
                //이건 filltering 과 같구나..?
                newUser[param] = users[param];
                return newUser
            }
            return newUsers;
        },{});
        return newUsers;
    }

    //private getUserInfo method
    static #getUserInfo(data,id){
        const users = JSON.parse(data);
            const idx = users.userId.indexOf(id);
            const userKey = Object.keys(users);
            const userInfo = userKey.reduce((selectUser,value) => {
            selectUser[value] = users[value][idx];
            return selectUser;
            },{});
            return userInfo;
    }

    //id 는 해당 배열들 중에서 이름입니다.
    static getUserInfo(id){
        return fs.readFile("./db/loginDB/users.json")
        .then((data) => {
        //private getUserInfo method
            return this.#getUserInfo(data,id);
        }).catch(console.error);
    }

    // db or file data 저장 method
    static save(userInfo){
        // const users = this.#users;
        users.userId.push(userInfo.userId);
        users.password.push(userInfo.password);
        users.userName.push(userInfo.userName);
        console.log(users);
    }
}
module.exports = UserModel;