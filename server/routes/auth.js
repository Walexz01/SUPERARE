const express = require("express");
const { registerUser } = require("../controllers/Authcontrollers");
const router = express.Router();

router.post("/signup", registerUser);

module.exports = router;
