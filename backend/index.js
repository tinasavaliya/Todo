import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/database/db.js";
import todoRoutes from './src/routes/todo.routes.js';

dotenv.config();
const app = express();

connectDB(process.env.MONGO_URI);

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => { 
  res.send('Hey, Walcome to Todo server');
});

app.use('/api/v1/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

