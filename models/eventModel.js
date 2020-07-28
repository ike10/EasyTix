const mongoose = require('mongoose')


const eventSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location:{
        type:String,
    },
    event_date: {
        type: Date,
    },
    creator: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
    created_at: {
        type: Date,
    },
    image_url: {
        type: String,
    },
    tickets: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'ticket' 
        }
    ]
    

})

const event = mongoose.model('event', eventSchema);

module.exports = event