import React from 'react';
import { useParams } from 'react-router-dom';
import './NewsDetail.css';

const newsDetails = {
  'ram-mandir-inauguration': {
    title: "Ram Mandir Inauguration: Historic Moment for Ayodhya",
    fullDescription: `The grand Ram Mandir in Ayodhya marks a historic moment in India's spiritual journey. 
    The temple, built in the traditional Nagara style, stands as a testament to ancient Indian architecture 
    and devotion. The inauguration ceremony was attended by thousands of devotees from across the world, 
    marking a new chapter in Ayodhya's history.`,
    date: "January 22, 2024",
    images: [
      "https://images.unsplash.com/photo-1542556398-95fb5b9f9b68",
      "https://images.unsplash.com/photo-1583275479278-7b7cd3c11c6f"
    ],
    relatedArticles: [
      {
        title: "The Architecture of Ram Mandir",
        link: "/news/ram-mandir-architecture"
      },
      {
        title: "Ayodhya's Transformation",
        link: "/news/ayodhya-development"
      }
    ]
  },
  // Add more news details here
};

const NewsDetail = () => {
  const { newsId } = useParams();
  const news = newsDetails[newsId];

  if (!news) {
    return (
      <div className="news-detail-error">
        <h2>News article not found</h2>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="news-detail">
      <button 
        className="back-button"
        onClick={() => window.history.back()}
      >
        ← Back
      </button>

      <h1>{news.title}</h1>
      <div className="news-meta">
        <span className="date">{news.date}</span>
      </div>

      <div className="news-images">
        {news.images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`${news.title} - Image ${index + 1}`}
          />
        ))}
      </div>

      <div className="news-content">
        <p>{news.fullDescription}</p>
      </div>

      {news.relatedArticles && news.relatedArticles.length > 0 && (
        <div className="related-articles">
          <h3>Related Articles</h3>
          <ul>
            {news.relatedArticles.map((article, index) => (
              <li key={index}>
                <a href={article.link}>{article.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NewsDetail; 