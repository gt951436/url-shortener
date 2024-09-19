const express = require("express");
const { connectToMongoDB } = require("./connection.js");
const urlRoute = require("./routes/url.routes.js");

const app = express();
const port = 8000;

connectToMongoDB(
  "mongodb+srv://Tgarv:gt-url9568@cluster0.j0itt.mongodb.net/"
).then(() => console.log("MongoDB connected!"));

app.use("/url", urlRoute);
app.listen(port, () => {
  console.log(`Server is listeneing at PORT : ${port}`);
});
