import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/database.js";
import expansesRouter from "./routes/epanses.routes.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config({
  path: "./db/.env"
});
connectDB();


const PORT = process.env.PORT;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/expanses", expansesRouter);
app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
})
