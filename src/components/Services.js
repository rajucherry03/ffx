import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaGlobe, FaTools, FaMobileAlt, FaDraftingCompass, FaChalkboardTeacher } from "react-icons/fa";

function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services = [
    {
      icon: <FaCode className="text-3xl text-cyan-accent" />, 
      title: "Custom Software Development", 
      description: "We build tailor-made software solutions that meet your business needs. Our expertise spans web applications, enterprise software, automation tools, and scalable cloud-based platforms."
    },
    {
      icon: <FaGlobe className="text-3xl text-cyan-accent" />, 
      title: "Web Apps & Corporate Systems", 
      description: "We specialize in developing advanced web solutions for businesses, including ERP systems, customer portals, and AI-powered platforms, ensuring seamless automation and efficiency."
    },
    {
      icon: <FaTools className="text-3xl text-cyan-accent" />, 
      title: "Maintenance & Support", 
      description: "Our team ensures continuous software updates, security enhancements, and performance optimizations to keep your applications running smoothly without disruptions."
    },
    {
      icon: <FaMobileAlt className="text-3xl text-cyan-accent" />, 
      title: "Mobile Application Development", 
      description: "We create high-performance mobile applications for both iOS and Android platforms. Our solutions range from e-commerce apps to on-demand service platforms and enterprise mobility solutions."
    },
    {
      icon: <FaDraftingCompass className="text-3xl text-cyan-accent" />, 
      title: "Software Prototyping", 
      description: "We develop interactive prototypes that help validate ideas before full-scale development. This approach ensures product refinement and better user experience based on feedback."
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl text-cyan-accent" />, 
      title: "Internships & Online Courses", 
      description: "We offer hands-on internships and online courses in various domains, including AI/ML, Web Development, Cybersecurity, and more, providing real-world project experience to learners."
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-dark-blue"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="text-cyan-accent">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-white text-dark-blue shadow-lg rounded-lg overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-accent to-purple-accent"></div>
              <div className="flex justify-center mb-4 mt-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-dark-blue">{service.title}</h3>
              <p className="mb-4 text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;