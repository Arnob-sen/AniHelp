import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isConsultancyDropdownOpen, setConsultancyDropdownOpen] = useState(false);
    const [isNavbarOpen, setNavbarOpen] = useState(true);

    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
      };
    const toggleConsultancyDropdown = () => {
        setConsultancyDropdownOpen(!isConsultancyDropdownOpen);
    };
  return (
    <>     
        <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center">
                <img src="logo.jpg" class="h-11 mr-3" alt="AniHelp Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AniHelp</span>
            </a>
            <button
            onClick={toggleNavbar}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className={`w-full md:w-auto ${isNavbarOpen ? 'block' : 'hidden'}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <a href="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                </li>
                <li>
                <button
                  onClick={toggleConsultancyDropdown}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Consultancy
                </button>
                {isConsultancyDropdownOpen && (
                  <div className="absolute z-10 mt-2 space-y-2 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <p className="px-4 py-2 text-gray-700 dark:text-white">Select Animal</p>
                    <a href="/bird" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    POULTRY
                    </a>
                    <a href="/fish" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    FISH
                    </a>
                    <a href="/cattle" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    CATTLE
                    </a>
                    <a href="/other" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    DOG
                    </a>
                    <a href="/other" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    CAT
                    </a>
                    <a href="/other" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    RABBIT
                    </a>
                    <a href="/cattle" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    HORSE
                    </a>
                    <a href="/bird" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    BIRD
                    </a>
                  </div>
                  )}
                </li>
                <li>
                <a href="/medicine" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Medicine</a>
                </li>
                <li>
                  <a href="/food" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Food</a>
                </li>
                <li>
                  <a href="/symtoms" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Symtoms</a>
                </li>
                <li>
                    <Link to="/signup" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register as Doctor</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar
