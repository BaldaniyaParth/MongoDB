const product = require("../model/product.model");

// insert
exports.insertData = async (req, res) => {
  try {
    const {
      productid,
      productname,
      description,
      category,
      price,
      stockquantity,
      like,
    } = req.body;

    const productData = new product({
      productId: productid,
      productName: productname,
      description: description,
      category: category,
      price: price,
      stockQuantity: stockquantity,
      like: like,
    });

    const data = await productData.save();

    res.status(201).json({
      status: 201,
      message: "Insert Successfully",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "something went wrong....",
    });
  }
};

// update
exports.updateData = async (req, res) => {
  try {
    const data = await product.findById({ _id: req.params.id });

    if (data) {
      const {
        productid,
        productname,
        description,
        category,
        price,
        stockquantity,
        like,
      } = req.body;

      const result = await product.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            productId: productid,
            productName: productname,
            description: description,
            category: category,
            price: price,
            stockQuantity: stockquantity,
            like: like,
          },
        }
      );

      res.status(200).json({
        status: 200,
        message: "update successfully..",
        data: result,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Data not found...",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "something went wrong....",
    });
  }
};

// delete
exports.deleteData = async (req, res) => {
  try {
    const data = await product.findById({ _id: req.params.id });

    if (data) {
      await product.findByIdAndDelete({ _id: req.params.id });

      res.status(200).json({
        status: 200,
        message: "Delete Successfully",
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Data not found...",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "something went wrong....",
    });
  }
};

// view
exports.viewData = async (req, res) => {
  try {
    const data = await product.find();

    res.status(200).json({
      status: 200,
      message: "view successfully....",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "something went wrong....",
    });
  }
};

// view by Id
exports.viewById = async (req, res) => {
  try {
    const data = await product.findById({ _id: req.params.id });

    res.status(200).json({
      status: 200,
      message: "view successfully....",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "something went wrong....",
    });
  }
};
