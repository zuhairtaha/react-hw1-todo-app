const express = require('express')
const router = express.Router()

const Category = require("../models/category")
const Task = require("../models/task")

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('test')
})

module.exports = router
