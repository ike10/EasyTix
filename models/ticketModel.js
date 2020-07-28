const mongoose = require('mongoose')


const ticketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    created_by:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }]
    ,
    created_at: {
        type: Date,
    },
    image_url: {
        type: String,
    },
    event: 
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'event'
        }]
    ,

})

const ticket = mongoose.model('ticket', ticketSchema);

module.exports = ticket