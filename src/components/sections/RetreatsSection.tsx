/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import SectionLabel from '../ui/SectionLabel';
import SectionReveal from '../ui/SectionReveal';

const LOCATIONS = [
  { name: 'Jaisalmer', desc: 'Desert silence & golden-hour gong immersions' },
  { name: 'Rishikesh', desc: 'River-side sound healing & breathwork' },
  { name: 'Gangtok', desc: 'Mountain retreat & nervous system reset' },
  { name: 'Sri Lanka', desc: 'Coastal restoration & digital detox' },
];

export default function RetreatsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="retreats" className="py-20 md:py-[120px] bg-[#f6f3ee] overflow-hidden">
      <Container>
        <SectionReveal>
          <SectionLabel dotColor="#7A8B6F">Retreats</SectionLabel>
          <h2 className="font-display text-[40px] md:text-[48px] leading-[1.05] tracking-tight text-[#2B2B2B] mb-12">
            Immersive healing destinations
          </h2>
        </SectionReveal>
      </Container>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 px-6 md:px-[max(24px,calc((100vw-1200px)/2+40px))] snap-x snap-mandatory scrollbar-hide"
      >
        {LOCATIONS.map((loc, i) => (
          <motion.article
            key={loc.name}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="snap-start shrink-0 w-[280px] md:w-[320px] group"
          >
            <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#D8C5A4] to-[#7A8B6F]/70 shadow-[0_16px_32px_rgba(0,0,0,0.1)] mb-5">
              <div className="absolute inset-0 bg-[#2B2B2B]/5 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#2B2B2B]/50 to-transparent">
                <h3 className="font-display text-[28px] tracking-tight text-white">
                  {loc.name}
                </h3>
              </div>
            </div>
            <p className="font-sans text-body-sm tracking-tight text-[#888888] mb-3">
              {loc.desc}
            </p>
            <span className="inline-flex items-center gap-1 font-sans text-caption font-medium tracking-tight text-[#A55A42]">
              View retreat <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </motion.article>
        ))}
      </div>

      <Container>
        <SectionReveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <button className="inline-flex items-center gap-2 bg-[#A55A42] text-white font-sans text-body-sm font-medium tracking-tight rounded-[24px] px-[38px] py-3 shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:bg-[#8e4a35] transition-colors duration-500 cursor-pointer">
              Reserve Your Spot
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
