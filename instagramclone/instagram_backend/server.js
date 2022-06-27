import express from "express";
import cors from "cors";
import Pusher from "pusher";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dbModel from "./dbschema.js";

//appconfig
const app = express();

const port = process.env.PORT || 8000;

//middlewares

app.use(express.json());
app.use(cors());

//db config

mongoose.connect(
  "mongodb+srv://marudhu:marudhu123@cluster0.zmrv1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.once("once", () => {
  console.log("dbConnected");
});

//app routes

app.get("/", (req, res) => {
  res.status(200).send("Marudhu Crated By Instagram Clones.....");
});

app.get("/upload", (req, res) => {
  dbModel.find((err, data) => {});
});

// post routes to database

app.post("/upload", (req, res) => {
  const body = req.body;

  dbModel.create(body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//applisten

app.listen(port, () => {
  console.log(`PORT IS RUNNING ON : ${port} `);
});
