const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const post = require('../models/post')

const db  = "mongodb://ronnie173:dannyh0174@ds139879.mlab.com:39879/codepost"

mongoose.Promise = global.Promise;
mongoose.connect(db,function (err) {
  if(err){
    console.log('Connection Log')
  }
})

router.get('/posts',function (req,res) {
  console.log('Requesting Posts')
  post.find({})
    .exec(function (err,posts) {
      if(err){
        console.log('Error getting the post')
      }else {
        res.json(posts)
        console.log(posts)
      }
    })
})

module.exports = router
