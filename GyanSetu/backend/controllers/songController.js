const { fetchSongs, getSongStream } = require("../services/songService");

// Get all songs
const getSongs = (req, res) => {
    try {
        const songs = fetchSongs();
        res.json(songs);
    } catch (error) {
        res.status(500).json({ error: "Failed to load songs" });
    }
};

// Stream a specific song
const streamSong = (req, res) => {
    const songName = req.params.song;
    try {
        const stream = getSongStream(songName);
        res.setHeader("Content-Type", "audio/mpeg");
        stream.pipe(res);
    } catch (error) {
        res.status(404).json({ error: "Song not found" });
    }
};

module.exports = { getSongs, streamSong };
