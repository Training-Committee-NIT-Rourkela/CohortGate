import React from "react";
import {
  FaLinkedin,
  FaXTwitter,
  FaGithub,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 text-gray-700 py-10 px-6 border-t border-gray-200 rounded-t-md ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        <div className="flex flex-col items-center md:items-start text-center md:text-left ml-10">
          <h3 className="text-lg font-semibold mb-4">About CohortGate</h3>
          <p className="text-sm text-gray-600">
            Welcome to CohortGate, a web application designed to streamline the
            onboarding process for companies participating in Cohort.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start ml-10">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-blue-600 flex items-center">
                {/* <FaHome className="mr-2" /> */}
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/form" className="hover:text-blue-600">
                Onboarding Form
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-blue-600">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start ml-10">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a
                href="mailto:training@cohortgate.com"
                className="hover:text-blue-600"
              >
                training@cohortgate.com
              </a>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              <a href="tel:+1234567890" className="hover:text-blue-600">
                +123 456 7890
              </a>
            </li>
            <li className="flex items-center">
              <SiGmail className="mr-2" />
              <a
                href="mailto:training.nitrkl@gmail.com"
                className="hover:text-blue-600"
              >
                training.nitrkl@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start ml-10">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-700 hover:text-blue-400 transition"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://github.com/Training-Committee-NIT-Rourkela/CohortGate"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-700 hover:text-blue-400 transition"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      <div className="flex flex-col md:flex-row items-center justify-between ml-10">
        <p className="text-sm text-gray-600 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} CohortGate | NIT Rourkela. All
          rights reserved.
        </p>
        <button
          onClick={handleScrollToTop}
          className="flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-lg"
        >
          <FaArrowUp size={18} className="mr-2" />
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
