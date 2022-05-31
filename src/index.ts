import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { getWishes, createWish } from "./service/wish-list.service";

config();
const app = express();
app.use(express.json());
app.use(cors());
app.post("/", async (req, res) => {
  try {
    await createWish(req.body);
    res.send(200);
  } catch (e) {
    res.status(400).send({
      message: "Wish is not Possible",
    });
  }
});
app.get("/", async (req, res) => {
  const wishes = await getWishes();
  res.send(wishes);
});
app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
