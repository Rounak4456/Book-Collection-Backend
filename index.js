import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, MONGO_URL } from './config.js';
import bookRoute from './router/bookRoute.js';

const app = express();

// Apply CORS middleware
app.use(cors());

app.use(express.json());
app.use('/books', bookRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
});

async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/book-store");
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Could not connect to MongoDB', error);
    }
}

connectDB();

app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}`);
});
