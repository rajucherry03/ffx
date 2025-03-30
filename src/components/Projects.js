import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaBolt, FaBookOpen, FaSchool, FaUsers } from 'react-icons/fa';

function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const projects = [
    {
      title: "CampusHub360",
      icon: <FaUniversity className="text-3xl text-cyan-accent" />, 
      description: "A fully digital dues clearance system designed for educational institutions. It streamlines department-wise approvals and ensures transparency for students and faculty. Successfully deployed with over 3000 active users, leveraging React for UI, Tailwind CSS for styling, and Firebase for real-time database management.",
    },
    {
      title: "Advanced Energy Management System (AEMS)",
      icon: <FaBolt className="text-3xl text-cyan-accent" />, 
      description: "An AI-powered system that monitors and optimizes energy usage by integrating IoT devices. It utilizes renewable energy sources such as solar, wind, and piezoelectric sensors to maximize efficiency. AEMS provides real-time insights and predictive analytics for better energy consumption management.",
    },
    {
      title: "Learning Management System (LMS)",
      icon: <FaBookOpen className="text-3xl text-cyan-accent" />, 
      description: "An advanced e-learning platform developed by FutureForgeX, designed to manage online courses, content uploads, user enrollments, and assessments. Built using React for a seamless user experience, Tailwind CSS for modern UI, and Firebase for real-time data synchronization and cloud-based storage.",
    },
    {
      title: "SchoolHub360",
      icon: <FaSchool className="text-3xl text-cyan-accent" />, 
      description: "A tailored solution for school administrators to manage dues clearance for students and staff efficiently. SchoolHub360 automates the clearance process, ensuring smooth operations, reducing manual workload, and enhancing financial transparency within educational institutions.",
    },
    {
      title: "Employee Management System",
      icon: <FaUsers className="text-3xl text-cyan-accent" />, 
      description: "A robust HR management platform that streamlines employee records, payroll processing, attendance tracking, and performance evaluations. Designed to enhance workforce efficiency, this system provides role-based access control, automated reporting, and secure data storage.",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
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
          {projects.map((project, index) => (
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
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-dark-blue">{project.title}</h3>
              <p className="mb-4 text-gray-600 leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
