const addComment = (req, res) => {

    const { postId, userName, comment } = req.body;

    res.json({
        message: "Comment Added Successfully",
        data: {
            postId,
            userName,
            comment
        }
    });
};

module.exports = {
    addComment
};