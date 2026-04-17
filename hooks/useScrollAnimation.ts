'use client';

import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  staggerDelay?: number;
}

export function useScrollAnimation(
  options: ScrollAnimationOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    delay: 0,
  }
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const delay = options.delay || 0;
          setTimeout(() => {
            element.classList.add('in-view');
          }, delay);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold,
        rootMargin: options.rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.delay, options.rootMargin, options.threshold]);

  return ref;
}

export function useStaggerAnimation(children: number = 0) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = container.querySelectorAll('.stagger-item');
          items.forEach((item, index) => {
            const element = item as HTMLElement;
            setTimeout(
              () => {
                element.style.animation = `staggerFade 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
                element.style.opacity = '1';
              },
              index * 100
            );
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return containerRef;
}
