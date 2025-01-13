import express from 'express';
export const userRouter=express.Router();
import { body } from 'express-validator';
import { registerUser,loginUser} from '../controllers/user.controller.js';

userRouter.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleast 3 characters long '),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long')
],registerUser);


userRouter.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long')
], loginUser)