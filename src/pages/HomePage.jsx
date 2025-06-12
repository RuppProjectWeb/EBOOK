import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark, FaHome , FaCog, FaSearch } from 'react-icons/fa';        // Font Awesome
import { BsBookmark } from 'react-icons/bs';        // Bootstrap
import { RiBookmarkLine } from 'react-icons/ri'; 
import { HiMenu } from 'react-icons/hi'; 
import { FaSignOutAlt } from 'react-icons/fa';
import { Button } from "flowbite-react";
import logo from '../../public/images/logo.png'

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
      <aside className="w-64 bg-slate-800 p-6 shadow-lg flex flex-col rounded-r-xl h-screen">
      {/* Profile/Logo Section */}
      <div className="flex flex-col items-center mb-8">
        {/*
          Using an inline SVG for a simple logo placeholder to match the image style.
          You can replace this with your actual StorySurf-EB logo.
        */}
        <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center mb-3">
          <img src={logo}/>
        </div>
        {/* Brand Name */}
        <h2 className="text-lg font-semibold text-gray-100">StorySurf-EB</h2>
        {/* Removed email as it's not in the image */}
      </div>

      {/* Navigation Links */}
      {/*
        Using flex-1 to allow the navigation to grow and push the logout link to the bottom.
        space-y-4 creates vertical spacing between links.
      */}
      <nav className="flex-1 flex flex-col space-y-4">
        {/* Home Link - Styled to match the active state in the image */}
        <Link
          to="/"
          className="flex items-center space-x-3 p-3 rounded-full bg-gray-300 text-gray-900 font-medium shadow-md transition-all duration-200 hover:bg-gray-400"
        >
          {/* Home Icon (inline SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5" // Equivalent to text-xl
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span>Home</span>
        </Link>

        {/* Menu Link - Styled for inactive state */}
        <Link
          to="#"
          className="flex items-center space-x-3 p-3 rounded-full text-gray-300 transition-all duration-200 hover:bg-slate-700 hover:text-white"
        >
          {/* Menu Icon (inline SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5" // Equivalent to text-xl
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
          <span>Menu</span>
        </Link>

        {/* Book Mark Link - Styled for inactive state */}
        <Link
          to="/bookmark"
          className="flex items-center space-x-3 p-3 rounded-full text-gray-300 transition-all duration-200 hover:bg-slate-700 hover:text-white"
        >
          {/* Bookmark Icon (inline SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5" // Equivalent to text-xl
          >
            <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          </svg>
          <span>Book Mark</span>
        </Link>

        {/* Setting Link - Styled for inactive state */}
        <Link
          to="/setting"
          className="flex items-center space-x-3 p-3 rounded-full text-gray-300 transition-all duration-200 hover:bg-slate-700 hover:text-white"
        >
          {/* Settings Icon (inline SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5" // Equivalent to text-xl
          >
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.09-.76-1.71-1.05L14.46 2.5c-.05-.24-.27-.42-.5-.42h-4c-.23 0-.45.18-.5.42l-.36 2.57c-.62.29-1.19.65-1.71 1.05l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.64-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.09.76 1.71 1.05l.36 2.57c.05.24.27.42.5.42h4c.23 0 .45-.18.5-.42l.36-2.57c.62-.29 1.19-.65 1.71-1.05l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
          </svg>
          <span>Setting</span>
        </Link>

        {/*
          Logout Link - Uses mt-auto to push it to the bottom of the flex container,
          making it dynamically position at the end regardless of content height.
        */}
        <Link
          to="/Login"
          className="flex items-center space-x-3 p-3 rounded-full text-gray-300 transition-all duration-200 hover:bg-slate-700 hover:text-white mt-auto"
        >
          {/* Logout Icon (inline SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5" // Equivalent to text-xl
          >
            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
          </svg>
          <span>Log Out</span> {/* Changed text to "Log Out" as per image */}
        </Link>
      </nav>
    </aside>

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
        {/* Bookmark Icon */}
        <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md text-gray-700 hover:text-indigo-500 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
      </div>

      {/* Title and Author */}
      <div className="p-2 text-center">
        {/* <h3 className="text-[14px] font-semibold text-gray-800 truncate">{book.title}</h3> */}
        {/* <p className="text-[12px] text-gray-500 truncate">{book.author}</p> */}
      </div>

      {/* Tag */}
      <div className="px-3 pb-3">
        <span className="block w-full bg-gray-100 text-gray-700 text-[13px] font-medium text-center py-1 rounded-md">
          {book.tag}
        </span>
      </div>
    </div>
  );
};

export default HomePage;
