import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className='bg-[#F9FAFB]'>
      <nav className="px-5 py-4 md:flex md:items-center md:justify-between max-w-screen-2xl mx-auto lg:px-10 overflow-x-hidden">
        <div className="flex justify-between items-center gap-2">
            <div className='border border-[#EAECF0 bg-[#EAECF0] p-5 rounded-full'>

            </div>
          <Link to="/">
            <span className="text-xl  text-gray-600 font-bold cursor-pointer">
              ASK-Ai
            </span>
          </Link>

          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={toggleMenu}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </span>
        </div>

        <ul
          className={`md:flex md:items-center z-[+1] md:z-auto md:static absolute bg-[#F9FAFB] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 font-semibold ${
            menuOpen ? 'opacity-100 top-[80px]' : 'opacity-0 top-[-400px]'
            } transition-all ease-in duration-500`}
        >

          <li className="mx-2 my-3 md:my-0">
            <Link to="/" className="text-sm text-gray-700  hover:text-blue-600 duration-600">
              Pricing
            </Link>
          </li>
          <li className="mx-2 my-3 pe-2 md:my-0">
            <Link to="/colleges" className="text-sm text-gray-700 hover:text-blue-600 duration-600">
              Contact Us
            </Link>
          </li>

       
            <li className="mx-2 my-3 md:my-0">
              <button className="bg-[#F9FAFB] text-gray-700  duration-500 px-6 py-2 hover:text-white hover:bg-[#4BA5EB] rounded-md">
                Login
              </button>
            </li>
            <li className="mx-2 my-3 md:my-0">
              <button className="bg-[#4BA5EB] text-white duration-500 px-6 py-2 hover:text-gray-700 hover:bg-[#F9FAFB] rounded-md">
                Sign Up
              </button>
            </li>
      
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
