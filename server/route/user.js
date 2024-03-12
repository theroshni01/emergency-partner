const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("../Model/User")
const HelperModel = require("../Model/Helper");
const AdminModel =require("../Model/Admin");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Sahayak1")

const router = express.Router();
router.use(express.json())

//User Login

router.post("/userlogin", async (req, res) => {
  const  {email, password} = req.body;
  // const  password = req.body.password;
  const users = await UserModel.findOne({ email}).select({email,password});

  if (!users) {
    return res
      .status(400)
      .json({ message: "email or password is incorrect"  });
  }
 
  const token = jwt.sign({ id: users._id }, "secret");
  res.json({ token, userID: users._id });
});

//helper Login

router.post("/helperlogin", async (req, res) => {
  const  {email, password } = req.body;
  // const  password = req.body.password;

  const helpers = await HelperModel.findOne({ email}).select({email,password});

  if (!helpers) {
    return res
      .status(400)
      .json({ message: "Email or password is incorrect" });
  }

  const token = jwt.sign({ id: helpers._id }, "secret");
  res.json({ token, userID: helpers._id });
});

module.exports = router;