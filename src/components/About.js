import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaRocket, FaStar, FaLightbulb } from "react-icons/fa";

function About() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 w-full flex items-center justify-center bg-gray-100"
    >
      <div className="relative z-10 container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-cyan-500">FutureForgeX</span>
        </motion.h2>

        {/* Company Name and Contact */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            FUTUREFORGEX PRIVATE LIMITED
          </h3>
          <p className="text-gray-600 mb-1 text-sm">
            📍 14-239, Current Colony, B Kothakota, Chittoor-517370,
            <br />
            Madanapalle, Andhra Pradesh
          </p>
          <p className="text-gray-600 text-sm">
            📞{" "}
            <a
              href="tel:+918499956365"
              className="text-cyan-600 hover:underline"
            >
              8499956365
            </a>{" "}
            &nbsp; | &nbsp; 📧{" "}
            <a
              href="mailto:futureforgex.pvt@gmail.com"
              className="text-cyan-600 hover:underline"
            >
              futureforgex.pvt@gmail.com
            </a>
          </p>
        </motion.div>

        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Who We Are
          </h3>
          <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
            FutureForgeX is a forward-thinking technology startup dedicated to
            delivering innovative, user-centric software solutions. We integrate
            agile development practices with cutting-edge AI and ML to drive
            digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: FaEye,
              title: "Our Vision",
              desc: "Our vision is to be a transformative leader in the technology sector by empowering businesses with software solutions that are both innovative and user-friendly.",
            },
            {
              icon: FaRocket,
              title: "Our Mission",
              desc: "At FutureForgeX, our mission is to provide high-quality software products through agile methodologies, focusing on innovation, advanced technologies, and user-centric design.",
            },
            {
              icon: FaStar,
              title: "Our Core Values",
              desc: "We value innovation, agility, quality, customer focus, and integrity, ensuring we deliver exceptional software solutions.",
            },
            {
              icon: FaLightbulb,
              title: "Innovation & Technology",
              desc: "We harness AI and ML to forecast trends, enhance user experience, optimize operations, and maintain a competitive advantage in the ever-evolving tech landscape.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-cyan-500/50"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-t-lg"></div>
              <div className="flex justify-center mb-4 mt-4">
                <item.icon className="text-3xl text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
