const express = require("express");
const cron = require("node-cron");
const { runService, getStatus, getHistory } = require("./service");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/status", (req, res) => {
  res.json(getStatus());
});

app.get("/history", (req, res) => {
  res.json(getHistory());
});

cron.schedule("*/5 * * * *", () => {
  runService();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
