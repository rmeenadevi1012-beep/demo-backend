const express = require("express");
const router = express.Router();
const { register, login 

} = require("../controller/authcontroller");

// Register API -> POST /api/auth/register
router.post("/register", register);

// Login API -> POST /api/auth/login
router.post("/login", login);

module.exports = router;