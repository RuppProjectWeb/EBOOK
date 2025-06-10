import React from 'react'
import gread from "../../public/images/gread.png";
import bread from "../../public/images/bread.png";
import logo from "../../public/images/logo.png";
import ig from "../../public/images/ig.png";
import fb from "../../public/images/fac.png";   
import git from "../../public/images/git.png";
import linkdin from "../../public/images/in.png";      

import { Button } from "flowbite-react";
import { Link } from 'react-router-dom';
const Landing = () => {
    return (
        <div className='min-h-screen  '>
            <div className=" flex   justify-center  p-6 sm:p-12">
                {/* left img */}
                <div className=' w-full h-[50rem]  flex justify-center items-center'>

                    {/* <h1>Image </h1> */}
                    <img src={gread} alt="" />
                </div>
                {/* center content  */}
                <div className=' w-[70rem] items-start m flex flex-col pt-30'>
                    <img src={logo} className='w-[150px] mx-auto' alt="" />

                    <h1 className='font-bold  text-[32px] mx-auto mt-4 mb-6'>StorySurf-EB </h1>
                    <div className='flex  '>
                        <div className='w-2 h-[6rem] bg-gray-900'>

                        </div>
                        <h2 className='font-semibold text-[20px] mx-auto ms-5'>
                            “StorySurf is where every page opens a new world — empowering readers to explore, learn, and imagine, one story at a time.”
                        </h2>
                    </div>
                  <div className='flex mt-13 justify-between'>
                      <Button color="dark" className='px-10 py-7 mr-5' outline>
                        Create an account
                    </Button>
                    <Button   className='!bg-[#2F3542]  text-white px-22 py-7'>Login</Button>
                  </div>

                  {/* contact us  */}

                 <div className='mt-10 '>
                     <h3 className='font-bold text-[14px] mb-6 '>
                    Contact Us :
                  </h3>
                  <ul className='flex space-x-4'>
                    <li>
                        <Link to="https://www.youtube.com/" target='_blank'><img src={git} alt="" /></Link>
                    </li>
                    <li>
                        <Link to="https://www.youtube.com/" target='_blank'><img src={ig} alt="" /></Link>
                    </li>
                    <li>
                        <Link to="https://www.youtube.com/" target='_blank'><img src={fb} alt="" /></Link>
                    </li>
                    <li>
                        <Link to="https://www.youtube.com/" target='_blank'><img src={linkdin} alt="" /></Link>
                    </li>
                    
                  </ul>
                 </div>

                </div>
                {/* right  */}
                <div className=' w-full flex justify-center items-center '>
                    {/* <h1>Image </h1> */}
                    <img src={bread} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Landing