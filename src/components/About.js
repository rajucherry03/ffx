import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaRocket, FaStar, FaLightbulb } from 'react-icons/fa';

function About() {
  // Animation variants for the cards
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
      id="about" 
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 relative"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.h2 
          className="text-4xl font-bold text-center text-dark-blue mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-cyan-accent">FutureForgeX</span>
        </motion.h2>

        {/* Company Overview */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-dark-blue mb-4">Who We Are</h3>
          <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
            FutureForgeX is a forward-thinking technology startup dedicated to delivering innovative, user-centric software solutions. We integrate agile development practices with cutting-edge artificial intelligence (AI) and machine learning (ML) to drive digital transformation across diverse corporate sectors.
          </p>
        </motion.div>

        {/* Grid for Vision, Mission, Core Values, and Innovation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Vision Statement */}
          <motion.div
            className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-accent to-purple-accent rounded-t-lg"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaEye className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold text-dark-blue mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to be a transformative leader in the technology sector by empowering businesses with software solutions that are both innovative and user-friendly.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-accent to-purple-accent rounded-t-lg"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaRocket className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold text-dark-blue mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              At FutureForgeX, our mission is to provide high-quality software products through agile methodologies. We are dedicated to innovative ideation, agile development, advanced technologies, and user-centric design.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-accent to-purple-accent rounded-t-lg"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaStar className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold text-dark-blue mb-3">Our Core Values</h3>
            <ul className="text-gray-600 list-disc list-inside leading-relaxed">
              <li>Innovation</li>
              <li>Agility</li>
              <li>Quality</li>
              <li>Customer Focus</li>
              <li>Integrity</li>
            </ul>
          </motion.div>

          {/* Innovation & Technology Focus */}
          <motion.div
            className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-accent to-purple-accent rounded-t-lg"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaLightbulb className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold text-dark-blue mb-3">Innovation & Technology Focus</h3>
            <p className="text-gray-600 leading-relaxed">
              We harness AI and ML to forecast trends, enhance user experience, optimize operations, and maintain a competitive advantage in the ever-evolving tech landscape.
            </p>
          </motion.div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="bg-gradient-to-r from-cyan-accent to-purple-accent text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;