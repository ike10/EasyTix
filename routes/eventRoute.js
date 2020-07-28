const express = require('express')
const eventController = require('../controllers/eventController')
const router = express.Router()

// create event
router.post('/', eventController.CREATE_EVENT)

// get all events
router.get('/', eventController.GET_ALL_EVENT)

// get a single event
router.get('/:id', eventController.GET_EVENT)

// update event
router.put('/:id', eventController.UPDATE_EVENT)

// delete a single event
router.delete('/:id', eventController.DELETE_EVENT)

module.exports = router
