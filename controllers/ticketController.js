const ticket = require('../models/ticketModel')

// Create An event
exports.CREATE_TICKET = (req, res, next) => {
    const name = req.body.name
    const description = req.body.description
    const price = req.body.price
    const event = req.body.event

    const new_ticket = new ticket({
        name: name,
        description: description,
        price: price,
        event: event
    })

    new_ticket.save()
        .then(() => res.json('Ticket Created'))
        .catch(error => res.status(400).json('error creating ticket' + error))
}

// Get All events
exports.GET_ALL_TICKET = (req, res, next) => {
    ticket.find()
        .then(tickets => res.json(tickets))
        .catch(error => res.status(400).json("error finding tickets" + error))
}
// Get A Single event
exports.GET_TICKET = (req, res, next) => {
    ticket.findById()
        .then(ticket => res.json(ticket))
        .catch(error => res.status(400).json('error getting ticket' + error))
}
// Update a Single event
exports.UPDATE_TICKET = (req, res, next) => {
    ticket.findById(req.params.id)
        .then( ticket => {
            const name = req.body.name
            const description = req.body.description
            const price = req.body.price
            const event = req.body.event

            ticket.save()
                .then(() => res.json('ticket updated'))
                .catch(error => res.status(400).json('error updating ticket' + error))
        }
            
        )
        .catch(error => res.status(400).json('error finding ticket to update' + error))
}
// Delete a Single Event
exports.DELETE_TICKET = (req, res, next) => {
    ticket.findByIdAndDelete(req.params.id)
        .then(ticket => res.json(user))
        .catch(ticket => res.status(400).json('error deleting ticket' + error))

}