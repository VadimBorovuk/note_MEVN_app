const express = require('express');
const router = express.Router();

const routerProduct = require('./routerProducts')

router.use('/posts', routerProduct)

module.exports = router


