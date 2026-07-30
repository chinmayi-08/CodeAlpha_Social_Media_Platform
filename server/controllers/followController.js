let follows = [];

const followUser = (req, res) => {

    const { follower, following } = req.body;

    follows.push({
        follower,
        following
    });

    res.json({
        message: "User Followed Successfully",
        follows
    });
};

module.exports = {
    followUser
};