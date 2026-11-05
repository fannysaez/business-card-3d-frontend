"use client";
import { useEffect, useState } from "react";

export default function WelcomeIntro({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const t = setTimeout(() => setVisible(false), prefersReduced ? 0 : 8000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div
        className={`welcome-intro ${visible ? "" : "welcome-intro--hidden"}`}
        aria-hidden={!visible}
      >
        <svg
          className="welcome-sparkle welcome-sparkle--1"
          viewBox="0 0 24 24"
          width="32"
          height="32"
        >
          <path
            d="M12 0 L13.8 9.2 L24 12 L13.8 14.8 L12 24 L10.2 14.8 L0 12 L10.2 9.2 Z"
            fill="currentColor"
          />
        </svg>
        <div className="welcome-wrap">
          <p className="welcome-text">
            <span className="welcome-text-main">Bienvenue</span>
            <br />
            <span className="welcome-text-sub">sur ma carte de visite numérique</span>
          </p>
        </div>
        <svg
          className="welcome-sparkle welcome-sparkle--2"
          viewBox="0 0 24 24"
          width="26"
          height="26"
        >
          <path
            d="M12 0 L13.8 9.2 L24 12 L13.8 14.8 L12 24 L10.2 14.8 L0 12 L10.2 9.2 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div
        style={{
          opacity: visible ? 0 : 1,
          transform: visible ? "scale(0.97)" : "scale(1)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {children}
      </div>
    </>
  );
}