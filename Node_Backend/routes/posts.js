const express = require("express");
const router = express.Router();

const postsController = require('../controllers/posts_controller');


router.put("/:id/like-dislike", postsController.likeDislikePost);
router.delete("/:id/delete", postsController.deletePost);
router.put("/:id/update", postsController.updatePost);
router.get("/timeline", postsController.getTimeline);
router.get("/:id", postsController.getPost);
router.post("/", postsController.createPost);

module.exports = router;