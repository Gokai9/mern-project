import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/router.js";

const app = express();
const port = 5000;

app.use(express.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", router);

const URL =
  "mongodb+srv://@sandbox.ydl8y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`run on port ${port}`)))
  .catch((error) => console.log(error.messsage));
