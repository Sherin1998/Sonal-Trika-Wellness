/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import type { VideoTestimonial } from '../../data/testimonials';

interface VideoTestimonialModalProps {
  video: VideoTestimonial | null;
  onClose: () => void;
}

export default function VideoTestimonialModal({
  video,
  onClose,
}: VideoTestimonialModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [video, onClose]);

  useEffect(() => {
    if (video && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [video]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {video && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Close video"
            className="fixed inset-0 z-[9998] bg-[#1A1A1A]/85 backdrop-blur-md cursor-pointer border-0 p-0"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Video testimonial from ${video.name}`}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-[8vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 z-[9999] w-auto md:w-[min(420px,calc(100vw-2rem))] max-h-[90vh] overflow-y-auto"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#1A1A1A] shadow-2xl border border-[#F8F5F0]/10">
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#1A1A1A]/70 hover:bg-[#1A1A1A] flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              <video
                ref={videoRef}
                src={video.videoSrc}
                poster={video.posterSrc}
                controls
                playsInline
                preload="metadata"
                className="block w-full max-h-[70vh] object-contain bg-black mx-auto"
              />

              <div className="p-6 md:p-8 bg-[#F8F5F0]">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#888888] mb-2">
                  Video Testimonial
                </p>
                <h3 className="font-display text-2xl tracking-tight text-[#2B2B2B] mb-1">
                  {video.name}
                </h3>
                <p className="font-sans text-caption text-[#888888] mb-3">
                  {video.designation}
                </p>
                <p className="font-display text-lg italic text-[#2B2B2B]/85 leading-relaxed">
                  {video.headline}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
