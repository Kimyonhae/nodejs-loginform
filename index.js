"use strict";
//modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// file access settings
app.set("views","./view"); //view 파일을 알려줍니다.
app.set("view engine", "ejs");
app.use("/js",express.static(__dirname + '/view/js/'));
app.use("/css",express.static(__dirname + '/view/css/'));

//midleware
app.use(bodyParser.json()); //data 통신을 위한 midleware
app.use(express.urlencoded({extended : true})); // data의 띄어쓰기 이런거 인코딩 잘되게 해주기
const router = require("./routes/route"); // route path 를 담습니다.
app.use("/", router); // midleware = use

module.exports = app;




