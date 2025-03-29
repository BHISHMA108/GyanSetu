import React from "react";
import { HeroParallax } from "../../ui/heroPallax.jsx";

export const products = [
  {
    title: "The Holy Bible (King James Version)",
    link: "https://www.amazon.com/dp/1234567801",
    thumbnail: "https://cdn.kobo.com/book-images/13f7c85f-2fa3-4556-af07-28f855b3c4d4/1200/1200/False/bible-king-james-version-authorized-kjv-1611-best-bible-for-kobo.jpg",
    price: "₹800",
  },
  // {
  //   title: "The New Testament",
  //   link: "https://www.amazon.com/dp/1234567802",
  //   thumbnail: "hhttps://cdn.kobo.com/book-images/64c11dfc-5e83-462b-9ab9-d7a7c6fa24e3/1200/1200/False/the-new-testament-52.jpg",
  //   price: "₹500",
  // },
  {
    title: "The Old Testament",
    link: "https://www.amazon.com/dp/1234567803",
    thumbnail: "https://m.media-amazon.com/images/I/71Dse0c8IzL._AC_UF1000,1000_QL80_.jpg",
    price: "₹550",
  },
  {
    title: "The Gospel of John",
    link: "https://www.amazon.com/dp/1234567804",
    thumbnail: "https://m.media-amazon.com/images/M/MV5BMTk1ODY3NzYxN15BMl5BanBnXkFtZTcwNDIwNjAwMQ@@._V1_FMjpg_UX1000_.jpg",
    price: "₹400",
  },
  {
    title: "The Book of Psalms",
    link: "https://www.amazon.com/dp/1234567805",
    thumbnail: "https://m.media-amazon.com/images/I/61ZUYpWg4VL._AC_UF1000,1000_QL80_.jpg",
    price: "₹450",
  },
  {
    title: "Catechism of the Catholic Church",
    link: "https://www.amazon.com/dp/1234567806",
    thumbnail: "https://m.media-amazon.com/images/I/51rKVWPMBhL._AC_UF1000,1000_QL80_.jpg",
    price: "₹700",
  },
  {
    title: "The Confessions by Saint Augustine",
    link: "https://www.amazon.com/dp/1234567807",
    thumbnail: "https://m.media-amazon.com/images/I/61uKdbgMw1L._AC_UF1000,1000_QL80_.jpg",
    price: "₹600",
  },
  {
    title: "Mere Christianity by C.S. Lewis",
    link: "https://www.amazon.com/dp/1234567808",
    thumbnail: "https://m.media-amazon.com/images/I/81TFg-mLHAL.jpg",
    price: "₹550",
  },
  {
    title: "The Imitation of Christ",
    link: "https://www.amazon.com/dp/1234567809",
    thumbnail: "https://m.media-amazon.com/images/I/814QyqflbsL.jpg",
    price: "₹500",
  },
  {
    title: "The Purpose Driven Life",
    link: "https://www.amazon.com/dp/1234567810",
    thumbnail: "https://m.media-amazon.com/images/I/91WhuCH3dFL.jpg",
    price: "₹650",
  },
  {
    title: "The Pilgrim's Progress by John Bunyan",
    link: "https://www.amazon.com/dp/1234567811",
    thumbnail: "https://m.media-amazon.com/images/I/61QeBrok+3L._AC_UF1000,1000_QL80_.jpg",
    price: "₹550",
  },
  {
    title: "The Screwtape Letters by C.S. Lewis",
    link: "https://www.amazon.com/dp/1234567812",
    thumbnail: "https://m.media-amazon.com/images/I/81zBNRzsozL._AC_UF1000,1000_QL80_.jpg",
    price: "₹600",
  },
  {
    title: "The Imitation of Christ",
    link: "https://www.amazon.com/dp/1234567809",
    thumbnail: "https://m.media-amazon.com/images/I/814QyqflbsL.jpg",
    price: "₹500",
  },
  {
    title: "The Purpose Driven Life",
    link: "https://www.amazon.com/dp/1234567810",
    thumbnail: "https://m.media-amazon.com/images/I/91WhuCH3dFL.jpg",
    price: "₹650",
  },
  {
    title: "Orthodoxy by G.K. Chesterton",
    link: "https://www.amazon.com/dp/1234567813",
    thumbnail: "https://m.media-amazon.com/images/I/61aPxtisLxL._AC_UF1000,1000_QL80_.jpg",
    price: "₹500",
  },
  {
    title: "Foxe's Book of Martyrs",
    link: "https://www.amazon.com/dp/1234567814",
    thumbnail: "https://m.media-amazon.com/images/I/61lwE0GnIEL._AC_UF1000,1000_QL80_.jpg",
    price: "₹700",
  },
  {
    title: "The Holy Bible (King James Version)",
    link: "https://www.amazon.com/dp/1234567801",
    thumbnail: "https://cdn.kobo.com/book-images/13f7c85f-2fa3-4556-af07-28f855b3c4d4/1200/1200/False/bible-king-james-version-authorized-kjv-1611-best-bible-for-kobo.jpg",
    price: "₹800",
  },
  // {
  //   title: "The New Testament",
  //   link: "https://www.amazon.com/dp/1234567802",
  //   thumbnail: "hhttps://cdn.kobo.com/book-images/64c11dfc-5e83-462b-9ab9-d7a7c6fa24e3/1200/1200/False/the-new-testament-52.jpg",
  //   price: "₹500",
  // },
  {
    title: "The Old Testament",
    link: "https://www.amazon.com/dp/1234567803",
    thumbnail: "https://m.media-amazon.com/images/I/71Dse0c8IzL._AC_UF1000,1000_QL80_.jpg",
    price: "₹550",
  },
  {
    title: "The Gospel of John",
    link: "https://www.amazon.com/dp/1234567804",
    thumbnail: "https://m.media-amazon.com/images/M/MV5BMTk1ODY3NzYxN15BMl5BanBnXkFtZTcwNDIwNjAwMQ@@._V1_FMjpg_UX1000_.jpg",
    price: "₹400",
  },
  {
    title: "The Book of Psalms",
    link: "https://www.amazon.com/dp/1234567805",
    thumbnail: "https://m.media-amazon.com/images/I/61ZUYpWg4VL._AC_UF1000,1000_QL80_.jpg",
    price: "₹450",
  },
  {
    title: "The Confessions by Saint Augustine",
    link: "https://www.amazon.com/dp/1234567807",
    thumbnail: "https://m.media-amazon.com/images/I/61uKdbgMw1L._AC_UF1000,1000_QL80_.jpg",
    price: "₹600",
  },
  {
    title: "Mere Christianity by C.S. Lewis",
    link: "https://www.amazon.com/dp/1234567808",
    thumbnail: "https://m.media-amazon.com/images/I/81TFg-mLHAL.jpg",
    price: "₹550",
  },
  {
    title: "The Old Testament",
    link: "https://www.amazon.com/dp/1234567803",
    thumbnail: "https://m.media-amazon.com/images/I/71Dse0c8IzL._AC_UF1000,1000_QL80_.jpg",
    price: "₹550",
  },
  {
    title: "The Gospel of John",
    link: "https://www.amazon.com/dp/1234567804",
    thumbnail: "https://m.media-amazon.com/images/M/MV5BMTk1ODY3NzYxN15BMl5BanBnXkFtZTcwNDIwNjAwMQ@@._V1_FMjpg_UX1000_.jpg",
    price: "₹400",
  },
  {
    title: "The Imitation of Christ",
    link: "https://www.amazon.com/dp/1234567809",
    thumbnail: "https://m.media-amazon.com/images/I/814QyqflbsL.jpg",
    price: "₹500",
  },
  {
    title: "The Purpose Driven Life",
    link: "https://www.amazon.com/dp/1234567810",
    thumbnail: "https://m.media-amazon.com/images/I/91WhuCH3dFL.jpg",
    price: "₹650",
  },
  {
    title: "The Pilgrim's Progress by John Bunyan",
    link: "https://www.amazon.com/dp/1234567811",
    thumbnail: "https://m.media-amazon.com/images/I/61QeBrok+3L._AC_UF1000,1000_QL80_.jpg",
    price: "₹550",
  },
];

const CristianParallax = () => {
  return <HeroParallax products={products} />;
};

export default CristianParallax;