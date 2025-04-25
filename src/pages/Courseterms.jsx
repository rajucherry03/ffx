import React from "react";
import logo from "../assets/ffxnobg.png"; // Adjust the path based on your folder structure
import { useEffect } from 'react';

const CourseTerms = () => {
  useEffect(() => {
    // Scroll to the top when the component is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with logo */}
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
      <div className="flex-1 p-6 text-gray-800 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          EDUCATION & TRAINING COURSE TERMS
        </h1>

        <h2 className="text-xl font-semibold mt-6 mb-3">INTRODUCTION</h2>
        <p className="mb-4 text-justify">
          These terms and conditions ("Terms") govern your enrollment in and participation in the education and training courses ("Courses") offered by FutureForgeX. By enrolling in a Course, you agree to be bound by these Terms. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">ENROLLMENT & ELIGIBILITY</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Participants must be at least 18 years old or have parental/guardian consent if under 18.</li>
          <li>Must meet any specific prerequisites outlined in the Course description.</li>
          <li>Provide accurate and complete information during the enrollment process.</li>
        </ul>
        <p className="mb-4 text-justify">FutureForgeX reserves the right to refuse or cancel enrollment if eligibility criteria are not met.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">PAYMENT & FEES</h2>
        <p className="mb-4 text-justify">
          Course fees are as specified on the FutureForgeX website and must be paid in full prior to the start of the Course. Payments are non-refundable except as per the Cancellation and Refund Policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">COURSE ACCESS & DURATION</h2>
        <p className="mb-4 text-justify">
          Upon successful enrollment and payment, participants will receive access to course materials for the duration specified in the Course description. Access may be revoked for violations of these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">CANCELLATION & REFUND POLICY</h2>
        <p className="mb-4 text-justify">
          Cancellations made at least 7 days before the Course start date are eligible for a full refund. Late cancellations may be subject to a fee or no refund.
        </p>
        <p className="mb-4 text-justify">
          FutureForgeX reserves the right to cancel a Course due to unforeseen circumstances, with a full refund or transfer option.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">INTELLECTUAL PROPERTY</h2>
        <p className="mb-4 text-justify">
          All course materials remain the intellectual property of FutureForgeX. Participants are granted a limited, non-transferable license for personal use only.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">CODE OF CONDUCT</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Attend sessions and complete assignments on time.</li>
          <li>Respect instructors, peers, and FutureForgeX staff.</li>
          <li>Do not share course materials or credentials with unauthorized individuals.</li>
        </ul>
        <p className="mb-4 text-justify">Violations may result in course removal without a refund.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">CONFIDENTIALITY</h2>
        <p className="mb-4 text-justify">Participants may have access to confidential information and must not disclose it without prior written consent.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">CERTIFICATION</h2>
        <p className="mb-4 text-justify">Participants who meet all requirements will receive a certificate of completion. This certificate does not confer academic credit or professional licensure.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">LIMITATION OF LIABILITY</h2>
        <p className="mb-4 text-justify">FutureForgeX is not liable for any indirect or consequential damages arising from course participation. Our total liability shall not exceed the course fee paid.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">GOVERNING LAW</h2>
        <p className="mb-4 text-justify">These Terms are governed by the laws of Andhra Pradesh, India. Disputes shall be resolved in the courts of Andhra Pradesh.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">CHANGES TO THESE TERMS</h2>
        <p className="mb-4 text-justify">FutureForgeX reserves the right to modify these Terms at any time, with changes effective upon posting on the website.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">CONTACT US</h2>
        <p className="mb-2 text-justify">For inquiries regarding these Terms or the Course, contact us at:</p>
        <p className="mb-4 text-justify">Email: <a href="mailto:courses@futureforgex.com" className="underline">courses@futureforgex.com</a></p>
        <p className="mb-4 text-justify">Phone: <a href="tel:+918499956365" className="underline">+91 8499956365</a></p>
      </div>
    </div>
  );
};

export default CourseTerms;
