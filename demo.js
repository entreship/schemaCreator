const mongoose = require('mongoose')
    let adminSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        add: String,
        call: Number,
        sub: Boolean
    })
    const Post = mongoose.model("Post", postSchema);
    module.exports = Post;