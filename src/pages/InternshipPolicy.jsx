import React, { useEffect } from "react";
import logo from "../assets/ffxnobg.png"; // Adjust path if needed

const InternshipPolicy = () => {
  useEffect(() => {
    // Scroll to the top when the component is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full h-[80px] flex items-center justify-center bg-dark-blue shadow-md">
        <img
          src={logo}
          alt="FutureForgeX"
          className="w-[140px] h-auto object-contain rounded-lg mr-4"
        />
        <h1 className="text-white text-xl sm:text-2xl font-semibold">
          FUTURE FORGEX PRIVATE LIMITED
        </h1>
      </header>

      {/* Main content area */}
      <div className="flex-1 p-6 text-gray-800">
        <h1 className="text-3xl font-semibold mb-6 text-center">INTERNSHIP POLICY</h1>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">INTRODUCTION</h2>
        <p className="mb-4 text-justify">
          FutureForgeX offers structured internships and courses designed to enhance learning, skill development, and career growth in software development. Our programs provide hands-on experience and professional exposure to students and aspiring professionals.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">ELIGIBILITY</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Students currently enrolled in a recognized university or college in a relevant field (e.g., Computer Science, Information Technology, Engineering).</li>
          <li>Recent graduates seeking practical experience in software development.</li>
          <li>Professionals looking to upskill or transition into software-related roles.</li>
        </ul>
        <p className="mb-4 text-justify">Specific prerequisites may apply depending on the internship or course.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">APPLICATION PROCESS</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Submit an online application through the FutureForgeX website.</li>
          <li>Provide a resume, academic transcripts, and any required portfolios or project samples.</li>
          <li>Participate in an interview or assessment, if shortlisted.</li>
        </ul>
        <p className="mb-4 text-justify">Applications are reviewed on a rolling basis, and selected candidates will be notified via email.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">STIPEND & CERTIFICATION</h2>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Paid Internships:</strong> Select internships provide a stipend based on the role, duration, and performance.</li>
          <li><strong>Unpaid Internships:</strong> Focus on skill development and offer a certificate upon successful completion.</li>
        </ul>
        <p className="mb-4 text-justify">All interns who meet the program’s objectives will receive a certificate of completion.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">CODE OF CONDUCT</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Adhere to FutureForgeX’s professional standards and workplace etiquette.</li>
          <li>Respect confidentiality and intellectual property agreements.</li>
          <li>Complete assigned tasks and projects within deadlines.</li>
          <li>Participate actively in training sessions and team meetings.</li>
          <li>Maintain a respectful attitude towards mentors, peers, and staff.</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">INTELLECTUAL PROPERTY</h2>
        <p className="mb-4 text-justify">Any work, software, or projects developed during the internship remain the intellectual property of FutureForgeX unless otherwise agreed in writing.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">CONFIDENTIALITY</h2>
        <p className="mb-4 text-justify">Interns may have access to sensitive information. All participants must sign a confidentiality agreement to protect this information during and after the program.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">TERMINATION</h2>
        <p className="mb-4 text-justify">FutureForgeX reserves the right to terminate an internship if:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>The participant violates the code of conduct or confidentiality agreements.</li>
          <li>The participant fails to meet performance expectations.</li>
          <li>The participant engages in unethical or unprofessional behavior.</li>
        </ul>
        <p className="mb-4 text-justify">Participants may voluntarily withdraw by providing written notice.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">CONTACT US</h2>
        <p className="mb-2 text-justify">For inquiries about internships, please contact us at:</p>
        <p className="mb-4 text-justify">Email: <a href="mailto:internships@futureforgex.com" className="underline">internships@futureforgex.com</a></p>
        <p className="mb-4 text-justify">Phone: <a href="tel:+918499956365" className="underline">+91 8499956365</a></p>
        <p className="mb-4 text-justify">Website: <a href="https://www.futureforgex.in" className="underline" target="_blank" rel="noopener noreferrer">www.futureforgex.in</a></p>
        <p className="mb-4 text-justify">Address: Madanapalle</p>
      </div>
    </div>
  );
};

export default InternshipPolicy;
