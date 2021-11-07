const Post = require("../models/Post");
const User = require("../models/User");

exports.createPost = async (req, res, next) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json("Post Saved!");
    } catch(err) {
        res.status(500).json({"Error saving Post:": err.message});
    }
}

exports.updatePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await Post.updateOne({$set: req.body});
            res.status(200).json("Post updated!");
        } else {
            res.status(403).json("You can update only your post")
        }

    } catch(err) {
        res.status(500).json({"Error updating the post": err});
    }
    
}

exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await Post.deleteOne();
            res.status(200).json("Post Deleted!");
        } else {
            res.status(403).json("You can update only your post")
        }

    } catch(err) {
        res.status(500).json({"Error deleting Post": err.message})
    }
}

exports.likeDislikePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) { //like post if not already liked post
            await post.updateOne({$push:{likes: req.body.userId}});
            res.status(200).json("Post Liked");
        } else { //dislike if already liked post
            await post.updateOne({$pull:{likes: req.body.userId}});
            res.status(200).json("Post Disliked");
        }
    } catch(err) {
        res.status(500).json({"Error Liking Post": err.message})
    }
}

exports.getPost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json({"Error getting post": err});
    }
}

exports.getTimeline = async (req, res, next) => {
    try {
        const me = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId: me._id});
        const friendPosts = await Promise.all(
            me.following.map((friendId) => {
                return Post.find({userId: friendId});
            })
        );
        res.json(userPosts.concat(...friendPosts));
    } catch(err) {
        res.status(500).json({"Error getting timeline:": err.message});
    }
}