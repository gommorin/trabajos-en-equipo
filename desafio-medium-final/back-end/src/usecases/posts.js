const Posts = require('../models/posts')

function getAllPosts () {
  return Posts.find()
}

function getPostById (id) {
  return Posts.findById(id)
}

function create (postData) {
  return Posts.create(postData)
}

function deletePostById (id) {
  return Posts.findByIdAndDelete(id)
}

function updatePostById (id, newPostData) {
  return Posts.findByIdAndUpdate(id, newPostData)
}

module.exports = {
  getAllPosts,
  getPostById,
  create,
  deletePostById,
  updatePostById
}
