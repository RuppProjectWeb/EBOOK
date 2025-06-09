import React from 'react';

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
    { id: 1, title: 'Native Invisibility', author: 'Chloe Elbir', cover:'../../../public/images/1.jpg', isBookmarked: false },
    { id: 2, title: 'The Land Of Cloud', author: 'Chloe Elbir', cover:'../../../public/images/2.jpg', isBookmarked: false },
    { id: 3, title: 'Wildfire Love', author: 'Author Name', cover:'../../../public/images/3.jpg', isBookmarked: false },
    { id: 4, title: 'A Teaspoon of...', author: 'Dina Malveira', cover:'../../../public/images/4.jpg', isBookmarked: false },
    { id: 5, title: 'Positive Thinking', author: 'Author Name', cover:'../../../public/images/5.jpg', isBookmarked: false },
    { id: 6, title: 'Enemy', author: 'Author Name', cover:'../../../public/images/6.jpg', isBookmarked: false }, // Using photo6 here
    { id: 7, title: 'This Is My Life', author: 'Author Name', cover:'../../../public/images/7.jpg', isBookmarked: false }, // Using photo7 here
    // Added more books to match the original count if needed, using placeholders for now
    { id: 8, title: 'The World Without You', author: 'Joshua Henkin', cover: '../../../public/images/8.jpg', isBookmarked: false },
    { id: 9, title: 'Sensation', author: 'Author Name', cover:'../../../public/images/9.jpg', isBookmarked: false },
    { id: 10, title: 'Visions of Tomorrow', author: 'Author Name', cover: '../../../public/images/10.jpg', isBookmarked: false },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-lg flex flex-col rounded-r-xl">
        <div className="flex items-center space-x-3 mb-8">
          <img
            src="https://placehold.co/40x40/4F46E5/FFFFFF?text=L" // Placeholder for profile pic (images2 was undefined)
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">lao naroth</h2>
            <p className="text-sm text-gray-500">narothlao@gmail.com</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-4">
          {/* Home Link */}
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg bg-indigo-500 text-white shadow-md transition-all duration-200 hover:bg-indigo-600"
          >
            {/* Home Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
              />
            </svg>
            <span>Home</span>
          </a>

          {/* Menu Link */}
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-200"
          >
            {/* Menu Icon (simplified for brevity) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span>Menu</span>
          </a>

          {/* Book Mark Link */}
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-200"
          >
            {/* Bookmark Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            <span>Book Mark</span>
          </a>
          {/* Setting Link */}
          <a
            href="#"
              className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-200"
          >
            {/* Settings Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.504-1.761 2.964-1.761 3.468 0l1.968 6.883a1 1 0 00.95.69h7.028c1.761 0 2.453 2.146 1.09 3.223l-5.6 4.417a1 1 0 00-.365 1.111l2.128 7.085c.504 1.761-1.761 2.964-3.468 0l-5.6-4.417a1 1 0 00-1.111.365l-7.085 2.128c-1.761.504-2.964-1.761 0-3.468l4.417-5.6a1 1 0 00-.365-1.111L.742 7.085c-1.761-.504-1.07-2.738.69-3.223l6.883-1.968a1 1 0 00.69-.95V2.317z"
              />
            </svg>
            <span>Setting</span>
          </a>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors duration-200">
            {/* Logout Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span>Log Out</span>
          </button>
        </header>

        {/* Popular Books Section */}
        <section>
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Popular books</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 max-w-xs">
    {/* Image + Bookmark */}
    <div className="relative">
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-64 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/150x220/E0E0E0/333333?text=${book.title.replace(/ /g, '+')}`;
        }}
      />
      {/* Bookmark Icon */}
      <button className="absolute top-3 right-3 bg-white bg-opacity-80 p-2 rounded-full text-gray-600 hover:text-indigo-500 transition-colors duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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

    {/* Title + Author */}
    <div className="p-4 text-center">
      <h3 className="text-lg font-bold text-gray-800 truncate">{book.title}</h3>
      <p className="text-sm text-gray-500">{book.author}</p>
    </div>

    {/* Bottom Tag (e.g., "Native Invisibility") */}
    {book.tag && (
      <div className="px-4 pb-4">
        <div className="bg-gray-100 rounded-full py-2 text-center font-medium text-gray-700 text-sm">
          {book.tag}
        </div>
      </div>
    )}
  </div>
  );
};

export default HomePage;
