import { Pagination } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Font Awesome
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import logo from "../../public/images/logo.png";
import {
  Button,
  Checkbox,
  Textarea,
  Select,
  Label,
  FileInput,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setDelete] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

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
            <img src={logo} />
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
            <FaSearch className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {/* <Button className='mr-[400px]' color="alternative">Search</Button> */}
        </header>

        {/* Popular Books Section */}
        <section>
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Admin Books
            </h1>
            <Button
              onClick={() => setOpenModal(true)}
              className="!bg-[#1D293D]"
            >
              {/* <HiShoppingCart  /> */}
              <IoMdAddCircle className="mr-2 h-5 w-5" />
              Add Book
            </Button>
          </div>

          <div className="overflow-x-auto">
            <Table hoverable>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Product name</TableHeadCell>
                  <TableHeadCell>Color</TableHeadCell>
                  <TableHeadCell>Category</TableHeadCell>
                  <TableHeadCell>Price</TableHeadCell>
                  <TableHeadCell>
                    <span className="">Action</span>
                  </TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Sliver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>
                  <button onClick={() => setDelete(true)}
                   
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md "
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaTrashAlt className="text-rose-600 " />
                      </div>
                    </button>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md  ms-2"
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaEdit className="text-emerald-600" />
                      </div>
                    </a>
                    {/* <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a> */}
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Sliver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>
                     <button onClick={() => setDelete(true)}
                   
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md "
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaTrashAlt className="text-rose-600 " />
                      </div>
                    </button>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md  ms-2"
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaEdit className="text-emerald-600" />
                      </div>
                    </a>
                    {/* <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a> */}
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Sliver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>
                   <button onClick={() => setDelete(true)}
                   
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md "
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaTrashAlt className="text-rose-600 " />
                      </div>
                    </button>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md  ms-2"
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaEdit className="text-emerald-600" />
                      </div>
                    </a>
                    {/* <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a> */}
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Sliver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md "
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaTrashAlt className="text-rose-600 " />
                      </div>
                    </a>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md  ms-2"
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaEdit className="text-emerald-600" />
                      </div>
                    </a>
                    {/* <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a> */}
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Sliver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md "
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaTrashAlt className="text-rose-600 " />
                      </div>
                    </a>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md  ms-2"
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaEdit className="text-emerald-600" />
                      </div>
                    </a>
                    {/* <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a> */}
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Sliver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md "
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaTrashAlt className="text-rose-600 " />
                      </div>
                    </a>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md  ms-2"
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaEdit className="text-emerald-600" />
                      </div>
                    </a>
                    {/* <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a> */}
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Sliver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md "
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaTrashAlt className="text-rose-600 " />
                      </div>
                    </a>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md  ms-2"
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaEdit className="text-emerald-600" />
                      </div>
                    </a>
                    {/* <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a> */}
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Sliver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md "
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaTrashAlt className="text-rose-600 " />
                      </div>
                    </a>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md  ms-2"
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaEdit className="text-emerald-600" />
                      </div>
                    </a>
                    {/* <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a> */}
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Sliver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md "
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaTrashAlt className="text-rose-600 " />
                      </div>
                    </a>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md  ms-2"
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaEdit className="text-emerald-600" />
                      </div>
                    </a>
                    {/* <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a> */}
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Sliver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>
                    <button onClick={() => setOpenModal(true)}
                   
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md "
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaTrashAlt className="text-rose-600 " />
                      </div>
                    </button>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline  dark:text-primary-500  text-md  ms-2"
                    >
                      <div className="border-1 border-white/35 inline-flex p-2 rounded-md">
                        <FaEdit className="text-emerald-600" />
                      </div>
                    </a>
                    {/* <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a> */}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="flex overflow-x-auto sm:justify-center mt-4">
            <Pagination
              currentPage={currentPage}
              totalPages={100}
              onPageChange={onPageChange}
              showIcons
            />
          </div>
        </section>
      </main>

      <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
        <ModalHeader />
        <ModalBody>
          <div className="space-y-6">
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white ">
              Add New Book
            </h3>
        <form action="" className="mt-10">
              <div className="flex justify-between gap-x-3 mb-5">
             <div className="w-full">
                 <div className="mb-3">
              <div className="mb-2 block">
                <Label htmlFor="email">Title</Label>
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <div className="mb-2 block">
                <Label htmlFor="email">Author</Label>
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="max-w-md mb-3">
              <div className="mb-2 block">
                <Label htmlFor="countries">Select your country</Label>
              </div>
              <Select id="countries" required>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </Select>
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="comment">Your message</Label>
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required
                rows={4}
              />
            </div>
            {/* <div>
              <div className="mb-2 block">
                <Label htmlFor="password">Your password</Label>
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-primary-700 hover:underline dark:text-primary-500">
                Lost Password?
              </a>
            </div> */}
          
             </div>
           <div className="flex w-full  justify-center">
            
      <Label
        htmlFor="dropzone-file"
        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        
        <div className="flex flex-col items-center justify-center pb-6 ">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <FileInput id="dropzone-file" className="hidden" />
      </Label>
    </div>
              </div>

            <div className="flex justify-end text-sm font-medium text-gray-500 dark:text-gray-300">
              
                 <Button
              onClick={() => setOpenModal(true)}
              className="!bg-[#1D293D]"
            >
   
            Submit
            </Button>
            
            </div>
                      </form>

          </div>
        </ModalBody>
      </Modal>
      <Modal show={openDelete} size="md" onClose={() => setDelete(false)} popup>
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="red" onClick={() => setDelete(false)}>
                Yes, I'm sure
              </Button>
              <Button color="alternative" onClick={() => setDelete(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Dashboard;
