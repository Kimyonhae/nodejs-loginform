"use strict";
const app = require("../index");
const PORT = 3000;

//server start
app.listen(PORT,() => {
    console.log(`SERVER ON Connecting!! PORT : ${PORT}`);
});
