import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

// Split the title into individual letters for animation
const titleText = "Welcome to FutureForgeX";
const titleLetters = titleText.split('');

function Hero() {
  const handleExploreClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation for each letter in the title
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  // Animation for the subtitle
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  // Animation for the button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.5,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)',
      transition: {
        duration: 0.3,
      },
    },
  };

  // Animation for the scroll-down indicator
  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  };

  // Animation for the circle
  const circleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 0.7,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  // Particle background configuration
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ['#00D4FF', '#A855F7'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
      },
      links: {
        enable: true,
        distance: 150,
        color: '#00D4FF',
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, #1A2A44 0%, #1A2A44 50%, #00D4FF 100%)',
      }}
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Circle with Video */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full overflow-hidden opacity-70 z-5"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(0, 212, 255, 0.3)',
          boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
        }}
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-blue-technology-background-1185-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Hero Content */}
      <div className="relative text-center z-10">
        {/* Animated Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 flex justify-center flex-wrap">
          {titleLetters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className={letter === 'F' || letter === 'u' || letter === 't' || letter === 'u' || letter === 'r' || letter === 'e' || letter === 'F' || letter === 'o' || letter === 'r' || letter === 'g' || letter === 'e' || letter === 'X' ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-purple-accent' : 'text-white'}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </h1>

        {/* Animated Subtitle */}
        <motion.p
          className="text-lg md:text-xl mb-6 max-w-xl mx-auto text-gray-200"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Innovating the future with cutting-edge technology solutions.
        </motion.p>

        {/* Animated Button */}
        <motion.button
          onClick={handleExploreClick}
          className="bg-gradient-to-r from-cyan-accent to-purple-accent text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Explore Now
        </motion.button>
      </div>

      {/* Scroll-Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      >
        <svg
          className="w-6 h-6 text-cyan-accent animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}

export default Hero;