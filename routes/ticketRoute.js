const express = require('express')
const ticketController = require('../controllers/ticketController')

const router = express.Router()

// create ticket
router.post('/', ticketController.CREATE_TICKET)

// get all tickets
router.get('/', ticketController.GET_ALL_TICKET )
// get a single ticket
router.get('/:id', ticketController.GET_TICKET)

// update ticket
router.put('/:id', ticketController.UPDATE_TICKET)

// delete a single ticket
router.delete('/:id', ticketController.DELETE_TICKET)

module.exports = router