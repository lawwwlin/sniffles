const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const appointmentRouter = require('./routes/appointment');
//const testRouter = require('./routes/test');

const app = express();

//const db = require("./db")

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/appointments', appointmentRouter)
app.use("/test",(req,res)=>{
    console.log("this a test ");
});
//app.use('/test', testRouter);

module.exports = app;
