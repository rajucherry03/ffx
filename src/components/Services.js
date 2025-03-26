import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaNetworkWired, 
  FaDatabase, 
  FaGlobe, 
  FaCheckCircle, 
  FaTools, 
  FaIndustry, 
  FaServer 
} from 'react-icons/fa';

function Services() {
  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut' 
      }
    }
  };

  // Animation for the header text
  const headerVariants = {
    hidden: { opacity: 0, letterSpacing: '0.5em' },
    visible: { 
      opacity: 1, 
      letterSpacing: '0.1em', 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut' 
      }
    }
  };

  return (
    <section 
      id="services" 
      className="py-20 bg-dark-blue text-white relative"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-mosaic.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          Our <span className="text-cyan-accent">Services</span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1: Custom Software Development */}
          <motion.div
            className="relative p-6 bg-white text-dark-blue rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-cyan-accent/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-accent to-purple-accent rounded-t-lg"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaCode className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-dark-blue">Custom Software Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Creating tailor-made solutions to meet your specific business needs, ensuring efficiency and scalability.
            </p>
          </motion.div>

          {/* Service 2: Programming, Networking & Security */}
          <motion.div
            className="relative p-6 bg-white text-dark-blue rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-cyan-accent/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-accent to-purple-accent rounded-t-lg"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaNetworkWired className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-dark-blue">Programming, Networking & Security</h3>
            <p className="text-gray-600 leading-relaxed">
              Offering programming, networking, and security services to ensure your software operates efficiently and securely.
            </p>
          </motion.div>

          {/* Service 3: Data Science Services */}
          <motion.div
            className="relative p-6 bg-white text-dark-blue rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-cyan-accent/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-accent to-purple-accent rounded-t-lg"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaDatabase className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-dark-blue">Data Science Services</h3>
            <p className="text-gray-600 leading-relaxed">
              Providing data science consulting, integration, and development to help businesses analyze and utilize data effectively.
            </p>
          </motion.div>

          {/* Service 4: Web Apps & Corporate Systems */}
          <motion.div
            className="relative p-6 bg-white text-dark-blue rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-cyan-accent/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-accent to-purple-accent rounded-t-lg"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaGlobe className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-dark-blue">Web Apps & Corporate Systems</h3>
            <p className="text-gray-600 leading-relaxed">
              Developing advanced web applications and corporate systems for automation and easy resource access.
            </p>
          </motion.div>

          {/* Service 5: Quality Assurance & Testing */}
          <motion.div
            className="relative p-6 bg-white text-dark-blue rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-cyan-accent/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-accent to-purple-accent rounded-t-lg"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaCheckCircle className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-dark-blue">Quality Assurance & Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Conducting multiple levels of testing to ensure your software functions correctly and meets quality standards.
            </p>
          </motion.div>

          {/* Service 6: Maintenance & Support */}
          <motion.div
            className="relative p-6 bg-white text-dark-blue rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-cyan-accent/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{ delay: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-accent to-purple-accent rounded-t-lg"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaTools className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-dark-blue">Maintenance & Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Offering ongoing maintenance and support to ensure your software continues to operate smoothly.
            </p>
          </motion.div>

          {/* Service 7: Industry-Specific Product Development */}
          <motion.div
            className="relative p-6 bg-white text-dark-blue rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-cyan-accent/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{ delay: 0.7 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-accent to-purple-accent rounded-t-lg"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaIndustry className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-dark-blue">Industry-Specific Product Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Specializing in product development for fintech, healthcare, retail, and other industries, driving innovation with custom solutions.
            </p>
          </motion.div>

          {/* Service 8: Network Services */}
          <motion.div
            className="relative p-6 bg-white text-dark-blue rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-cyan-accent/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{ delay: 0.8 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-accent to-purple-accent rounded-t-lg"></div>
            <div className="flex justify-center mb-4 mt-4">
              <FaServer className="text-3xl text-cyan-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-dark-blue">Network Services</h3>
            <p className="text-gray-600 leading-relaxed">
              Providing setup, installation, and management of advanced networks critical for business operations.
            </p>
          </motion.div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="bg-gradient-to-r from-cyan-accent to-purple-accent text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;