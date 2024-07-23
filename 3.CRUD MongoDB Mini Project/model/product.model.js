const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productId: {
    type: String,
  },
  productName: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: String,
  },
  stockQuantity: {
    type: Number,
  },
  like: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("product", productSchema);
