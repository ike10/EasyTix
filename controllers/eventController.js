const event = require('../models/eventModel')
const mongoose = require('mongoose')
// Create An event
exports.CREATE_EVENT = (req, res, next) =>{
    const name = req.body.name
    const description = req.body.description
    const creator = req.body.creator
    const location = req.body.location
    const image_url = req.body.image_url
    const date = req.body.date

    const new_event = new event({
        name : name,
        description: description,
        creator:  creator,
        location: location,
        image_url: image_url,
        date: date,
    })

    new_event.save()
        .then(()=> res.json('event creaated successfully'))
        .catch(error => res.status(400).json('error creating event' + error) )
}
// Get All events
exports.GET_ALL_EVENT = (req, res, next) => {
    event.find()
        .then(events => res.json(events))
        .catch(error => res.status(400).json('error finding all events'+ error))
}
// Get A Single event
exports.GET_EVENT = (req, res, next) => {
    event.findById(req.params.id)
        .then(event => res.json(event))
        .catch(error => res.status(400).json('error finding event' + error))
}
// Update a Single event
exports.UPDATE_EVENT = (req, res, next) => {
    event.findById(req.params.id)
        .then( event =>{
            const name = req.body.name
            const description = req.body.description
            const creator = req.body.creator
            const location = req.body.location
            const image_url = req.body.image_url
            const date = req.body.date

            event.save()
                .then(()=> res.json('event updated'))
                .catch(error => res.status(400).json('error updating' + error))
        })
}
// Delete a Single Event
exports.DELETE_EVENT = (req, res, next) => {
    event.findByIdAndDelete(req.params.id)
        .then(event => res.json(event))
        .catch(error => res.status(400).json("error deleting" + error))
}