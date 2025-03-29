import NewsSlider from '../Components/News/NewsSlider.jsx';

const News = () => {
  return (
    <div className="bg-[#111111] min-h-screen py-8">
      <h1 className="text-white text-center mb-8 text-4xl">
        Spiritual News
      </h1>
      <NewsSlider />
    </div>
  );
};

export default News;
