import React from "react";
import { motion } from "framer-motion";
import trainingCommitteeImg from "../../assets/NITRLOGO-.png";
import cohortsImg from "../../assets/NITRLOGO-.png";
import dummyImg from "../../assets/dummy.jpeg";

// Team member data (Replace with actual images)
const teamMembers = [
  { name: "Jayesh Nayak", img: dummyImg },
  { name: "Prayant Mohanty", img: dummyImg },
  { name: "Omkar Amlan Krishna", img: dummyImg },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutUs = () => {
  return (
    <motion.div
      className="container mx-auto px-6 lg:px-20 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Training Committee Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Training Committee
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            The Training Committee is responsible for guiding and mentoring
            students to enhance their technical and problem-solving skills. Our
            mission is to provide structured learning paths and ensure a solid
            foundation for aspiring developers.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={itemVariants}
        >
          <img
            src={trainingCommitteeImg}
            alt="Training Committee"
            className="w-full md:w-3/4 lg:w-2/3 rounded-xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* Cohorts Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Cohorts & Objectives
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Our hackathon cohorts bring together passionate individuals to solve
            real-world problems through technology. The objective is to foster
            innovation, teamwork, and skill-building in a competitive and
            collaborative environment.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={itemVariants}
        >
          <img
            src={cohortsImg}
            alt="Cohorts"
            className="w-full md:w-3/4 lg:w-2/3 rounded-xl shadow-lg"
          />
        </motion.div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
        <div className="flex justify-center gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full shadow-lg object-cover"
              />
              <p className="mt-3 text-lg font-medium text-gray-800">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
