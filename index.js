const express = require("express");
const { connectToMongoDB } = require("./connection");
const urlRoute = require("./routes/url.routes");
const URL = require("./models/url.models");

const app = express();
const PORT = 8001;

connectToMongoDB(
  "mongodb+srv://Tgarv:gt-url9568@cluster0.j0itt.mongodb.net/"
).then(() => console.log("MongoDB connected!"));

app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true } // Ensure the updated document is returned
  );

  if (!entry) {
    return res.status(404).send("Short URL not found");
  }

  res.redirect(entry.redirectedURL);
});

app.listen(PORT, () => {
  console.log(`Server is listeneing at PORT : ${PORT}`);
});
