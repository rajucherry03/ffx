import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Internships from './components/Internships'; // ✅ Added
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import InternshipPolicy from './pages/InternshipPolicy';
import CourseTerms from './pages/Courseterms';
import PlainLayout from './layout/PlainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/*" 
          element={
            <div className="font-sans">
              <Navbar />
              <Hero />
              <About />

              <Internships /> {/* ✅ Internships added here */}

              <Services />
              <Projects />
              <Contact />
              <Footer />
            </div>
          } 
        />
        <Route path="/privacy-policy" element={<PlainLayout><PrivacyPolicy /></PlainLayout>} />
        <Route path="/terms-conditions" element={<PlainLayout><TermsConditions /></PlainLayout>} />
        <Route path="/refund-policy" element={<PlainLayout><RefundPolicy /></PlainLayout>} />
        <Route path="/internship-policy" element={<PlainLayout><InternshipPolicy /></PlainLayout>} />
        <Route path="/course-terms" element={<PlainLayout><CourseTerms /></PlainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
