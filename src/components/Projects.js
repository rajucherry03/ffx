import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaCogs, FaMobileAlt, FaShoppingCart, FaCloud } from 'react-icons/fa';

function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: 'easeOut' 
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-200"
    >
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-dark-blue"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="text-cyan-accent">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="relative p-6 bg-white text-dark-blue shadow-lg rounded-lg overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-accent to-purple-accent"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaChartLine className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-dark-blue">AI-Powered Analytics Platform</h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Developed an AI-driven analytics platform for a retail client, enabling real-time trend forecasting and inventory optimization using machine learning.
            </p>
            <button className="bg-gradient-to-r from-cyan-accent to-purple-accent text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </motion.div>

          <motion.div
            className="relative p-6 bg-white text-dark-blue shadow-lg rounded-lg overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-accent to-purple-accent"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaCogs className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-dark-blue">Enterprise Resource Planning System</h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Built a scalable ERP system for a manufacturing company, streamlining operations and improving efficiency across departments.
            </p>
            <button className="bg-gradient-to-r from-cyan-accent to-purple-accent text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </motion.div>

          <motion.div
            className="relative p-6 bg-white text-dark-blue shadow-lg rounded-lg overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-accent to-purple-accent"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaMobileAlt className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-dark-blue">Mobile Banking App</h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Designed and developed a secure, user-friendly mobile banking app with features like real-time transactions and financial insights.
            </p>
            <button className="bg-gradient-to-r from-cyan-accent to-purple-accent text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </motion.div>

          <motion.div
            className="relative p-6 bg-white text-dark-blue shadow-lg rounded-lg overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-accent to-purple-accent"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaShoppingCart className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-dark-blue">E-Commerce Web Platform</h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Created a responsive e-commerce platform with integrated payment gateways and personalized product recommendations using AI.
            </p>
            <button className="bg-gradient-to-r from-cyan-accent to-purple-accent text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </motion.div>

          <motion.div
            className="relative p-6 bg-white text-dark-blue shadow-lg rounded-lg overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-accent to-purple-accent"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaCloud className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-dark-blue">Digital Transformation Consulting</h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Provided consulting services to a healthcare provider, implementing cloud-based solutions to enhance patient data management.
            </p>
            <button className="bg-gradient-to-r from-cyan-accent to-purple-accent text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;