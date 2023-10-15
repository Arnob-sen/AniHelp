import React, { useState } from 'react';
import logo from './logo.jpg';

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (index) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Define your modal content as an array
  const modals = [
    {
      title: 'Meet Silicon Serenity',
      content: 'We are a team of tech-savvy animal lovers who believe that every animal deserves the best care possible. That’s why we built AniHelp, a web platform that offers online veterinary services for animal and pet owners across different domains.',
    },
    {
      title: 'Contact',
      content: 'Kaykobad Hossain Tanjil (Phone: +8801927363593)',
    },
  ];

  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src={logo} className="h-14 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AniHelp</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {modals.map((modal, index) => (
              <li key={index}>
                <button className="mr-4 hover:underline md:mr-6" onClick={() => openModal(index)}>
                  {modal.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="/" className="hover:underline">Silicon Serenity</a>. All Rights Reserved.
        </span>
      </div>

      {activeModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-75" onClick={closeModal}></div>
          <div className="bg-white shadow-lg p-4 max-w-md rounded-lg z-10">
            <h2 className="text-2xl font-bold mb-4">{modals[activeModal].title}</h2>
            <p>{modals[activeModal].content}</p>
            <button className="hover:text-red-600" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
