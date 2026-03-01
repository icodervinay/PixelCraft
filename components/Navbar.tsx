'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(prev => !prev);
  const closeMenu = () => setOpen(false);

  // if the user resizes to desktop width, make sure the mobile menu is closed
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold text-primary">
          PixelCraft 
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="#home" className="hover:text-secondary">Home</Link>
          <Link href="#about" className="hover:text-secondary">About</Link>
          <Link href="#services" className="hover:text-secondary">Services</Link>
          <Link href="#projects" className="hover:text-secondary">Projects</Link>
          <Link href="#blog" className="hover:text-secondary">Blog</Link>
          <Link href="#contact" className="hover:text-secondary">Contact</Link>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu />
        </button>
      </div>
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white"
          role="menu"
        >
          <Link href="#home" className="block px-4 py-2" onClick={closeMenu}>Home</Link>
          <Link href="#about" className="block px-4 py-2" onClick={closeMenu}>About</Link>
          <Link href="#services" className="block px-4 py-2" onClick={closeMenu}>Services</Link>
          <Link href="#projects" className="block px-4 py-2" onClick={closeMenu}>Projects</Link>
          <Link href="#blog" className="block px-4 py-2" onClick={closeMenu}>Blog</Link>
          <Link href="#contact" className="block px-4 py-2" onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;