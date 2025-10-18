import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'; 
import cors from 'cors';
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
}
app.get('/', (req, res) => {
  res.send('API is running....');
});
// Connect to MongoDB

mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});