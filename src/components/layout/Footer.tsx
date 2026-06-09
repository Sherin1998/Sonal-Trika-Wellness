/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Container from '../ui/Container';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#F8F5F0] border-t border-[#e5e5e5]">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-xl tracking-tight text-[#2B2B2B]">
            Trika Yoga &amp; Wellness
          </span>
          <p className="font-sans text-caption tracking-tight text-[#888888]">
            &copy; {new Date().getFullYear()} Sonia Razdan. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'LinkedIn', 'YouTube'].map((social) => (
              <a
                key={social}
                href="#"
                className="font-sans text-caption tracking-tight text-[#888888] hover:text-[#2B2B2B] transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
