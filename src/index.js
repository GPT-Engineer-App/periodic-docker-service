import express from "express";
import cron from "node-cron";
import { runService, getStatus, getHistory } from "./service.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/status", (req, res) => {
  res.json(getStatus());
});

app.get("/history", (req, res) => {
  res.json(getHistory());
});

runService();

cron.schedule("*/5 * * * *", () => {
  runService();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
