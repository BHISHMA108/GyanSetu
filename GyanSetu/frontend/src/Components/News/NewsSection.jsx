import NewsCard from './NewsCard';

const NewsSection = ({ newsItems }) => {
  return (
    <div className="news-section">
      <h2>Spiritual News</h2>
      <div className="news-grid">
        {newsItems.map((item) => (
          <NewsCard key={item.id} title={item.title} description={item.description} imageUrl={item.imageUrl} />
        ))}
      </div>

      <style jsx>{`
        .news-section {
          padding: 2rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        h2 {
          text-align: center;
          color: #a855f7;
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          position: relative;
          padding-bottom: 1rem;
        }

        h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: #a855f7;
          border-radius: 2px;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
          padding: 1rem;
        }

        @media (min-width: 768px) {
          .news-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .news-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default NewsSection; 