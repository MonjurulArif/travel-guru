import React from "react";
import { Link } from "react-router-dom";
import logo4 from "../assets/logo4.png";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="">
      <nav className="relative flex items-center h-[70px] w-full z-10">
        <img src={logo4} alt="" height={56} width={120} className=" ml-[25px]  md:ml-[25px] lg:ml-[100px] mt-[35px] " />
        <div className=" flex items-center w-[300px] md:w-[410px]  lg:w-[770px] h-[44px] mt-[39px] ml-[25px]  md:ml-[22px] lg:ml-[70px] border-solid border-2 rounded border-inputBackground bg-inputDivBackground">
          <div className="w-6 h-6 ml-3 mt-3 items-center justify-center text-white ">
            <FaSearch></FaSearch>
          </div>
          <input type="text" placeholder="Search Your Destination..." name="" id="" className=" outline-none text-yellow-300  bg-transparent placeholder-inputBackground w-auto" />
        </div>
        <div className="hidden md:flex mt-[39px] ml:4 md:ml-6 lg:ml-22 md:mr-2 lg:mr-12  items-center justify-between w-full  text-white text-lg">
          <Link to="/news" className="">
            News
          </Link>
          <Link to="/destination" className="">
            Destination
          </Link>
          <Link to="/blog" className="">
            Blog
          </Link>
          <Link to="/contact" className="">
            Contact
          </Link>
          <div className=" flex w-[104px] h-[44px] items-center justify-center bg-buttonBackground text-black font-bold rounded-[4px]">
            <Link to="/login">Login</Link>
          </div>
        </div>
        <div onClick={handleNav} className=" flex md:hidden w-full justify-end mr-4 pt-[39px] text-cyan-400 font-bold">
          <div className="flex items-center p-2 bg-black">{!nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}</div>
        </div>
        <div
          className={
            !nav
              ? "md:hidden fixed top-[78px] right-0 w-[25%] bg-inputDivBackground text-white text-lg ease-in-out duration-500 "
              : "md:hidden fixed top-[78px] right-[-200px] text-lg ease-out duration-500"
          }
        >
          <ul>
            <li className="mt-2 pb-2 border-b border-b-gray-600">
              <Link to="/news" className="p-7 ">
                News
              </Link>
            </li>
            <li className="mt-2 pb-2 border-b border-b-gray-600">
              <Link to="/destination" className="p-7 ">
                Destination
              </Link>
            </li>
            <li className="mt-2 pb-2 border-b border-b-gray-600">
              <Link to="/blog" className="p-7">
                Blog
              </Link>
            </li>
            <li className="mt-2 pb-2 border-b border-b-gray-600">
              <Link to="/contact" className="p-7">
                Contact
              </Link>
            </li>
            <div className=" flex w-full h-[44px] items-center pl-7 bg-buttonBackground text-black font-bold rounded-[4px]">
              <li>
                <Link to="/login">Login</Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

// return (
// <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
// <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
// <ul className='hidden md:flex'>
//   <li className='p-4'>Home</li>
//   <li className='p-4'>Company</li>
//   <li className='p-4'>Resources</li>
//   <li className='p-4'>About</li>
//   <li className='p-4'>Contact</li>
// </ul>
// <div onClick={handleNav} className='block md:hidden'>
//     {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
// </div>
// <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
//   <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
//     <li className='p-4 border-b border-gray-600'>Home</li>
//     <li className='p-4 border-b border-gray-600'>Company</li>
//     <li className='p-4 border-b border-gray-600'>Resources</li>
//     <li className='p-4 border-b border-gray-600'>About</li>
//     <li className='p-4'>Contact</li>
// </ul>
// </div>
// );
