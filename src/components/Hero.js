import React from 'react';

function Hero() {
  const handleExploreClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center p-10"
    >
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/h11.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Text Panel */}
      <div className="relative z-10 text-center text-gray-900 max-w-2xl p-8">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to FutureForgeX
        </h1>
        <p className="text-lg mb-6">
          FutureForgeX is a leading software development company specializing in AI, ML, Web Development, and more. We provide innovative solutions to elevate your business.
        </p>
        <button 
          onClick={handleExploreClick} 
          className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Explore Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
