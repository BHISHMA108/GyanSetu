const NewsCard = ({ title, description, imageUrl }) => {
  return (
    <div className="news-card">
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="read-more">Read More →</button>
      </div>

      <style jsx>{`
        .news-card {
          background: #1a1a1a;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #333;
          transition: all 0.3s ease;
          height: 100%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .news-card:hover {
          border-color: #a855f7;
          transform: translateY(-4px);
          box-shadow: 0 8px 12px rgba(168, 85, 247, 0.2);
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .news-card:hover .image-container img {
          transform: scale(1.05);
        }

        .content {
          padding: 1.5rem;
        }

        h3 {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        p {
          color: #9ca3af;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .read-more {
          color: #60a5fa;
          font-size: 0.95rem;
          font-weight: 500;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .read-more:hover {
          color: #93c5fd;
        }
      `}</style>
    </div>
  );
};

export default NewsCard; 