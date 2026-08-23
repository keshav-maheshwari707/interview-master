const express = require('express');
const authController = require('../controllers/auth.controller');

const authRouter = express.Router();

/**
 * @route POST /api/auth/register
 * @descripion Register a new user
 * @access Public
 */

authRouter.post('/register', authController.registerUserController);

/**
 * @route POST /api/auth/login
 * @descripion Login an existing user
 * @access Public
 */

authRouter.post('/login', authController.loginUserController);

/**
 * @route GET /api/auth/logout
 * @descripion Logout the current user
 * @access Public
 */

authRouter.get('/logout', authController.logoutUserController);

module.exports = authRouter;