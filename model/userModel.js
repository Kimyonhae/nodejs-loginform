"use strict";

const fs = require("fs/promises");
const PATH = "./db/loginDB/users.json";

class UserModel {

    //private getUsers method
    static #getUsers(isAll,data,paramas){
        // // const users = this.#users;
        // //이러면 newUsers는 빈 객체 또는 배열이 됨.
        const users = JSON.parse(data);
        if(isAll) return users; // 조건 모두 선택.
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


    static getUsers(isAll,...paramas){
        return fs.readFile(PATH)
        .then((data) => {
        //private getUsers method
            return this.#getUsers(isAll,data,paramas);
        }).catch(console.error);
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
        return fs.readFile(PATH)
        .then((data) => {
        //private getUserInfo method
            return this.#getUserInfo(data,id);
        }).catch(console.error);
    }

    // db or file data 저장 method
    static async save(userInfo){
        //register method
        const users = await this.getUsers(true);
        if(!users.userId.includes(userInfo.userId)){
            // userId가 유니크한 경우
            users.userId.push(userInfo.userId); //add userId
            users.password.push(userInfo.password); // add password
            users.userName.push(userInfo.userName); // add userName
            console.log(users);
            fs.writeFile(PATH,JSON.stringify(users));
            return {
                success : true,
            };
        }else {
            throw Error("이미 존재하는 아이디입니다.");
        }
    }
}
module.exports = UserModel;