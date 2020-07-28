const user = require('../models/userModel')

// Create A User
exports.CREATE_USER = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    
    const new_user = new user({
        name: name,
        email: email,
        password: password
    })

    new_user.save()
        .then(() => res.json("user Created"))
        .catch(error => res.status(400).json('error' + error ))
    }
// Get All Users
exports.GET_ALL_USERS = (req, res, next) => {
    user.find()
        .then(users => res.json(users))
        .catch(error => res.status(400).json('error '+ error))
}
// Get A Single User
exports.GET_USER = (req, res, next) => {
    user.findById(req.params.id)
        .then(user => res.json(user))
        .catch(error => res.status(400).json('error' + error))
}
// Update a Single user
exports.UPDATE_USER = (req, res, next) => {
    user.findById(req.params.id)
        .then(user =>{
            const name = req.body.name
            const email = req.body.email
            const password = req.body.password

            user.save()
                .then(() => res.json('user updated'))
                .catch(error => res.status(400).json('error updating user' + error))
        }
        )
        .catch(error => res.status(400).json('error updating' + error))
}
// Delete a Single user
exports.DELETE_USER = (req, res, next) => {
    user.findByIdAndDelete(req.params.id)
        .then(user => res.json(user))
        .catch(error => res.status(400).json('error deleting'+ error))
}