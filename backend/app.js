import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/database.js";
import expansesRouter from "./routes/epanses.routes.js";
import cors from "cors";
const app = express();

dotenv.config();
connectDB();


const PORT = process.env.PORT;

app.use(cors({
  origin:"http://localhost:5173",
  credential:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/expanses" ,expansesRouter);

app.listen(PORT,()=>{
  console.log(`Server is running at port ${PORT}`);
})
