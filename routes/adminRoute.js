const express = require('express')
const router = express.Router()

// create admin
router.post('/', (req, res) => {

})

// get all admins
router.get('/', (req, res) => {
    res.send('<h2>admin created</h2>')
})
// get a single admin
router.get('/:id', (req, res) => {
    res.send('<h2>admin created</h2>')
})

// update admin
router.put('/:id', (req, res) => {

})

// delete a single admin
router.delete('/:id', (req, res) => {

})

module.exports = router