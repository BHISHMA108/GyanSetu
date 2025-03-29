const fs = require("fs");
const path = require("path");

const SONGS_FOLDER = path.join(__dirname, "../songs");

// Fetch list of songs
const fetchSongs = () => {
    const files = fs.readdirSync(SONGS_FOLDER);
    return files
        .filter(file => file.endsWith(".mp3"))
        .map((file, index) => ({
            id: index + 1,
            name: file,
            url: `http://localhost:5000/api/play/${file}`
        }));
};

// Get song stream
const getSongStream = (songName) => {
    const songPath = path.join(SONGS_FOLDER, songName);
    if (!fs.existsSync(songPath)) {
        throw new Error("File not found");
    }
    return fs.createReadStream(songPath);
};

module.exports = { fetchSongs, getSongStream };
