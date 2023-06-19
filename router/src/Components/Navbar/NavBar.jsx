import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className=' w-screen h-20 bg-slate-500 '>
          <ul className=' flex justify-center flex-row px-15 py-5'>
            <li className=' text-white font-bold text-2xl px-10'>
                <Link to="/Homepage">
                    Home
                </Link>
            </li>
            <li className=' text-white font-bold text-2xl px-10'>
                <Link to='/Contact'>
                    Contact Us
                </Link>
            </li>
            <li className=' text-white font-bold text-2xl px-10'>
                <Link to= "/Blog">
                Blog
                </Link>
            </li>
            <li className=' text-white font-bold text-2xl px-10'>
                <Link to='/About'>
                About Us
                </Link>
            </li>
            <li className=' text-white font-bold text-2xl px-10 hover:text-violet-600'>
                <Link to='/Products'>
                Our Products
                </Link>
            </li>
            <li className=' text-white font-bold text-2xl px-10'>
                <Link to='/Services'>
                Services
                </Link>
            </li>
          </ul>
        </div>
    );
}

export default NavBar;



