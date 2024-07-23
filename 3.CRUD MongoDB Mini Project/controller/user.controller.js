const user = require("../model/user.model");

// insert
exports.insertData = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      fullname,
      phonenumber,
      city,
      state,
      zipcode,
      country,
    } = req.body;

    const userData = new user({
      userName: username,
      email: email,
      password: password,
      fullName: fullname,
      phoneNumber: phonenumber,
      address: {
        city: city,
        state: state,
        zipCode: zipcode,
        country: country,
      },
    });

    const data = await userData.save();

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
    const data = await user.findById({ _id: req.params.id });

    if (data) {
      const {
        username,
        email,
        password,
        fullname,
        phonenumber,
        city,
        state,
        zipcode,
        country,
      } = req.body;

      const result = await user.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            userName: username,
            email: email,
            password: password,
            fullName: fullname,
            phoneNumber: phonenumber,
            address: {
              city: city,
              state: state,
              zipCode: zipcode,
              country: country,
            },
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
    const data = await user.findById({ _id: req.params.id });

    if (data) {
      await user.findByIdAndDelete({ _id: req.params.id });

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
    const data = await user.find();

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

// view by Email
exports.viewByEmail = async (req, res) => {
  try {
    const data = await user.find({ email: req.body.email });

    if (data) {
      res.status(200).json({
        status: 200,
        message: "view successfully....",
        data: data,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Data not found...",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      message: "something went wrong....",
    });
  }
};

// view by state
exports.viewByState = async (req, res) => {
  try {
    const data = await user.find({ "address.state": req.params.state });
    if (data) {
      res.status(200).json({
        status: 200,
        message: "view successfully....",
        data: data,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Data not found...",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      message: "something went wrong....",
    });
  }
};
