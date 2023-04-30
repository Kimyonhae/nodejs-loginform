"use strict";

const UserModel = require("./userModel");

class User {

    constructor(body){
        this.body = body;
    }

    //login method
    async login(){
        const body = this.body;
        // const {userId,password} = 
        const {userId,password} = await UserModel.getUserInfo(body.userId);
        console.log(userId,password);
        if(userId){
            //userId 가 있는게 전제입니다.
            if(userId === body.userId && password === body.password){
                // 바로 해당 useId를 가져와서 vaild 하고 싶지만 userId 와 password는 arry상태입니다.
                //이걸 arry가 아닌 해당 id 의 맍는 userId와 password를 가지고 오는 logic을 짭니다.
                return {
                    success : true,
                }
            }
            return {
                success : false,
                msg : "비밀번호가 틀렸습니다",
            }
        }
        return {
            success : false,
            msg : "존재하지 않는 ID 입니다.",
        }
    }
    register(){
        UserModel.save(this.body);
        return {
            success : true,
        }
    }
}
module.exports = User;