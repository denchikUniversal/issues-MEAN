import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect();

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection successfully')
})

app.use('/', router);


app.listen(4000, () => console.log('Express server running on port 4000'));