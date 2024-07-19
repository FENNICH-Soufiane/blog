import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';


const app = express();
dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('MongoDb is connected');
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(3000, () => {
    console.log('Server is runing on port 3000!')
})


app.use(express.json());

app.use('/api/auth', authRoutes);