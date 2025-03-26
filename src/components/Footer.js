import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark-blue text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          FutureForgeX is your partner in digital transformation, committed to agile methodologies and innovation.
        </p>
        <p>© 2025 FutureForgeX. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-cyan-accent">Twitter</a>
          <a href="#" className="hover:text-cyan-accent">LinkedIn</a>
          <a href="#" className="hover:text-cyan-accent">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;