const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const indexRouter = require('./routes/index');
const profileRouter = require('./routes/profile');
const candidateRouter = require('./routes/candidate');
const messageRouter = require('./routes/message');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', profileRouter);
app.use('/api', candidateRouter);
app.use('/api', messageRouter);
// app.use("/api",(req,res)=>{
//     console.log("this a test ");
// });

module.exports = app;