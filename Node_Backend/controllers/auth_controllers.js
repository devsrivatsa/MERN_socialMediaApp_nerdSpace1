const UserModel = require("../models/User");
const bcrypt = require('bcrypt');

exports.getAuthPage = (req, res, next) => {
    res.send("<H1>This is the auth page</h1>");
}

exports.regsterUser = async (req, res, next) => {
    try {
        //get password from frontend and hash it
        const salt = await bcrypt.genSalt(11);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        //create User Object with hashed password
        const user = await new UserModel({
            username: req.body.username,
            email: req.body.username,
            password: hashedPassword
        });

        //save user
        user.save();
        res.status(200).send("ok");
    } 
    catch(err) {
        res.status(404).send("Some error in saving user:\n", err);
    }
}

exports.getLoginPage = async (req, res, next) => {
    try {
        await res.send("<h1>This is the login page</h1>");
    } 
    catch(err) {
        res.status(500).send("<h1>Error in Logging in User:</h1><br>", err);
    }    
}

exports.loginUser = async (req, res, next) => {
    try {
        const user = await UserModel.findOne({email:req.body.username});
        if (!user) {
            res.status(404).json("User Not Found");
        }
        const validPassword  = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            res.status(400).json("Wrong Password!");
        } else {
            res.status(200).json("Welcome to Heaven...");
        }
    }
    catch(err) {
        res.status(500).send("<h1>Error in Logging in User:</h1><br>", err);
    }
}