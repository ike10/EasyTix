const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')


// create user
router.post('/', userController.CREATE_USER)

// get all users
router.get('/', userController.GET_ALL_USERS)
// get a single user
router.get('/:id', userController.GET_USER)

// update user
router.put('/:id', userController.UPDATE_USER)

// delete a single user
router.delete('/:id', userController.DELETE_USER)

module.exports = router
