import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaArrowUp, FaEnvelope, FaPhone, FaHome } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 text-gray-700 py-12 px-4 mt-auto border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About CohortGate */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">About CohortGate</h3>
            <p className="text-sm text-gray-600 text-center md:text-left">
              CohortGate is a platform designed to streamline the onboarding process for companies participating in the NIT Rourkela Cohort event. Join us to connect with top talent and foster innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-blue-600 transition-colors flex items-center">
                  <FaHome className="mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/form" className="hover:text-blue-600 transition-colors">
                  Onboarding Form
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-blue-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:training@cohortgate.com" className="hover:text-blue-600 transition-colors">
                  training@cohortgate.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-blue-600 transition-colors">
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <SiGmail className="mr-2" />
                <a href="mailto:training.nitrkl@gmail.com" className="hover:text-blue-600 transition-colors">
                  training.nitrkl@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Copyright and Back to Top Button */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CohortGate | NIT Rourkela. All rights reserved.
          </p>
          <button
            onClick={handleScrollToTop}
            className="flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <FaArrowUp size={18} className="mr-2" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;