import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark-blue text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between text-center md:text-left">
          
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-3">Company</h4>
            <ul>
              <li><a href="/about" className="hover:text-cyan-accent">About Us</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-3">Policies</h4>
            <ul>
              <li><a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-accent">Privacy Policy</a></li>
              <li><a href="/terms-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-accent">Terms & Conditions</a></li>
              <li><a href="/refund-policy" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-accent">Refund & Cancellation</a></li>
              <li><a href="/internship-policy" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-accent">Internship Policy</a></li>
            </ul>
          </div>

          {/* Education & Training */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-3">Education & Training</h4>
            <ul>
              <li><a href="/course-terms" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-accent">Course Terms</a></li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <ul className="flex space-x-4 justify-center md:justify-start">
              <li>
                <a href="https://x.com/FutureForgeX" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-accent transition-transform transform hover:scale-110">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/futureforgex/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-accent transition-transform transform hover:scale-110">
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a href="https://github.com/futureforgex" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-accent transition-transform transform hover:scale-110">
                  <FaGithub size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/futureforgex.pvt/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-accent transition-transform transform hover:scale-110">
                  <FaInstagram size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6">
          <p>© 2025 FutureForgeX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;