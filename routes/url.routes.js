const express = require("express");
const {} = require("../controllers");
const { handleGenerateNewShortURL } = require("../controllers/url.controllers");
const router = express.Router();

router.post("/", handleGenerateNewShortURL);

models.exports = mewinf