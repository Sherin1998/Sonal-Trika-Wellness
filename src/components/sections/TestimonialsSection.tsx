/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Container from '../ui/Container';
import SectionLabel from '../ui/SectionLabel';
import ModernCard from '../ui/ModernCard';
import SectionReveal from '../ui/SectionReveal';

const TESTIMONIALS = [
  {
    quote: 'I arrived depleted. I left with a nervous system that finally knew how to rest.',
    name: 'Priya M.',
    context: 'Executive, Mumbai',
  },
  {
    quote: 'The gong immersion was unlike anything I have experienced in twelve years of leadership.',
    name: 'Arjun K.',
    context: 'Founder & CEO',
  },
  {
    quote: 'Our team returned focused, grounded, and genuinely more connected.',
    name: 'Sarah L.',
    context: 'HR Director',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-[120px] bg-white">
      <Container>
        <SectionReveal>
          <SectionLabel dotColor="#A55A42">Testimonials</SectionLabel>
          <h2 className="font-display text-[40px] md:text-[48px] leading-[1.05] tracking-tight text-[#2B2B2B] mb-16">
            Voices of restoration
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name}>
            <SectionReveal delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -3, rotate: i === 1 ? 0 : i === 0 ? -0.5 : 0.5 }}
                transition={{ duration: 0.4 }}
              >
                <ModernCard variant="cream" className="h-full">
                  <p className="font-display text-lg italic leading-[1.45] tracking-tight text-[#2B2B2B] mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-[#e5e5e5] pt-5">
                    <p className="font-sans text-body-sm font-medium tracking-tight text-[#2B2B2B]">
                      {t.name}
                    </p>
                    <p className="font-sans text-caption tracking-tight text-[#888888] mt-1">
                      {t.context}
                    </p>
                  </div>
                </ModernCard>
              </motion.div>
            </SectionReveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
