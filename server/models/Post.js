class Post {
    constructor(id, userId, userName, content) {
        this.id = id;
        this.userId = userId;
        this.userName = userName;
        this.content = content;
        this.likes = 0;
        this.comments = [];
    }
}

module.exports = Post;