const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  cover: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  summary: {
    type: String,
    require: true
  },
  user: {
    type: String,
    require: true
  },
  section: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true
  },
  time: {
    type: Number,
    require: true,
    min: 1
  },
  popular: {
    type: String,
    require: true,
  },
  ranking: {
    type: Number,
    require: true,
    min: 0
  },
  editorPick: {
    type: String,
    require: true,
  },
  mediumLink: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('posts', postSchema)