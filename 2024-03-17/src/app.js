import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
dotenv.config();
import userRouter from "./routers/userRoutes.js";
import todoRouter from "./routers/todoRoutes.js";
import mongoose from "mongoose";
import cors from "cors";

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));

// database connetc confing
const db = process.env.MongoURL;

mongoose
  .connect(db)
  .then(console.log("DB connected..."))
  .catch((err) => {
    console.log(err);
  });

app.use("/users", userRouter);
app.use("/todos", todoRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT:${PORT}`);
});
