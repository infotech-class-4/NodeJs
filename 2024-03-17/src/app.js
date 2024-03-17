import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
dotenv.config();
import usersRouter from "./routers/routes.js";
import mongoose from "mongoose";

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// database connetc confing
const db = process.env.MongoURL;

mongoose
  .connect(db)
  .then(console.log("DB connected..."))
  .catch((err) => {
    console.log(err);
  });

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT:${PORT}`);
});
