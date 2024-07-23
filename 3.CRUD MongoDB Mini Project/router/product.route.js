const route = require("express").Router();

const {
  insertData,
  updateData,
  deleteData,
  viewData,
  viewById,
} = require("../controller/product.cntroller");

route.post("/add", insertData);
route.put("/update/:id", updateData);
route.delete("/delete/:id", deleteData);
route.get("/view", viewData);
route.get("/view/:id", viewById);

module.exports = route;
