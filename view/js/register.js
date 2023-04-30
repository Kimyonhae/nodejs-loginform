"use strict";



const userId = document.querySelector("#userId");
const userName = document.querySelector("#userName");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");
const button = document.querySelector("#createBtn");
async function registerEventBtn(){
    //password 일치 확인
    if(password !== passwordConfirm){
        location.href = "/register";
        return alert("비밀번호가 일치하지않습니다");
    };
    const req = {
        userId : userId.value,
        userName :userName.value,
        password : password.value,
        passwordConfirm : passwordConfirm.value,
    };
    console.log(req);
        await fetch("/register",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(req),
        })
        .then(r => r.json())
        .then(res => {
            if(res.success){
                location.href = "/login";
            }else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            //fetch 가 실패했을경우!
            console.error(new Error("회원가입중 err 발생"));
        });
}

button.addEventListener("click",registerEventBtn);

