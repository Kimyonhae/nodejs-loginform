"use strict";

const User = require("../model/User");
const UserModel = require("../model/userModel");

//test object create!


//get 기능
const output = {
// 기능
    root: (req,res) =>  {
        res.render("index");
    },
    login: (req,res) => {
        res.render("login");
    },
    register:(req,res) => {
        res.render("register");
    },
};

const process = {
    login: (req,res) => {
        const user = new User(req.body);
        const data = user.login();
        res.json(data);
    },
    register: (req,res) => {
        const user = new User(req.body);
        const data = user.register();
        res.json(data);
    },
};



//exports
module.exports = {
    output,
    process
};