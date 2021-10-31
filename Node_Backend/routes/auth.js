const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth_controllers");

//login routes
router.get("/login", authController.getLoginPage);
router.post("/login", authController.loginUser);

//register routes
router.post("/register", authController.regsterUser);
router.get("/", authController.getAuthPage);


module.exports = router;