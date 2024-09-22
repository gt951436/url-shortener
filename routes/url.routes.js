const express = require("express");
const { handleGenerateNewShortURL } = require("../controllers/url.controllers");
const { handleGetAnalytics } = require("../controllers/url.controllers");
const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
