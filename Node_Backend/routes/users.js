const express = require("express");
const router = express.Router()

//importing controllers
const usersController = require("../controllers/users_controller");

//---------------------------------------------------------------------------------
//delete user
router.delete("/delete/:id", usersController.deleteUser);
//update user
router.put("/update/:id", usersController.updateUser);
//get a user
router.get("/view/:id", usersController.getUser);
//follow a user
router.put("/follow/:id", usersController.followUser);
//unfollow a user
router.put("/unfollow/:id", usersController.unfollowUser);

//Dummy route --> get the users Homepage
//router.get('/', usersController.getUserHome);
//----------------------------------------------------------------------------------

module.exports = router;