const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const chalisaRoutes = require("./routes/chalisaRoutes.js");
const podcastRoutes = require("./routes/podcastRoutes.js");
const songRoutes = require("./routes/songRoutes.js");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // Required to parse JSON body
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5173" }));

// Use defined routes
app.use("/api", chalisaRoutes);
// Serve static files from the React app
app.use("/podcasts", express.static(path.join(__dirname, "podcasts")));
// Routes
app.use("/api", podcastRoutes);
app.use("/api", songRoutes);




module.exports = app;
