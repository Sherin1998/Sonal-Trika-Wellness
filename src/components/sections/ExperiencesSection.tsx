/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import SectionLabel from '../ui/SectionLabel';
import ModernCard from '../ui/ModernCard';
import SectionReveal from '../ui/SectionReveal';

const EXPERIENCES = [
  {
    num: '01',
    title: 'Sound Healing',
    desc: 'Immersive vibrational therapy with singing bowls and planetary gongs.',
    variant: 'cream' as const,
  },
  {
    num: '02',
    title: 'Gong Immersions',
    desc: 'Full-body sound baths for deep nervous system regulation.',
    variant: 'lavender' as const,
  },
  {
    num: '03',
    title: 'Kundalini Yoga',
    desc: 'Energy-based practice restoring clarity, vitality, and inner safety.',
    variant: 'mint' as const,
  },
  {
    num: '04',
    title: 'Breathwork',
    desc: 'Conscious breathing to release stored stress and restore calm.',
    variant: 'white' as const,
  },
];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="py-20 md:py-[120px] bg-[#f6f3ee]">
      <Container>
        <SectionReveal>
          <SectionLabel dotColor="#A55A42">Experiences</SectionLabel>
          <h2 className="font-display text-[40px] md:text-[48px] leading-[1.05] tracking-tight text-[#2B2B2B] max-w-xl mb-16">
            Modalities for deep restoration
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {EXPERIENCES.map((exp, i) => (
            <div key={exp.num}>
            <SectionReveal delay={i * 0.08}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.45 }}>
                <ModernCard variant={exp.variant} elevated className="group cursor-pointer h-full">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <span className="font-display text-[48px] leading-none tracking-tight text-[#A55A42]/30">
                      {exp.num}
                    </span>
                    <ArrowRight className="w-5 h-5 text-[#888888] group-hover:text-[#A55A42] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h3 className="font-sans text-heading-sm font-medium tracking-tight text-[#2B2B2B] mb-3">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-body-sm leading-[1.6] tracking-tight text-[#888888]">
                    {exp.desc}
                  </p>
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
