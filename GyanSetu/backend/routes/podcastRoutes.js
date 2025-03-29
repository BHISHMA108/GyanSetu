const express = require("express");
const { generatePodcast } = require("../controllers/podcastController");

const router = express.Router();

router.post("/generate-podcast", generatePodcast);

module.exports = router;
