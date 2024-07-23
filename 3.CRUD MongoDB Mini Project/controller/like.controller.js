const like = require("../model/like.model");
const product = require("../model/product.model");
const user = require("../model/user.model");

// insert
exports.insertData = async (req, res) => {
  try {
    const { userid, productid } = req.body;

    let getProduct = await product.findOne({ _id: productid });
    let getUser = await user.findOne({ _id: userid });

    if (!getUser || !getProduct) {
      res.status(404).json({
        status: 404,
        message: "Data Not Found",
      });
    }

    let findLikeData = await like.findOne({
      userId: userid,
      productId: productid,
    });

    if (findLikeData) {
      // like remove
      await product.findOneAndUpdate(
        { _id: productid },
        {
          $set: {
            like: getProduct.like - 1,
          },
        }
      );

      await like.findOneAndDelete({ _id: findLinkData._id });

      res.status(200).json({
        status: 200,
        message: "Product Dislike Successfully",
      });
    } else {
      // add like
      await product.findOneAndUpdate(
        { _id: productid },
        {
          $set: {
            like: getProduct.like + 1,
          },
        }
      );

      const likeData = new like({
        userId: userid,
        productId: productid,
      });

      await likeData.save();

      res.status(200).json({
        status: 200,
        message: "Product Like Successfully",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "something went wrong....",
    });
  }
};
