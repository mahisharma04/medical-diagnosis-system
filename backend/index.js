import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from './routes.js';
import cors from 'cors';


const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/api', routes);  // Add the routes to handle `/api` endpoints

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
  console.log("Database connected successfully.");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => console.log(error));
