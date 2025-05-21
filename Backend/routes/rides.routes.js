const express=require('express');
const router=express.Router();
const {body,query} = require('express-validator');
const rideController=require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/create',
    authMiddleware.authUser,
    body('pickUp').isString().isLength({ min: 3 }).withMessage('pickUp location is required'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Destination is required'),
    body('vehicleType').isString().isIn(['auto','car', 'motorcycle']).withMessage('Vehicle type is required'),
    rideController.createRide
)

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickUp').isString().isLength({ min: 3 }).withMessage('pickUp location is required'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Destination is required'),
    rideController.getFare
)

module.exports=router;