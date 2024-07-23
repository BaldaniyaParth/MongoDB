const route = require("express").Router();

const {
  insertData,
  updateData,
  deleteData,
  viewData,
  viewByEmail,
  viewByState,
} = require("../controller/user.controller");

route.post("/add", insertData);
route.put("/update/:id", updateData);
route.delete("/delete/:id", deleteData);
route.get("/view", viewData);
route.get("/viewByEmail", viewByEmail);
route.get("/viewByState/:state", viewByState);

module.exports = route;
