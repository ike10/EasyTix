const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator/check')
const jwt = require('jsonwebtoken')
const user = require('../models/userModel')



exports.POST_SIGNUP = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const error = new Error('Validation Failed')
        error.statusCode = 422
        error.data = errors.array()
        throw error;
    }

    const email = req.body.email
    const password = req.body.password 


    user.findOne({ email: email})

        .then(userResult =>{
            if (userResult){
                return res.json('someone else exists with this record')
            }
            return bcrypt
                .hash(password, 12)
                .then(hashedPassword => {
                    const new_user = new user({
                        email: email,
                        password: hashedPassword,
                    })
                    return new_user.save()
        })
        
        })
    
        .then(result =>{
            res.json('user created' + result)
        })
        .catch(error => res.status(400).json('error creating user' + error))

}

exports.POST_SIGNIN = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password 
    let loadedUser
    user.findOne({email:email}).then(user =>{
        if(!user){
            const error = new Error('A user with this email could not be found')
            error.statusCode= 401
            throw error;
        }
        loadedUser = user
        return bcrypt.compare(password, user.password)
    } )
    .then(isEqual =>{
        if (!isEqual) {
            const error = new Error('wrong password')
            error.statusCode = 401
            throw error
    }

    const token = jwt.sign({
        email: loadedUser.email,
        id: loadedUser._id.toString()
    },
     'SECRET_KEY', 
     {expiresIn: '1h'}
    )
    res.status(200).json({token: token, id: loadedUser._id.toString()})

    })
    .catch(err => {
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    })
}

exports.POST_LOGOUT