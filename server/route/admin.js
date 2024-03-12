const express = require("express");
const jwt = require("jsonwebtoken");
const AdminModel = require("../Model/Admin");

const router = express.Router();

//Admin Registration

router.post("/adminregisteration", async (req, res) => {
  const { username, password } = req.body;
  const users = await AdminModel.findOne({ username });
  if (users) {
    return res.status(400).json({ message: "Username already exists" });
  }
  
  const newAdmin = new AdminModel({ username, password });
  await newAdmin.save();
  res.json({ message: "User registered successfully" });
});

//Admin Login

router.post("/adminlogin", async (req, res) => {
  const { username, password } = req.body;

  const admins = await AdminModel.findOne({ username });

  if (!admins) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  
  const token = jwt.sign({ id: admins._id }, "secret");
  res.json({ token, adminID: admins._id });
});

module.exports = router;