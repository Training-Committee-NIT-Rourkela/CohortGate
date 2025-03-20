import React from "react";
import { motion } from "framer-motion"; // For animations

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
        {/* Left Section: Text Content */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold">About the Training Committee</h2>
          <p className="text-lg">
            The Training Committee of NIT Rourkela is dedicated to equipping students with industry-ready skills through workshops, mentorship programs, and hackathons.
          </p>

          <h2 className="text-2xl font-semibold">About Cohorts</h2>
          <p className="text-lg">
            Cohorts is a dynamic hackathon platform fostering innovation, collaboration, and problem-solving among students.
          </p>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/assets/about-us.png" 
            alt="Training Committee" 
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
