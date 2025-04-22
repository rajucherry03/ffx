import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaChartLine,
  FaPaintBrush,
  FaDatabase,
  FaNetworkWired,
} from 'react-icons/fa';

// Import your images
import fullStackImage from '../images/full-stack.png';
import dataAnalyticsImage from '../images/data-analytics.png';
import uiUxDesignImage from '../images/ui-ux-design.png';
import databaseManagementImage from '../images/database-management.png';
import networkingSecurityImage from '../images/networking-security.png';

function Internships() {
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const internships = [
    {
      title: "Full Stack Development",
      icon: <FaLaptopCode className="text-3xl text-gray-600" />,
      fee: "₹1,999",
      duration: "6 Weeks",
      mode: "Online",
      certificate: "Yes (With Project Completion)",
      tools: "HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Firebase, Git",
      description: "Gain hands-on experience in MERN stack development, build full-fledged web applications with real-time Firebase integration.",
      image: fullStackImage,
    },
    {
      title: "Data Analytics",
      icon: <FaChartLine className="text-3xl text-gray-600" />,
      fee: "Free",
      duration: "4 Weeks",
      mode: "Online",
      certificate: "Yes",
      tools: "Python, Pandas, NumPy, Matplotlib, Power BI, Tableau",
      description: "Work on datasets, learn data cleaning, visualization, and dashboarding with advanced tools like Power BI and Tableau.",
      image: dataAnalyticsImage,
    },
    {
      title: "UI/UX Design",
      icon: <FaPaintBrush className="text-3xl text-gray-600" />,
      fee: "₹999",
      duration: "5 Weeks",
      mode: "Hybrid",
      certificate: "Yes",
      tools: "Figma, Adobe XD, Sketch, Miro, Balsamiq",
      description: "Design modern user interfaces and experience flows, create prototypes using Figma and Adobe XD.",
      image: uiUxDesignImage,
    },
    {
      title: "Database Management",
      icon: <FaDatabase className="text-3xl text-gray-600" />,
      fee: "₹799",
      duration: "4 Weeks",
      mode: "Online",
      certificate: "Yes",
      tools: "MySQL, MongoDB, Firebase, SQL Workbench",
      description: "Master database management with a focus on both relational and NoSQL databases, including optimization and real-time data integration.",
      image: databaseManagementImage,
    },
    {
      title: "Networking & Cybersecurity",
      icon: <FaNetworkWired className="text-3xl text-gray-600" />,
      fee: "₹1,499",
      duration: "6 Weeks",
      mode: "Offline",
      certificate: "Yes (With Final Assessment)",
      tools: "Wireshark, Cisco Packet Tracer, Kali Linux, Nmap",
      description: "Learn network configuration, monitoring, ethical hacking, and security implementation to safeguard data.",
      image: networkingSecurityImage,
    },
  ];

  const handleApplyClick = (internship) => {
    setSelectedInternship(internship);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInternship(null);
  };

  const handleApply = () => {
    // Handle the apply functionality here
    alert(`You have applied for the ${selectedInternship.title} internship.`);
    setIsModalOpen(false); // Close the modal after applying
  };

  return (
    <section id="internships" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Explore <span className="text-gray-600">Internships</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-80 md:w-72 lg:w-80 bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer"
            >
              <a href="#" onClick={(e) => e.preventDefault()}>
                <img
                  className="w-full h-48 object-cover p-4 rounded-t-lg"
                  src={internship.image}
                  alt={`${internship.title} image`}
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-800">{internship.title}</h5>
                </a>

                {/* Icon and Rating Section */}
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="bg-gray-200 text-gray-600 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">5.0</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-800">{internship.fee}</span>
                  <button
                    className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={() => handleApplyClick(internship)} // Trigger modal on Apply Now click
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedInternship && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 font-semibold"
              onClick={handleCloseModal} // Close the modal
            >
              X
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{selectedInternship.title}</h2>
            <img
              src={selectedInternship.image}
              alt={selectedInternship.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <p className="text-gray-700 mb-4">{selectedInternship.description}</p>
            <ul className="text-gray-700">
              <li><strong>Duration:</strong> {selectedInternship.duration}</li>
              <li><strong>Mode:</strong> {selectedInternship.mode}</li>
              <li><strong>Fee:</strong> {selectedInternship.fee}</li>
              <li><strong>Certificate:</strong> {selectedInternship.certificate}</li>
              <li><strong>Tools:</strong> {selectedInternship.tools}</li>
            </ul>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
              onClick={handleApply}
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Internships;
