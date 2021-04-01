const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController');

router.get('/', PostController.fetchAllPost)
router.get('/:id', PostController.fetchIdPost)
router.post('/', PostController.createPost)
router.put('/:id', PostController.updatePost)
router.delete('/:id', PostController.deletePost)

module.exports = router