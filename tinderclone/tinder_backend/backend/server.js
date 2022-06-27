import express from "express";
import mongoose from "mongoose";
import PostMessage from "./dbSchema.js";
import cors from "cors";

// express configuration...........................
const app = express();
const port = process.env.PORT || 5000;

// Middlewares.......
app.use(express.json());
// Especially Headers Middle Wares....
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://marudhu:marudhu123@cluster0.fxt3s.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, {
  useUnifiedTopology: true,
});

app.get("/", (req, res) =>
  res
    .status(200)
    .send(
      "Hello Guyzz Building Tinder Clone Starting Stage Don't Worry Quickly Getting Soon Full Fledged Functions and Features....."
    )
);

// posting method...............
app.post("/tinder/cards", async (req, res) => {
  const dbCard = await req.body;
  console.log(dbCard);
  PostMessage.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// getting method. all function inside of backend service fucntions. front end only getting values.. nothing to do else front end..please remember these tips.
app.get("/tinder/cards", async (req, res) => {
  await PostMessage.find({}, (err, data) => {
    if (err) {
      res.status(500).send(data);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`listening On Port Number : ${port}`));
