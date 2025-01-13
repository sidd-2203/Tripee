import dotenv from 'dotenv';
dotenv.config();
import express from 'express';   
import cors from 'cors';

export const app=express();
import { connectToDB } from './db/db.js';
import { userRouter } from './routes/user.route.js';

const db=connectToDB();
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('Hello World, Welcome to Tripee, Your one stop solution to Transportation around Bengaluru');
})

app.use('/users',userRouter);
