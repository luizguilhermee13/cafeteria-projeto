const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", function (request, response) {
  response.sendFile(path.join(__dirname + "/index.js"));
});
