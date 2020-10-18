const express = require('express')

const posts = require('../usecases/posts')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allPosts = await posts.getAllPosts()

    response.json({
      success: true,
      message: 'all posts',
      data: {
        posts: allPosts
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const getPost = await posts.getPostById(id)

    response.json({
      success: true,
      message: 'post found',
      data: {
        posts: getPost
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const {
      cover,
      title,
      summary,
      user,
      section,
      date,
      time,
      popular,
      ranking,
      editorPick,
      mediumLink
    } = request.body

    // if (!cover) throw new Error('cover is required')
    // if (!title) throw new Error('title is required')
    // if (!summary) throw new Error('summary is required')
    // if (!user) throw new Error('user is required')
    // if (!section) throw new Error('section is required')
    // if (!date) throw new Error('date is required')
    // if (!time) throw new Error('time is required')
    // if (popular == null) throw new Error('popular is required')
    // if (!ranking) throw new Error('ranking is required')
    // if (editorPick == null) throw new Error('editorPick is required')
    // if (!mediumLink) throw new Error('mediumLink is required')

    const newPost = await posts.createPost({
      cover,
      title,
      summary,
      user,
      section,
      date,
      time,
      popular,
      ranking,
      editorPick,
      mediumLink
    })

    response.json({
      success: true,
      message: 'post created',
      data: {
        posts: newPost
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const deletedPost = await posts.deletePostById(id)

    response.json({
      success: true,
      message: 'post deleted',
      data: {
        posts: deletedPost
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const newPostData = request.body

    const updatePost = await posts.updatePostById(id, newPostData)

    response.json({
      success: true,
      message: 'post updated',
      data: {
        posts: updatePost
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router

// cover,
// title,
// summary,
// user,
// section,
// date,
// time,
// popular,
// ranking,
// editorPick,
// mediumLink,
