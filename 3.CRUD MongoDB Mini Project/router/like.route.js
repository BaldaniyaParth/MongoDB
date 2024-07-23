const route = require("express").Router();

const {
    insertData
} = require("../controller/like.controller");

route.post("/addDelete", insertData);

module.exports = route;