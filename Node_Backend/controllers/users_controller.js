const bcrypt = require('bcrypt');
const UserModel = require("../models/User");

exports.getUserHome = (req, res, next) => {
    res.send("<h1>This is the users homepage!</h1>");
}

exports.updateUser = async (req, res, next) => {
    if (req.body.userId === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(11)
                const hashedPassword = await bcrypt.hash(req.body.password, salt);
            } catch(err) {
                return res.status(404).json(err);
            }
        }

        try {
            const user = await UserModel.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account Has Been Updated");

        } catch(err) {
            return res.status(404).json("Error in Updating Account: \n", err);    
        }
    } else {
        return res.status(403).json("You cannot Access other accounts!", err);
    }
}


exports.deleteUser = async (req, res, next) => {
    if  (req.body.userId === req.params.id) {
        try {
            const user = await UserModel.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted successfully");

        } catch(err) {
            return res.status(404).json("Unable to delete user account this time:\n", err)
        }
    } else {
        return res.status(403).json("You can only delete your account!")
    }
}


exports.getUser = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.params.id)
        const {_id, password, updatedAt, isAdmin, ...other} = user._doc
        res.status(200).json(other);
    } catch(err) {
        res.status(500).json("Eror in getting User:\n", err)
    }
}

exports.followUser = async (req, res, next) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await UserModel.findById(req.params.id);
            const me = await UserModel.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)) {
                ///update the user's followers list
                await user.updateOne(
                    { $push : { followers: req.body.userId } }
                )
                ///update the requester's following list
                await me.updateOne(
                    { $push : { following: req.params.id } }
                )
            } else {
                res.status(403).json("You are already following this user!");
            }
        } catch(err) {

        }
    } else {
        res.status(403).json("We know that you are your greatest follower! But now, lets make some new friends!")
    }

    
}