const express = require("express");
const { registerUser, LoginUser } = require("../controllers/Authcontrollers");
const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", LoginUser);

module.exports = router;
