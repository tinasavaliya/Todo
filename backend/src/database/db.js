import mongoose from "mongoose";

export const connectDB = async (mongoURL) => {
    try {
        await mongoose.connect(mongoURL);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
}
