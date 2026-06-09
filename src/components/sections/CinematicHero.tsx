/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import SeamlessVideo, { SeamlessVideoHandle } from '../ui/SeamlessVideo';
import GradientButton from '../ui/GradientButton';
import {
  useVideoLuminance,
  luminanceToTextColor,
  luminanceToShadow,
} from '../../hooks/useVideoLuminance';

const HEADLINE_LINES = [
  'TRUE HEALING',
  'BEGINS WHEN',
  'THE BODY FEELS SAFE.',
];

interface CinematicHeroProps {
  videoSrc: string;
  scrollY: number;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function CinematicHero({
  videoSrc,
  scrollY,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: CinematicHeroProps) {
  const videoHandleRef = useRef<SeamlessVideoHandle>(null);
  const [activeVideoEl, setActiveVideoEl] = useState<HTMLVideoElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  videoRef.current = activeVideoEl;

  const luminance = useVideoLuminance(videoRef);
  const textColor = luminanceToTextColor(luminance);
  const textShadow = luminanceToShadow(luminance);

  // Keep ref to whichever seamless video layer is active
  useEffect(() => {
    const id = setInterval(() => {
      const el = videoHandleRef.current?.getActiveVideo() ?? null;
      setActiveVideoEl((prev) => (prev !== el ? el : prev));
    }, 200);
    return () => clearInterval(id);
  }, []);

  const contentOpacity = Math.max(0, 1 - scrollY * 0.002);
  const contentY = scrollY * 0.35;

  const adaptiveStyle = {
    color: textColor,
    textShadow,
    transition: 'color 0.8s ease, text-shadow 0.8s ease',
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.15 },
    },
  };

  const fadeUpBlur = {
    hidden: { opacity: 0, y: 32, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease },
    },
  };

  return (
    <section
      id="hero-root-stage"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
    >
      <SeamlessVideo
        ref={videoHandleRef}
        src={videoSrc}
        parallaxY={scrollY * 0.15}
      />

      <motion.div
        className="relative z-10 flex h-full items-end md:items-center px-6 md:px-12 xl:px-20 pt-24 pb-20 md:pb-16"
        style={{
          opacity: contentOpacity,
          transform: `translate3d(0, ${contentY}px, 0)`,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl">
          <motion.p
            variants={fadeUpBlur}
            className="font-sans text-xs md:text-sm uppercase tracking-[0.35em] mb-6 md:mb-8"
            style={adaptiveStyle}
          >
            Trika Yoga &amp; Wellness
          </motion.p>

          <h1 className="font-display font-light leading-[0.95] tracking-tight mb-8 md:mb-10">
            {HEADLINE_LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]"
                  style={adaptiveStyle}
                  initial={{ opacity: 0, scale: 0.82, y: 30, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 1.3,
                    delay: 0.4 + i * 0.22,
                    ease,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={fadeUpBlur}
            className="font-display text-base md:text-xl max-w-xl leading-relaxed mb-8 md:mb-10 italic"
            style={adaptiveStyle}
          >
            &ldquo;Stillness is not earned through exhaustion — it is allowed,
            when the body remembers it is safe.&rdquo;
          </motion.p>

          <motion.div
            variants={fadeUpBlur}
            className="flex flex-col sm:flex-row gap-4"
          >
            <GradientButton
              variant="primary"
              onClick={onPrimaryCtaClick}
              icon={
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              }
            >
              Begin Your Healing Journey
            </GradientButton>
            <GradientButton variant="secondary" onClick={onSecondaryCtaClick}>
              Schedule a Discovery Call
            </GradientButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none"
        style={{ opacity: Math.max(0, 1 - scrollY * 0.005) }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span
          className="font-sans text-[10px] uppercase tracking-[0.3em]"
          style={adaptiveStyle}
        >
          Scroll
        </span>
        <div
          className="w-px h-8"
          style={{
            background: `linear-gradient(to bottom, ${textColor}, transparent)`,
            transition: 'background 0.8s ease',
          }}
        />
      </motion.div>
    </section>
  );
}
