const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors')
const express= require('express');
const app=express();
const connectToDb=require('./db/db');
const userRoutes=require('./routes/user.routes');
const captainRoutes=require('./routes/captain.routes');
const { cookie } = require('express-validator');
const cookieParser=require('cookie-parser');
const mapRoutes=require('./routes/maps.routes');
const rideRoutes=require('./routes/rides.routes');


connectToDb();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send('Hello world');
});
app.use('/users',userRoutes);
app.use('/captains',captainRoutes);
app.use('/maps',mapRoutes);
app.use('/rides',rideRoutes);

module.exports=app;
