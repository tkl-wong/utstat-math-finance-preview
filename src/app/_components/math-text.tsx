"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    MathJax?: {
      typesetClear?: (elements: HTMLElement[]) => void;
      typesetPromise?: (elements: HTMLElement[]) => Promise<void>;
    };
  }
}

export function MathText({ children, className }: { children: string; className?: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 100;

    const typeset = () => {
      const container = containerRef.current;
      const mathJax = window.MathJax;

      if (container && mathJax?.typesetPromise) {
        mathJax.typesetClear?.([container]);
        void mathJax.typesetPromise([container]);
        return true;
      }

      return false;
    };

    if (typeset()) return;

    const interval = window.setInterval(() => {
      attempts += 1;
      if (typeset() || attempts >= maxAttempts) window.clearInterval(interval);
    }, 100);

    return () => window.clearInterval(interval);
  }, [children]);

  return (
    <p ref={containerRef} className={className}>
      {children}
    </p>
  );
}
