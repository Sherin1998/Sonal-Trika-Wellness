/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import SectionLabel from '../ui/SectionLabel';
import ModernCard from '../ui/ModernCard';
import SectionReveal from '../ui/SectionReveal';

interface ContactSectionProps {
  onCtaClick?: () => void;
}

export default function ContactSection({ onCtaClick }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 md:py-[120px] bg-[#ebfef6]">
      <Container>
        <SectionReveal>
          <ModernCard variant="white" elevated className="text-center max-w-3xl mx-auto">
            <SectionLabel dotColor="#7A8B6F">Begin</SectionLabel>
            <h2 className="font-display text-[36px] md:text-[48px] leading-[1.1] tracking-tight text-[#2B2B2B] mb-5">
              Your nervous system already knows how to heal.
            </h2>
            <p className="font-sans text-subheading tracking-tight text-[#888888] mb-10">
              Let&rsquo;s begin.
            </p>
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 bg-[#A55A42] text-white font-sans text-body-sm font-medium tracking-tight rounded-[24px] px-[38px] py-3.5 shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:bg-[#8e4a35] transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
            >
              Begin Your Healing Journey
              <ArrowRight className="w-4 h-4" />
            </button>
          </ModernCard>
        </SectionReveal>
      </Container>
    </section>
  );
}
