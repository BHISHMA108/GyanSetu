const express = require("express");
const { getSongs, streamSong } = require("../controllers/songController");

const router = express.Router();

// Routes
router.get("/songs", getSongs);
router.get("/play/:song", streamSong);

module.exports = router;