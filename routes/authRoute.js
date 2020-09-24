const express = require('express')
const authController = require('../controllers/authController')
const {body } = require('express-validator')
const user = require('../models/userModel')
const passport = require('passport')
const router = express.Router()

// Sign up
router.post('/signup', authController.POST_SIGNUP)

    // , [
    //     body('email')
    //         .isEmail()
    //         .withMessage('Please enter valid email')
    //         .custom((value, { req }) => {
    //             return user.findOne({ email: value }).then(userDoc => {
    //                 return Promise.reject('Email address already exists')
    //             })
    //         })
    //         .normalizeEmail(),
    //     body('password')
    //         .trim()
    //         .isLength({ min: 8 }),

    // ]

// Sign In
router.post('/signin', authController.POST_SIGNIN)

// Sign in with google
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/signin'}), 
    function(req, res){
        res.redirect('/signin')
    }
)

module.exports = router
 