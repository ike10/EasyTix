const express = require('express')
const eventController = require('../controllers/eventController')
const router = express.Router()
const isAuth = require('../middleware/is-auth')

// create event
router.post('/', isAuth, eventController.CREATE_EVENT)

// get all events
router.get('/', eventController.GET_ALL_EVENT)

// get a single event
router.get('/:id', eventController.GET_EVENT)

// update event
router.put('/:id', isAuth, eventController.UPDATE_EVENT)

// delete a single event
router.delete('/:id', isAuth, eventController.DELETE_EVENT)

module.exports = router
