import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
       <div>
        <h3 className="text-xl font-bold mb-4">About Us</h3>
        <p className="text-gray-400 mb-4">
          We are NITians working upon <br />Open-Source project and contributing.
        </p>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/nitrkl1/" target="_blank" className="text-gray-400 hover:text-white transition">
                   <FaFacebook size={20} />
          </a>
          <a href="https://x.com/nitrourkela" target="_blank" className="text-gray-400 hover:text-white transition">

            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/nitrourkela1961" target="_blank" className="text-gray-400 hover:text-white transition">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com/school/national-institute-of-technology-rourkela" target="_blank" className="text-gray-400 hover:text-white transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.youtube.com/@nitrourkela1961" target="_blank" className="text-gray-400 hover:text-white transition">
            <FaYoutube size={20} />
          </a>
        </div>
          </div>

          {/* LINKOOS */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About</a></li>

              <li><a href="/portfolio" className="text-gray-400 hover:text-white transition">Portfolio</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><a href="/FAQ" className="text-gray-400 hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
            <li className="flex items-start">
              <MdLocationOn className="mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-400"><a href="https://www.google.com/maps/place/NIT Rourkela" target="_blank">National Institute of Technology, Rourkela, Odisha, India, 769008</a></span>
            </li>
            <li className="flex items-center">
              <MdPhone className="mr-2" />
              <span className="text-gray-400">(0661) 246 - 2020 / 2002</span>
            </li>
            <li className="flex items-center">
              <MdEmail className="mr-2" />
              <span className="text-gray-400">registrar@nitrkl.ac.in</span>
            </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Subscribe to Newsletter</h3>
              <p className="text-gray-400">Get the latest updates and news</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NIT Rourkela. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="/PrivacyPolicy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/termsofservice" className="hover:text-white transition">Terms of Service</a>
            <a href="/cookiepolicy" className="hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;