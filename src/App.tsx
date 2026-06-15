/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function scrollToHashTarget(id: string, attempt = 0) {
  const el = document.getElementById(id);
  if (!el) {
    if (attempt < 4) {
      window.setTimeout(() => scrollToHashTarget(id, attempt + 1), 200);
    }
    return;
  }

  const gallery = el.closest('.liquid-gallery-container') as HTMLElement | null;

  if (gallery) {
    const groupSection = gallery.closest('[id]') as HTMLElement | null;
    if (groupSection) {
      groupSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    window.setTimeout(() => {
      const cardLeft = el.offsetLeft;
      const cardWidth = el.offsetWidth;
      gallery.scrollTo({
        left: cardLeft - (gallery.clientWidth - cardWidth) / 2,
        behavior: 'smooth',
      });
    }, 280);
    return;
  }

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function ScrollToTopOnNavigate() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/' && hash === '#contact') {
      navigate('/contact', { replace: true });
      return;
    }

    if (!hash) return;

    const id = hash.replace('#', '');
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const delay =
      pathname === '/services' ? (isMobile ? 500 : 400) : 120;
    const timer = window.setTimeout(() => scrollToHashTarget(id), delay);

    return () => window.clearTimeout(timer);
  }, [pathname, hash, navigate]);

  return null;
}

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
