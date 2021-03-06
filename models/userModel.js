const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        trim: true,
    },
        
    created_at: {
        type: Date,
        default: Date.now
    },
    events:    [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'event'
        }]
    ,
    tickets:  [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ticket'
        }]
    ,

})

const user = mongoose.model('user', userSchema);

module.exports = user