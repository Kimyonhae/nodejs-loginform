"use strict";
const userId = document.querySelector("#userId");
const password = document.querySelector("#password");
const button = document.querySelector("#btn");
async function loginEventBtn(){
    const req = {
        userId : userId.value,
        password : password.value
    };
        await fetch("/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(req),
        })
        .then(r => r.json())
        .then(res => {
            if(res.success){
                location.href = "/";
            }else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            //fetch 가 실패했을경우!
            console.error(new Error("로그인중 err 발생"));
        });
}

button.addEventListener("click",loginEventBtn);

