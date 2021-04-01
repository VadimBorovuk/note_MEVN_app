const PostModel = require('../modules/Post')

class PostController {
    async fetchAllPost(req, res) {
        try {
            const posts = await PostModel.find()
            res.status(200).json(posts)
        } catch (e) {
            res.status(404).json({error: e})
        }
    }

    async fetchIdPost(req, res) {
        try {
            res.status(200).json({message: "fetchIdProduct"})
        } catch (e) {
            res.status(404).json({error: e})
        }
    }

    async createPost(req, res) {
        try {
            const {title, description} = req.body
            const post = await PostModel.create({title, description})
            res.status(200).json(post)
        } catch (e) {
            res.status(404).json({error: e})
        }
    }

    async updatePost(req, res) {
        try {
            res.status(200).json({message: "fetchIdProduct"})
        } catch (e) {
            res.status(404).json({error: e})
        }
    }

    async deletePost(req, res) {
        try {
            res.status(200).json({message: "fetchIdProduct"})
        } catch (e) {
            res.status(404).json({error: e})
        }
    }
}

module.exports = new PostController();