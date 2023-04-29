"use strict";
//module
const express = require("express");
const router = express.Router();
const controller = require("./controller");

//router 
router.get("/",controller.output.root);
router.get("/login",controller.output.login);
router.get("/register",controller.output.register);

router.post("/login",controller.process.login);
router.post("/register",controller.process.register);



//exports
module.exports = router;