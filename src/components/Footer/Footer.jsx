import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 fixed bottom-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Training Committee</h3>
            <p className="text-gray-600 dark:text-gray-400">Email: training@committee.com</p>
            <p className="text-gray-600 dark:text-gray-400">Phone: +123456789</p>
          </div>

          <div className="flex justify-center">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Training-Committee-NIT-Rourkela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  <FaGithub size={24} />
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <ul className="flex justify-center md:justify-end space-x-4">
              <li>
                <a
                  href="/about-us"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/form"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Form
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            onClick={scrollToTop}
            className="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
            aria-label="Back to Top"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
