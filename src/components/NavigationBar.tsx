/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MenuLink } from '../types';

interface NavigationBarProps {
  logoText: string;
  links: MenuLink[];
  ctaText: string;
  onCtaClick?: () => void;
  onLogoClick?: () => void;
}

export default function NavigationBar({
  logoText,
  links,
  ctaText,
  onCtaClick,
  onLogoClick,
}: NavigationBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      id="navigation-header"
      animate={{
        paddingTop: scrolled ? '12px' : '28px',
        paddingBottom: scrolled ? '12px' : '28px',
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 w-full z-40 px-6 md:px-10"
    >
      <div
        className={`max-w-[1200px] mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'mt-3 bg-white/90 backdrop-blur-xl rounded-[24px] border border-[#e5e5e5]/60 px-6 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
            : ''
        }`}
      >
        <button
          id="nav-logo"
          onClick={onLogoClick}
          className="group cursor-pointer text-left focus:outline-none"
        >
          <span
            className={`font-display text-xl md:text-2xl font-medium tracking-wide transition-colors duration-500 ${
              scrolled
                ? 'text-[#2B2B2B] group-hover:text-[#A55A42]'
                : 'text-white group-hover:text-[#D8C5A4] hero-text-contrast'
            }`}
          >
            {logoText}
          </span>
        </button>

        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {links.map((link, idx) => (
            <a
              id={`nav-link-${idx}`}
              key={link.label}
              href={link.url}
              className={`relative text-sm font-sans font-medium transition-colors duration-300 py-2 group ${
                scrolled
                  ? 'text-[#2B2B2B]/70 hover:text-[#2B2B2B]'
                  : 'text-white/90 hover:text-white hero-text-contrast'
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-px bg-[#D8C5A4] scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300 ease-out" />
            </a>
          ))}
        </nav>

        <div id="nav-cta-area" className="hidden md:block">
          <button
            id="nav-cta-btn"
            onClick={onCtaClick}
            className="group px-5 py-2.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider text-white bg-[#A55A42] hover:bg-[#8e4a35] transition-all duration-300 hover:-translate-y-0.5 shadow-lg flex items-center gap-1.5 cursor-pointer"
          >
            <span>{ctaText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

        <div id="mobile-menu-trigger" className="block md:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-full flex items-center justify-center glass-effect hover:bg-white/10 text-[#F8F5F0] transition-all cursor-pointer"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-2xl border-b border-[#F8F5F0]/10 px-6 py-8 md:hidden shadow-2xl flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {links.map((link, idx) => (
                <a
                  id={`mobile-nav-link-${idx}`}
                  key={link.label}
                  href={link.url}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-lg font-medium text-[#F8F5F0]/80 hover:text-[#F8F5F0] py-2 border-b border-[#F8F5F0]/10 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              id="mobile-nav-cta-btn"
              onClick={() => {
                setIsOpen(false);
                onCtaClick?.();
              }}
              className="w-full py-3 rounded-full text-center text-sm font-sans font-semibold uppercase tracking-wider text-[#F8F5F0] bg-[#A55A42] hover:bg-[#8e4a35] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{ctaText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
