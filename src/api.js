const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello World"
  });
});

router.get("/hi/:name", (req, res) => {
  res.json({
    message: `Hi! ${req.params.name}`
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
