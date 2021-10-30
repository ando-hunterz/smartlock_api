const express = require('express')
const router = express.Router()
const adminHandler = require('../middleware/adminHandler')
const currentUserHandler = require('../middleware/currentUserHandler')

const { 
    getAllBooking,
    getSpecificBooking,
    createNewBooking,
    editBooking,
    editStatusBooking
} = require('../controllers/booking')

const jwtHandler = require('../middleware/jwtHandler')
router.use(jwtHandler)

// Get All Booking
router.get('/',  getAllBooking)

// Post Booking
router.post('/', createNewBooking)

// Get Specific Booking ID
router.get('/:id', getSpecificBooking)

// Edit Specific Booking ID
router.put('/:id', editBooking)

// Approve/Edit Booking
router.patch('/:id', adminHandler, editStatusBooking)

module.exports = router