const { generatePodcastScript } = require("../services/podcastService");

exports.generatePodcast = async (req, res) => {
    const { topic } = req.body;

    if (!topic) return res.status(400).json({ error: "Topic is required" });

    try {
        const script = await generatePodcastScript(topic);
        if (!script) return res.status(500).json({ error: "Failed to generate script" });

        // const audioPath = await generatePodcastAudio(script, topic);
        // if (!audioPath) return res.status(500).json({ error: "Failed to generate audio" });

        res.json({ 
            message: "Podcast generated successfully", 
            script, 
            // audioPath: `/podcasts/${audioPath.split('/').pop()}`
        });

    } catch (error) {
        console.error("Error in podcast generation:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
