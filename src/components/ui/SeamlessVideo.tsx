/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  type CSSProperties,
} from 'react';

const CROSSFADE_SEC = 1.0;

interface SeamlessVideoProps {
  src: string;
  className?: string;
  style?: CSSProperties;
  parallaxY?: number;
}

export interface SeamlessVideoHandle {
  getActiveVideo: () => HTMLVideoElement | null;
}

const SeamlessVideo = forwardRef<SeamlessVideoHandle, SeamlessVideoProps>(
  function SeamlessVideo({ src, className = '', style, parallaxY = 0 }, ref) {
    const videoARef = useRef<HTMLVideoElement>(null);
    const videoBRef = useRef<HTMLVideoElement>(null);
    const [opacityA, setOpacityA] = useState(1);
    const [opacityB, setOpacityB] = useState(0);
    const activeRef = useRef<'a' | 'b'>('a');
    const crossfadingRef = useRef(false);

    useImperativeHandle(ref, () => ({
      getActiveVideo: () =>
        activeRef.current === 'a' ? videoARef.current : videoBRef.current,
    }));

    useEffect(() => {
      const a = videoARef.current;
      const b = videoBRef.current;
      if (!a || !b) return;

      a.src = src;
      b.src = src;
      a.load();
      b.load();

      const playA = () => a.play().catch(() => {});
      playA();

      const handleTimeUpdate = (current: HTMLVideoElement, other: HTMLVideoElement, isA: boolean) => {
        if (!current.duration || crossfadingRef.current) return;

        const timeLeft = current.duration - current.currentTime;
        if (timeLeft <= CROSSFADE_SEC) {
          crossfadingRef.current = true;
          other.currentTime = 0;
          other.play().catch(() => {});

          const start = performance.now();
          const duration = CROSSFADE_SEC * 1000;

          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            if (isA) {
              setOpacityA(1 - progress);
              setOpacityB(progress);
            } else {
              setOpacityB(1 - progress);
              setOpacityA(progress);
            }

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              current.pause();
              current.currentTime = 0;
              activeRef.current = isA ? 'b' : 'a';
              crossfadingRef.current = false;
            }
          };
          requestAnimationFrame(tick);
        }
      };

      const onTimeA = () => {
        if (activeRef.current === 'a') handleTimeUpdate(a, b, true);
      };
      const onTimeB = () => {
        if (activeRef.current === 'b') handleTimeUpdate(b, a, false);
      };

      a.addEventListener('timeupdate', onTimeA);
      b.addEventListener('timeupdate', onTimeB);

      return () => {
        a.removeEventListener('timeupdate', onTimeA);
        b.removeEventListener('timeupdate', onTimeB);
      };
    }, [src]);

    const videoClass =
      'absolute inset-0 w-full h-full object-cover transition-opacity duration-100';

    return (
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
      >
        {/* Scale up + reposition to crop Gemini watermark (bottom-right) */}
        <div
          className="absolute inset-0"
          style={{
            transform: 'scale(1.14)',
            transformOrigin: '55% 48%',
          }}
        >
          <video
            ref={videoARef}
            muted
            playsInline
            className={videoClass}
            style={{ ...style, opacity: opacityA }}
          />
          <video
            ref={videoBRef}
            muted
            playsInline
            className={videoClass}
            style={{ ...style, opacity: opacityB }}
          />
        </div>
      </div>
    );
  }
);

export default SeamlessVideo;
