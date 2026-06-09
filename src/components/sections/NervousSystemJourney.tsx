/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Container from '../ui/Container';
import SectionLabel from '../ui/SectionLabel';
import ModernCard from '../ui/ModernCard';
import SectionReveal from '../ui/SectionReveal';

const STRESS_STAGES = [
  'Hyper-Arousal',
  'Burnout',
  'Anxiety',
  'Poor Sleep',
  'Disconnection',
];

export default function NervousSystemJourney() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const calmProgress = useTransform(scrollYProgress, [0.2, 0.75], [0, 1]);
  const stageOpacity = useTransform(calmProgress, [0, 0.5, 1], [1, 0.45, 0.15]);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-[120px] bg-[#f6f1fe] overflow-hidden"
    >
      <Container>
        <SectionReveal>
          <SectionLabel dotColor="#5c2999">The Nervous System</SectionLabel>
          <h2 className="font-display text-[40px] md:text-[48px] leading-[1.05] tracking-tight text-[#2B2B2B] max-w-2xl mb-16">
            From dysregulation to deep restoration
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <motion.div style={{ opacity: stageOpacity }}>
            <ModernCard variant="white" elevated className="h-full">
              <p className="font-sans text-caption uppercase tracking-tight text-[#888888] mb-6">
                Stress cascade
              </p>
              <div className="space-y-1">
                {STRESS_STAGES.map((stage, i) => (
                  <motion.div
                    key={stage}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.7 }}
                    className="flex items-center gap-4 py-4 border-b border-[#e5e5e5] last:border-0"
                  >
                    <span className="font-sans text-caption text-[#A55A42] font-medium tracking-tight w-7">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-subheading font-medium tracking-tight text-[#2B2B2B]">
                      {stage}
                    </span>
                  </motion.div>
                ))}
              </div>
            </ModernCard>
          </motion.div>

          <SectionReveal delay={0.15}>
            <ModernCard variant="mint" elevated className="h-full flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#7A8B6F] animate-pulse" />
                <span className="font-sans text-caption font-medium tracking-tight text-[#7A8B6F] uppercase">
                  Restoration
                </span>
              </div>
              <h3 className="font-display text-[32px] md:text-[36px] leading-[1.1] tracking-tight text-[#2B2B2B] mb-5">
                The body remembers how to feel safe
              </h3>
              <p className="font-sans text-body-sm leading-[1.65] tracking-tight text-[#888888]">
                Through immersive sound, conscious breath, and held space, the
                nervous system gradually shifts from survival mode into deep
                physiological calm.
              </p>
            </ModernCard>
          </SectionReveal>
        </div>
      </Container>
    </section>
  );
}
