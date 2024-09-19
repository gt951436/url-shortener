const express = require("express");
const { handleGenerateNewShortURL } = require("../controllers/url.controllers.js");
const router = express.Router();

router.post("/", handleGenerateNewShortURL);

module.exports = router;