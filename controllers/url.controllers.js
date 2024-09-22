const shortid = require("shortid");
const URL = require("../models/url.models");

async function handleGenerateNewShortURL(req, res) {
  if (!req.body.url) return res.status(400).json({ error: "url is required" });
  const short_ID = shortid.generate();

  await URL.create({
    shortId: short_ID,
    redirectedURL: req.body.url,
    visitHistory: [],
  });
  return res.json({ generatedShortID: short_ID });
  // try {
  //   const { url } = req.body;
  //   console.log('Request body:', req.body);

  //   // Check if URL is provided
  //   if (!url) {
  //     return res.status(400).json({ error: 'URL is required!' });
  //   }

  //   // Generate a short ID
  //   const shortID = shortid.generate();
  //   console.log('Generated Short ID:', shortID);

  //   // Create the URL document in the database
  //   const newURL = await URL.create({
  //     shortId: shortID,              // Match the schema field name
  //     redirectedURL: url,            // Match the schema field name
  //     visits: [],
  //   });

  //   console.log('Created URL:', newURL);

  //   // Return the short ID as the response
  //   return res.status(201).json({ id: shortID });

  // } catch (error) {
  //   console.error('Error occurred while generating short URL:', error);
  //   return res.status(500).json({ error: 'Internal Server Error' });
  // }
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
};
