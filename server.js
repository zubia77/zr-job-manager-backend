import express from 'express';
import { JobSource } from './models/JobSource.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URI = 'mongodb://localhost/zr-job-manager';

mongoose.connect(MONGODB_URI, (err) => {
    if (err) {
        console.log({
            error: "Cannot connect to MongoDB database.",
            err: `"${err}"`
        });
    }
});
 
const app = express();
const port = process.env.PORT || 3044;
 
app.get('/', (req, res) => {
    res.send('<h1>ZR Job Manager API</h1>');
});
 
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});