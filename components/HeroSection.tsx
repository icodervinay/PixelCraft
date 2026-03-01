'use client';

import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Empowering Your Thoughts into Realit
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          We deliver innovative solutions to help you succeed.
        </p>
        <a href="#contact" className="inline-block bg-accent text-white py-3 px-8 rounded shadow-lg hover:opacity-90 transition">
          Get Started
        </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;