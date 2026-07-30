const Post = require("../models/Post");

let posts = [];

const createPost = (req, res) => {
    const { userId, userName, content } = req.body;

    const newPost = new Post(
        posts.length + 1,
        userId,
        userName,
        content
    );

    posts.push(newPost);

    res.status(201).json({
        message: "Post Created Successfully",
        post: newPost
    });
};

const getPosts = (req, res) => {
    res.status(200).json(posts);
};

const likePost = (req, res) => {

    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Post Not Found"
        });
    }

    post.likes++;

    res.json({
        message: "Post Liked",
        post
    });
};

module.exports = {
    createPost,
    getPosts,
    likePost
};