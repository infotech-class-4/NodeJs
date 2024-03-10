import express from "express";
import bodyParser from "body-parser";
import userRouters from "./routes/userRoutes.js"

const PORT = 4000;
const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users",userRouters);


app.listen(PORT, () => {
  console.log(` Server ${PORT} portunda calisiyor..`);
});
