const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./router/user.route");
const productRoute = require("./router/product.route");
const likeRoute = require("./router/like.route");
const cors = require("cors");
require("./db/connect");

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/like", likeRoute);


app.listen(port, () => {
  console.log("Successfully connected");
});
