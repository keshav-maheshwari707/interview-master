const express = require('express');
const authRouter = require('./routes/auth.routes');
const cookieParser = require('cookie-parser');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());
app.use('/api/auth', authRouter);

module.exports = app;