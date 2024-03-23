import mongoose from 'mongoose';

export async function connectDB() {
    const MONGODB_URL = process.env.MONGODB_URL;

    try {
        await mongoose.connect(MONGODB_URL);
        console.log('MongoDB is connected');
    } catch (err) {
        console.error(err);
        throw err;
    }
}