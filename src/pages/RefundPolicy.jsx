import React, { useEffect } from 'react';
import logo from "../assets/Xbackdemo.png";

function RefundPolicy() {
  // Scroll to the top when the component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
       <div
              className="w-full h-[90px] flex items-center justify-center rounded-b-lg"
              style={{ backgroundColor: "#07064E" }}
            >
              <img
                src={logo}
                alt="FutureForgeX"
                style={{
                  height: "auto",        // Maintain aspect ratio
                  width: "150px",        // Adjust logo size
                  borderRadius: "15px",  // Rounded corners
                  objectFit: "cover",    // Fit image nicely
                }}
              />
            </div>

      <div className="max-w-4xl mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-semibold mb-6 text-center">FUTUREFORGEX REFUND POLICY</h1>
        <p className="mb-6 text-justify">
          At FutureForgeX, we strive to provide the best possible experience for our clients. This policy outlines the terms regarding cancellations, returns, and refunds for our services.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-justify">CANCELLATION POLICY</h2>
        <h3 className="text-lg font-semibold mt-4 text-justify">Software Development and Project Development</h3>
        <p className="text-justify">Clients may cancel an ongoing project by submitting a written notice to <a href="mailto:futureforgex.pvt@gmail.com" className="underline">futureforgex.pvt@gmail.com</a>.</p>
        <ul className="list-disc ml-6 mb-4 text-justify">
          <li>Full refund if cancellation occurs before work begins.</li>
          <li>Prorated refund if work has started, with a possible cancellation fee.</li>
          <li>A minimum of 7 business days’ notice is required.</li>
        </ul>
        
        <h3 className="text-lg font-semibold mt-4 text-justify">Internships and Courses</h3>
        <p className="text-justify">Participants may cancel enrollment by submitting a written notice to <a href="mailto:futureforgex.pvt@gmail.com" className="underline">futureforgex.pvt@gmail.com</a>.</p>
        <ul className="list-disc ml-6 mb-4 text-justify">
          <li>Full refund if canceled before the program begins.</li>
          <li>Prorated refund after the start date, subject to a cancellation fee.</li>
          <li>A minimum of 7 business days’ notice is required.</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-justify">RETURNS POLICY</h2>
        <p className="text-justify">Since we provide digital services, we do not accept returns. However, we offer solutions for unsatisfactory services.</p>
        
        <h3 className="text-lg font-semibold mt-4 text-justify">Software Development and Project Development</h3>
        <ul className="list-disc ml-6 mb-4 text-justify">
          <li>Report issues within 7 days of delivery.</li>
          <li>We will assess and provide necessary revisions or corrections.</li>
          <li>If unresolved, a partial refund may be issued.</li>
        </ul>
        
        <h3 className="text-lg font-semibold mt-4 text-justify">Internships and Courses</h3>
        <ul className="list-disc ml-6 mb-4 text-justify">
          <li>Report dissatisfaction within 7-14 days of the start date.</li>
          <li>We may offer a course transfer or partial refund.</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-justify">REFUND PROCESS</h2>
        <ul className="list-disc ml-6 mb-4 text-justify">
          <li>Submit a refund request to <a href="mailto:futureforgex.pvt@gmail.com" className="underline">futureforgex.pvt@gmail.com</a> with details.</li>
          <li>Requests are reviewed within 7-14 business days.</li>
          <li>Approved refund will be credited within 10 days to the original source of payment method.</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-justify">INTELLECTUAL PROPERTY RIGHTS</h2>
        <p className="text-justify">Upon full payment, clients receive a non-exclusive license for project deliverables. FutureForgeX retains the right to showcase completed work unless otherwise agreed.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-justify">DISPUTE RESOLUTION</h2>
        <p className="text-justify">Disputes will first be addressed through negotiation. Legal matters will be governed by the laws of Andhra Pradesh, India.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-justify">PRIVACY AND DATA PROTECTION</h2>
        <p className="text-justify">Our Privacy Policy governs data usage. By using our services, you consent to our data practices. See our <a href="/privacy-policy" className="underline text-blue-600">Privacy Policy</a> for details.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-justify">LIMITATION OF LIABILITY</h2>
        <p className="text-justify">FutureForgeX is not liable for indirect or consequential damages arising from the use of our services.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-justify">CONTACT INFORMATION</h2>
        <p className="text-justify">Email: <a href="mailto:futureforgex.pvt@gmail.com" className="underline">futureforgex.pvt@gmail.com</a></p>
        <p className="text-justify">Phone: <a href="tel:+918499956365" className="underline">+91 8499956365</a></p>
        <p className="text-justify">Website: <a href="https://www.futureforgex.in" className="underline" target="_blank" rel="noopener noreferrer">www.futureforgex.in</a></p>
        <p className="text-justify">Address: Madanapalle, Andhra Pradesh, India</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-justify">ENTIRE AGREEMENT</h2>
        <p className="text-justify">This policy constitutes the entire agreement regarding cancellations, returns, and refunds.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-justify">FORCE MAJEURE</h2>
        <p className="text-justify">FutureForgeX is not liable for failures due to unforeseen circumstances beyond our control.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-justify">TERMINATION</h2>
        <p className="text-justify">We reserve the right to terminate or suspend access for policy violations.</p>
      </div>
    </div>
  );
}

export default RefundPolicy;
