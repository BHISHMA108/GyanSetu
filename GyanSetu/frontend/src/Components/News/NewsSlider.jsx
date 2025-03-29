import React, { useState, useEffect } from 'react';
import './NewsSlider.css';

const newsData = {
  hinduism: [
    {
      title: "Ram Mandir Inauguration: Historic Moment as PM Modi Consecrates Temple in Ayodhya",
      description: "The grand Ram Mandir in Ayodhya was inaugurated with PM Modi performing the Pran Pratishtha ceremony, marking a historic moment for millions of devotees worldwide.",
      image: "https://images.news18.com/ibnlive/uploads/2025/02/ram-mandir-2025-02-869d8074c22238921a4847ee78572b87-16x9.png?impolicy=website&width=640&height=360",
      readMore: "https://www.news18.com/india/ayodhya-ram-mandir-trust-paid-rs-400-crore-taxes-in-5-years-amid-surge-in-religious-tourism-ws-d-9264207.html"
    },
    {
      title: "Kumbh Mela 2024: Preparations Begin for World's Largest Religious Gathering",
      description: "Authorities have started preparations for the upcoming Kumbh Mela, expected to host millions of pilgrims for the sacred bathing ritual.",
      image: "https://static.toiimg.com/thumb/msid-118717657,imgsize-53554,width-400,height-225,resizemode-72/118717657.jpg",
      readMore: "https://timesofindia.indiatimes.com/city/allahabad/notices-to-660-organisations-for-unoccupied-kumbh-camps/articleshow/118717660.cms"
    },
    {
      title: "Varanasi's Kashi Vishwanath Temple Sets New Record with Daily Visitors",
      description: "The historic temple complex witnesses unprecedented footfall following corridor renovation, enhancing spiritual tourism in the holy city.",
      image: "https://static.toiimg.com/thumb/msid-88427579,width-1070,height-580,imgsize-1421641,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      readMore: "https://timesofindia.indiatimes.com/city/varanasi"
    },
    
      {
        "title": "Prime Minister of Australia Participates in Holi Celebrations at Sydney's Largest Hindu Temple",
        "description": "Prime Minister Anthony Albanese visited the BAPS Swaminarayan Sanstha temple in Kemps Creek to join the Holi celebrations, a festival known for its vibrant colored powders and deep spiritual significance.",
        "image": "https://content.api.news/v3/images/bin/1c792faabc0f928b10b6be69eafbf860?width=1024",
        "readMore": "https://www.news.com.au/national/politics/prime-minister-anthony-albanese-visits-hindu-temple-in-labor-heartland-for-holi/news-story/12b4eeac5aafbdc0aa8a66c31e968f2f"
      },
      {
        "title": "Millions Celebrate Holi, the Hindu Festival of Colors",
        "description": "Across India and other South Asian countries, millions celebrated Holi, marking the arrival of spring. The festival is known for its vibrant colors and symbolizes the triumph of good over evil.",
        "image": "https://dims.apnews.com/dims4/default/d29c1ae/2147483647/strip/true/crop/2983x1988+0+0/resize/2720x1812!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1c%2Fb3%2F53323a5a066a64e18fc79cea37fd%2F5a71c88a3bd74b3cbee4cc8efbcaf3b5",
        "readMore": "https://apnews.com/article/9219eb69ef71d05cd4aec0afd203949c"
      },
      {
        "title": "Consecration of the Ram Mandir in Ayodhya",
        "description": "The consecration ceremony of the Ram Mandir was completed by Prime Minister Narendra Modi on January 22, 2024, marking a significant event in Hindu spirituality.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/PM_at_the_Pran_Pratishtha_ceremony_of_Shree_Ram_Janmaboomi_Temple_in_Ayodhya%2C_Uttar_Pradesh_on_January_22%2C_2024_20240122150990_%28cropped%29.jpg/397px-PM_at_the_Pran_Pratishtha_ceremony_of_Shree_Ram_Janmaboomi_Temple_in_Ayodhya%2C_Uttar_Pradesh_on_January_22%2C_2024_20240122150990_%28cropped%29.jpg",
        "readMore": "https://en.wikipedia.org/wiki/Consecration_of_the_Ram_Mandir"
      },
      {
        "title": "Inauguration of BAPS Hindu Mandir in Abu Dhabi",
          "description": "The BAPS Hindu Mandir in Abu Dhabi was inaugurated in February 2024, symbolizing communal harmony and global unity.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/BAPS_Abu_Dhabi_Mandir.jpg/330px-BAPS_Abu_Dhabi_Mandir.jpg",
        "readMore": "https://en.wikipedia.org/wiki/BAPS_Hindu_Mandir_Abu_Dhabi"
      },
      {
        "title": "Hindu Devotees in Myanmar Participate in Firewalking Festival",
        "description": "In Myanmar, Hindu devotees participated in a firewalking festival, showcasing their faith and dedication through this traditional ritual.",
        "image": "https://dims.apnews.com/dims4/default/531a658/2147483647/strip/true/crop/7862x5242+0+0/resize/2720x1814!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F81%2F99%2F96fb766bad9e0720a72be6068ada%2F3e78653ca59144c39fdacaef083ca25d",
        "readMore": "https://apnews.com/article/c653a6fad81dcc5951bcfb75d80743f6"
      },
  
    
  ],
  buddhism: [
    
      {
        "title": "Dalai Lama Honored as 'Universal Supreme Leader of the Buddhist World'",
        "description": "The 12th General Assembly of the Asian Buddhist Conference for Peace recognized His Holiness the 14th Dalai Lama for his lifelong contributions to global peace.",
        "image": "https://tibet.net/wp-content/uploads/2024/01/Asian-Buddhist-Conference-for-Peace-1024x626.jpeg",
        "readMore": "https://tibet.net/12th-asian-buddhist-conference-for-peace-declares-his-holiness-the-dalai-lama-universal-supreme-leader-of-the-buddhist-world/"
      },
      {
        "title": "Oldest Buddhist Manuscripts Discovered in Ladakh",
        "description": "Archaeologists have uncovered rare Buddhist texts dating back several centuries in a remote Himalayan monastery, shedding light on early Buddhist practices.",
        "image": "https://i1.himalayas.life/c/u/f67894297b6134a6b759b3a9ec15b6cb/2024/01/16211157/CIMG1283-jpg-750x330.webp?format=webp",
        "readMore": "https://mandalas.life/news/oldest-buddhist-manuscripts-discovered-in-ladakh/"
      },
      {
        "title": "Kyoto Temple's Robot Priest 'Mindar' Delivers Buddhist Teachings",
        "description": "Kodaiji Temple in Kyoto introduces 'Mindar', a humanoid robot embodying the Buddhist deity Kannon, to deliver sermons on compassion and emptiness.",
        "image": "https://p.potaufeu.asahi.com/4427-p/picture/27511337/2eea5f1931e2a97388dd2b48ec5e936f.jpg",
        "readMore": "https://www.asahi.com/ajw/articles/14861909"
      }
,     
  {
    "title": "Sri Lanka's Temple of the Sacred Tooth Relic Celebrates Annual Esala Perahera Festival",
    "description": "The Temple of the Sacred Tooth Relic in Kandy, Sri Lanka, celebrates the annual Esala Perahera Festival, attracting thousands of devotees and tourists to witness traditional processions honoring the sacred tooth relic of Lord Buddha.",
    "image": "https://media.odynovotours.com/thumbnail/article/57000/30295286646380544331/SriLanka3.3_54117-1970w-600h-0sx-0sy-1970sw-600sh.1970x800.def.jpg",
    "readMore": "https://www.indiaodysseytours.com/knows/travel-guide-on-the-kandy-festival-of-the-tooth.html"
  },
  {
    "title": "Global Surge in Meditation App Usage Amid Rising Mental Health Awareness",
    "description": "Meditation apps have seen a significant increase in global downloads as more individuals turn to mindfulness practices to manage stress and anxiety, reflecting a growing trend in digital mental health solutions.",
    "image": "https://bigohtech.com/wp-content/uploads/2024/05/Top-Meditation-App-Statistics-730x455.webp",
    "readMore": "https://bigohtech.com/top-meditation-app-statistics/"
  }


    ],
  sikhism: [
    {
      "title": "Thousands of Indian Sikhs Visit Shrine of Guru Nanak to Mark His Birthday",
      "description": "Devotees gathered at the shrine of Guru Nanak, the founder of Sikhism, to celebrate his birth anniversary, engaging in prayers and community services.",
      "image": "https://dims.apnews.com/dims4/default/da9808b/2147483647/strip/true/crop/8332x5555+0+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fcb%2F2b%2Fd8feeccab48ab025f3618b1efaca%2F0223276ee6f149a39f1a2e33edabc9a2",
      "readMore": "https://apnews.com/article/pakistan-sikh-pilgrims-guru-nanak-shrine-india-5e51ffab30432805b2014a93a3f00bb0"
    },
    {
      "title": "Interfaith Conference Promotes Religious Harmony in Melbourne",
      "description": "The Namdhari Sikh Sangat organized a gathering of twelve religious organizations under the theme 'Religious Harmony for World Peace' in Melbourne, Australia.",
      "image": "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230424121203.jpg",
      "readMore": "https://www.aninews.in/news/business/business/religious-and-spiritual-leaders-of-different-communities-participate-in-sadbhawna-organized-by-nid-foundation-and-namdhari-sikh-society-at-melbourne-australia20230424174225/"
    },
    {
      "title": "555 Years of Guru Nanak's Eternal Legacy Celebrated Worldwide",
      "description": "Sikh communities globally commemorate the 555th birth anniversary of Guru Nanak, embracing his teachings of Naam Japo, Kirat Karo, and Wand Chako.",
      "image": "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff9c9baad-548a-4e45-a359-fcbeed214e1f_961x1200.jpeg",
      "readMore": "https://kbssidhu.substack.com/p/555th-birth-anniversary-of-guru-nanak"
    },
    {
      "title": "Guru Tegh Bahadur Martyrdom Day Observed with Devotion",
      "description": "Sikhs worldwide observed the martyrdom day of Guru Tegh Bahadur, reflecting on his sacrifice and contributions to religious freedom.",
      "image": "https://static.toiimg.com/thumb/msid-95735905,imgsize-7928,width-400,resizemode-4/95735905.jpg",
      "readMore": "https://timesofindia.indiatimes.com/india/guru-tegh-bahadur-martyrdom-day-know-all-about-the-great-sikh-guru/articleshow/95735925.cms"
    },
    
    {
      "title": "Sikh Community Advocates for Religious Accommodation in Helmet Laws",
      "description": "Turban-wearing Sikhs in NSW seek exemptions from mandatory helmet rules, emphasizing the significance of the turban in their spiritual practice.",
      "image": "https://static.toiimg.com/thumb/msid-115121171,imgsize-24032,width-400,resizemode-4/115121171.jpg",
      "readMore": "https://timesofindia.indiatimes.com/india/only-those-sikhs-who-wear-turban-exempted-from-wearing-helmet-punjab-and-haryana-high-court-clarifies/articleshow/115120996.cms"
    }
  ],
  islam:[
    {
      "title": "Muslims with Tattoo Regrets Seek Removal During Ramadan",
      "description": "In Jakarta, Indonesia, numerous Muslims are taking advantage of a free tattoo removal service offered by the Amil Zakat National Agency during Ramadan as part of their repentance in the holy month.",
      "image": "https://dims.apnews.com/dims4/default/162eb0f/2147483647/strip/true/crop/3743x2495+0+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F22%2F07%2F720b0764dfa57fbd3643b94552d0%2F7fd7a6bb6d484bc4b70d7d754e334862",
      "readMore": "https://apnews.com/article/70eedd2187946866707074bcbe63e885"
    },
    {
      "title": "Granada's Rich Islamic Heritage Becomes Spiritual Hub During Ramadan",
      "description": "Granada, Spain, with its profound Islamic heritage, transforms into a center of spiritual activities during Ramadan, attracting Muslims seeking a deeper connection with their faith.",
      "image": "https://idsb.tmgrup.com.tr/ly/uploads/images/2025/03/19/373698.jpg",
      "readMore": "https://www.dailysabah.com/life/religion/granadas-rich-islamic-heritage-becomes-spiritual-hub-during-ramadan"
    },
    {
      "title": "Ramadan 2025: Muslims Embrace Eco-Friendly Practices",
      "description": "During Ramadan 2025, Muslims are encouraged to adopt environmentally friendly habits, such as reducing red meat consumption and conserving water during ablutions, to honor the planet.",
      "image": "https://religionmediacentre.org.uk/wp-content/uploads/2025/03/Ramadan-Maira-MWLL-1-1024x768.jpg",
      "readMore": "https://religionmediacentre.org.uk/news/ramadan-2025-muslims-bring-the-centuries-old-spiritual-month-down-to-earth/"
    },
    {
      "title": "Islamic Centre of England Broadcasts Ayatollah's Messages During Ramadan",
      "description": "The Islamic Centre of England has been broadcasting daily religious messages from Ayatollah Ali Khamenei during Ramadan, sparking discussions about the center's affiliations.",
      "image": "https://www.thetimes.com/imageserver/image/%2F97c88b49-222b-4636-abc2-07f56ee6f788.jpg?crop=2500%2C1406%2C0%2C130&resize=1500",
      "readMore": "https://www.thetimes.co.uk/article/iran-inquiry-islamic-centre-england-ayatollah-ali-khamenei-8fcm2px72"
    },
    {
      "title": "Challenges of Fasting During Ramadan for Those with Eating Disorders",
      "description": "Muslims with eating disorders face unique health and spiritual challenges during Ramadan, balancing religious obligations with personal well-being.",
      "image": "https://religionnews.com/wp-content/uploads/2025/03/webRNS-Ramadan-Iftar1.jpg",
      "readMore": "https://religionnews.com/2025/03/19/for-those-with-eating-disorders-ramadan-fasting-presents-health-spiritual-challenges/"
    }
  ]
  // ,
  // jainism: [
  //   {
  //     title: "Palitana Temples Receive UNESCO World Heritage Status",
  //     description: "The sacred Shatrunjaya hill temples recognized for their architectural and spiritual significance.",
  //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Palitana_temples.jpg/1200px-Palitana_temples.jpg",
  //     readMore: "https://whc.unesco.org/"
  //   },
  //   {
  //     title: "International Jain Conference on Environmental Conservation",
  //     description: "Global gathering discusses Jain principles of non-violence and their application to ecological preservation.",
  //     image: "https://www.jainworld.com/education/images/jain-conf.jpg",
  //     readMore: "https://www.jainworld.com/"
  //   },
  //   {
  //     title: "Digital Archive of Jain Manuscripts Launched",
  //     description: "Major initiative to preserve and digitize ancient Jain texts and make them accessible online.",
  //     image: "https://www.bl.uk/britishlibrary/~/media/bl/global/sacred-texts/images/jain%20manuscript.jpg",
  //     readMore: "https://www.jainelibrary.org/"
  //   },
  //   {
  //     title: "Paryushan 2024: Global Celebrations Announced",
  //     description: "Communities worldwide prepare for the annual period of spiritual reflection and fasting.",
  //     image: "https://static.toiimg.com/thumb/msid-85241841,width-1070,height-580,imgsize-1421641,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //     readMore: "https://jainsite.com/"
  //   },
  //   {
  //     title: "New Jain Center Opens in Silicon Valley",
  //     description: "Modern facility combines traditional architecture with contemporary amenities for growing community.",
  //     image: "https://www.jcnc.org/wp-content/uploads/2019/01/JCNC-Temple-1.jpg",
  //     readMore: "https://www.jcnc.org/"
  //   },
  //   {
  //     title: "Young Jains Launch Global Environmental Initiative",
  //     description: "Youth-led movement applies Jain principles to address climate change and sustainability.",
  //     image: "https://youngjains.org.uk/wp-content/uploads/2019/03/YJ-Logo-1.png",
  //     readMore: "https://youngjains.org.uk/"
  //   }
  // ]
};

