import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaNetworkWired,
  FaDatabase,
  FaGlobe,
  FaCheckCircle,
  FaTools,
  FaIndustry,
  FaServer,
} from "react-icons/fa";

function Services() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, letterSpacing: "0.5em" },
    visible: {
      opacity: 1,
      letterSpacing: "0.1em",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="relative py-20 text-white bg-white">
      {/* Background Video */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-dark-blue"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          Our <span className="text-cyan-accent">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Cards */}
          {[
            { icon: FaCode, title: "Custom Software Development", desc: "Creating tailor-made solutions for business needs." },
            { icon: FaNetworkWired, title: "Networking & Security", desc: "Ensuring efficient and secure software operation." },
            { icon: FaDatabase, title: "Data Science Services", desc: "Analyzing and utilizing data effectively." },
            { icon: FaGlobe, title: "Web Apps & Corporate Systems", desc: "Building advanced web solutions for automation." },
            { icon: FaCheckCircle, title: "Quality Assurance & Testing", desc: "Ensuring software quality with multiple tests." },
            { icon: FaTools, title: "Maintenance & Support", desc: "Ongoing maintenance for seamless operation." },
            { icon: FaIndustry, title: "Industry-Specific Development", desc: "Custom solutions for various industries." },
            { icon: FaServer, title: "Network Services", desc: "Advanced network setup and management." }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-white text-dark-blue rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-cyan-accent/50"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-accent to-purple-accent rounded-t-lg"></div>
              <div className="flex justify-center mb-4 mt-4">
                <service.icon className="text-3xl text-cyan-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark-blue">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
