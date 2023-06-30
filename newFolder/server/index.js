import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";;
import userRouter from "./routes/users.js";


const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/users", userRouter);


const CONNECTION_URL = 
"mongodb://127.0.0.1:27017/UserData";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err));
