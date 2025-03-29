import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=hindu+spirituality&sortBy=publishedAt&pageSize=6&apiKey=YOUR_API_KEY" // Modified query
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.articles && Array.isArray(data.articles)) {
          setNews(data.articles); // Show all fetched articles
        } else {
          setNews([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setNews([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black-950 text-white py-16 px-8">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
        Hindu Spiritual News
      </h1>

      {loading ? (
        <p className="text-lg text-center text-gray-400 animate-pulse">Loading News...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {news.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <GradientCard>
                <div className="flex flex-col h-full">
                  <img
                    src={article.urlToImage || "https://via.placeholder.com/300"}
                    alt={article.title}
                    className="w-full h-52 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-lg font-bold mb-2 text-gray-100 leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-4 flex-1">
                    {article.description
                      ? article.description.substring(0, 100)
                      : "No description available"}...
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-auto text-sm font-semibold text-blue-400 hover:text-orange-500 transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </GradientCard>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

// Gradient border card component
const GradientCard = ({ children }) => {
  return (
    <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="bg-gray-900 rounded-xl p-5 h-full">{children}</div>
    </div>
  );
};

export default News;