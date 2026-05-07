const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let items = ["Learn Docker", "Build images", "Run containers"];

app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  const { item } = req.body;
  if (!item) return res.status(400).json({ error: "item is required" });
  items.push(item);
  res.status(201).json({ item });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