const NewsSlider = () => {
  const [currentReligion, setCurrentReligion] = useState('hinduism');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let interval;
    if (hoveredIndex === null) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentReligion, hoveredIndex]);

  const handleReligionChange = (religion) => {
    setCurrentReligion(religion);
    setCurrentIndex(0);
    setHoveredIndex(null);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % newsData[currentReligion].length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + newsData[currentReligion].length) % newsData[currentReligion].length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const getVisibleCards = () => {
    const items = newsData[currentReligion];
    const totalItems = items.length;
    const visibleCards = [];
    
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + totalItems) % totalItems;
      visibleCards.push({
        ...items[index],
        position: i + 2
      });
    }
    return visibleCards;
  };

  const getCardSize = (position, isHovered) => {
    if (hoveredIndex === null) {
      // Default state - middle card is largest
      const sizes = ['smallest', 'small', 'large', 'small', 'smallest'];
      return sizes[position];
    } else {
      // When a card is hovered, calculate relative sizes
      const distance = Math.abs(position - hoveredIndex);
      if (distance === 0) return 'large';
      if (distance === 1) return 'small';
      return 'smallest';
    }
  };

  return (
    <div className="news-slider">
      <div className="religion-selector">
        <select 
          value={currentReligion} 
          onChange={(e) => handleReligionChange(e.target.value)}
          className="religion-dropdown"
        >
          <option value="hinduism">Hinduism</option>
          <option value="buddhism">Buddhism</option>
          <option value="sikhism">Sikhism</option>
          <option value="islam">Islam</option>
        </select>
      </div>

      <div className="news-container">
        <button className="nav-arrow nav-arrow-left" onClick={handlePrev}>←</button>
        <div className={`cards-wrapper ${isTransitioning ? 'transitioning' : ''}`}>
          {getVisibleCards().map((news, index) => (
            <div
              key={news.title}
              className={`news-card ${getCardSize(index, hoveredIndex === index)}`}
              onMouseEnter={() => {
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
            >
              <div className="news-image">
                <img src={news.image} alt={news.title} />
              </div>
              <div className="news-content">
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <button 
                  className="read-more-btn"
                  onClick={() => window.location.href = news.readMore}
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-arrow nav-arrow-right" onClick={handleNext}>→</button>
      </div>
    </div>
  );
};

export default NewsSlider; 