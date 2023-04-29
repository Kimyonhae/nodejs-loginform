"use strict";

class UserModel {
    static #users = {
        userId : ["김서빈","김용해","이승훈","김태준"],
        password : ["1234","5678","9101","0205"],
        userName : ["난 김서빈","난 김용해","난 이승훈","난 김태준"]
    };

    static getUsers(...paramas){
        const users = this.#users;
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
    //id 는 해당 배열들 중에서 이름입니다.
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.userId.indexOf(id);
        const userKey = Object.keys(users);
        const userInfo = userKey.reduce((selectUser,value) => {
            selectUser[value] = users[value][idx];
            return selectUser;
        },{});
        return userInfo;
    }
    static save(userInfo){
        const users = this.#users;
        users.userId.push(userInfo.userId);
        users.password.push(userInfo.password);
        users.userName.push(userInfo.userName);
        console.log(users);
    }
}
module.exports = UserModel;