// import React from 'react';
import { FaBookmark, FaHome , FaCog, FaSearch } from 'react-icons/fa';        // Font Awesome
import { BsBookmark, BsBookmarkCheck } from 'react-icons/bs';   
import { BsBookmarkFill } from 'react-icons/bs';     // Bootstrap
import { Button } from "flowbite-react";
import React, { useState } from 'react';

const photos = [
 '../../../public/images/1.jpg',
 '../../../public/images/2.jpg',
 '../../../public/images/3.jpg',
 '../../../public/images/4.jpg',
 '../../../public/images/5.jpg',
 '../../../public/images/6.jpg',
 '../../../public/images/7.jpg',
 '../../../public/images/8.jpg', 
 '../../../public/images/9.jpg', 
  '../../../public/images/10.jpg' 
];

// Main HomePage component
function HomePage() {
  const books = [
    {
      id: 1,
      title: "Native Invisibility",
      author: "Chloe Elbir",
      cover: "/images/1.jpg",
      tag: "Native Invisibility",
      isBookmarked: false,
    },
    {
      id: 2,
      title: "The Land Of Cloud",
      author: "Chloe Elbir",
      cover: "/images/2.jpg",
      tag: "The Land Of Cloud",
      isBookmarked: false,
    },
    {
      id: 3,
      title: "Wildfire Love",
      author: "Author Name",
      cover: "/images/3.jpg",
      tag: "Native Invisibility",
      isBookmarked: false,
    },
    {
      id: 4,
      title: "A Teaspoon of Earth and Sea",
      author: "Dina Malveira",
      cover: "/images/4.jpg",
      tag: "A Teaspoon of...",
      isBookmarked: false,
    },
    {
      id: 5,
      title: "Positive Thinking",
      author: "Author Name",
      cover: "/images/5.jpg",
      tag: "Positive Thinking",
      isBookmarked: false,
    },
    {
      id: 6,
      title: "Enemy",
      author: "Author Name",
      cover: "/images/6.jpg",
      tag: "Native Invisibility",
      isBookmarked: false,
    },
    {
      id: 7,
      title: "This Is My Life",
      author: "Author Name",
      cover: "/images/7.jpg",
      tag: "The Land Of Cloud",
      isBookmarked: false,
    },
    {
      id: 8,
      title: "The World Without You",
      author: "Joshua Henkin",
      cover: "/images/8.jpg",
      tag: "Native Invisibility",
      isBookmarked: false,
    },
    {
      id: 9,
      title: "Sensation",
      author: "Author Name",
      cover: "/images/9.jpg",
      tag: "A Teaspoon of...",
      isBookmarked: false,
    },
    {
      id: 11,
      title: "Visions of Tomorrow",
      author: "Author Name",
      cover: "/images/10.jpg",
      tag: "Positive Thinking",
      isBookmarked: false,
    },
    {
      id: 12,
      title: "Visions of Tomorrow",
      author: "Author Name",
      cover: "/images/10.jpg",
      tag: "Positive Thinking",
      isBookmarked: false,
    },
    {
      id: 13,
      title: "Visions of Tomorrow",
      author: "Author Name",
      cover: "/images/10.jpg",
      tag: "Positive Thinking",
      isBookmarked: false,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md mb-8">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search Here"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {/* Search Icon */}
            <FaSearch className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
          </div>
          <Button className='mr-[400px]' color="alternative">Search</Button>
        </header>

        {/* Popular Books Section */}
        <section> 
  <h1 className="text-2xl font-bold text-gray-800 mb-6">Popular books</h1>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
    {books.map((book) => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>
</section>

      </main>
    </div>
  );
}

// BookCard Component
const BookCard = ({ book }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
<div className="bg-white l shadow-sm overflow-hidden w-[200px] mx-auto p-2">
      {/* Book Cover and Bookmark */}
      <div className="relative">
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-64 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/160x220/E0E0E0/333?text=${book.title.replace(/ /g, '+')}`;
        }}
      />
      
      {/* Bookmark Button */}
      <button
        onClick={toggleBookmark}
        className={`absolute top-2 right-2 p-1.5 rounded-full shadow-md transition-all duration-200 ${
          isBookmarked
            ? 'bg-indigo-100 text-indigo-500'
            : 'bg-white text-gray-700 hover:text-indigo-500'
        }`}
        aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
      >
        {isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
      </button>
    </div>

      {/* Title and Author */}
      <div className="p-2 text-center">
        {/* <h3 className="text-[14px] font-semibold text-gray-800 truncate">{book.title}</h3> */}
        {/* <p className="text-[12px] text-gray-500 truncate">{book.author}</p> */}
      </div>

      {/* Tag */}
      <div className="px-3 pb-3">
        <span className="block w-full bg-gray-300 text-gray-700 text-[13px] font-medium text-center py-1 rounded-md">
          {book.tag}
        </span>
      </div>
    </div>
  );
};

export default HomePage;
