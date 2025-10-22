"use client";

import React, { useEffect, useState } from "react";
import { motion, Transition } from "framer-motion";

const menu = [
  "Home",
  "About Me",
  "Education & Certification",
  "Technical Skills",
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    // initial check
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // framer-motion variants
  const containerTransition: Transition = {
    type: "spring",
    stiffness: 140,
    damping: 20,
  };

  return (
    <header className="fixed left-0 right-0 z-50">
      {/* outer nav always full width; animate inner bar only */}
      <div className="w-full flex justify-center">
        <motion.div
          className="w-full px-6"
          animate={
            scrolled
              ? {
                  scaleX: 0.86,
                  marginTop: 8,
                  paddingTop: 8,
                  paddingBottom: 8,
                  borderRadius: 16,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
                  // beige/grey tint to match screenshot
                  // backgroundColor: "rgba(220,220,220,0.80)",
                  // background: "radial-gradient(circle,rgba(235, 185, 206, 1) 0%, rgba(148, 187, 233, 1) 100%)",
                  background:
                    "linear-gradient(90deg, rgba(149, 145, 204, 0.5) 0%, rgba(160, 160, 232, 0.5) 35%, rgba(103, 185, 201, 0.5) 100%)",
                  // background:
                  //   "linear-gradient(90deg, rgba(251, 245, 226, 1) 12%, rgba(238, 217, 231, 1) 36%, rgba(175, 216, 248, 1) 75%, rgba(137, 151, 210, 1) 100%)",
                }
              : {
                  scaleX: 1,
                  marginTop: 20,
                  paddingTop: 28,
                  paddingBottom: 28,
                  borderRadius: 0,
                  boxShadow: "0 0px 0px rgba(0,0,0,0)",
                  backgroundColor: "rgba(0,0,0,0)",
                }
          }
          style={{
            transformOrigin: "center" as const,
            backdropFilter: scrolled ? "blur(6px)" : "none",
          }}
          transition={containerTransition}
        >
          <div
            className="mx-auto flex items-center justify-between"
            style={{ maxWidth: 1200 }}
          >
            {/* left avatar (no text scaling) */}
            <div className="flex items-center">
              <div
                className={` flex items-center justify-center font-bold rounded-full bg-gradient-to-br overflow-hidden shadow-md ${
                  scrolled ? "text-white" : "text-slate-800  from-sky-100 to-sky-200 "
                } `}
                style={{ width: 48, height: 48 }}
              >
                KH
              </div>
            </div>

            {/* center menu (font sizes fixed) */}
            <div
              className={`flex items-center ${scrolled ? "gap-8" : "gap-12"}`}
            >
              {menu.map((items: string, index: number) => (
                <a
                  key={index}
                  href={`#${items}`}
                  className={`relative inline-flex items-center justify-center overflow-hidden group rounded-2xl transition-all duration-200 px-4 py-1 ${
                    scrolled ? "text-white" : "text-slate-800"
                  }`}
                >
                  {/* hover pill background: soft sky when unscrolled, semi-transparent white when scrolled */}
                  {scrolled ? (
                    <span className="absolute inset-0 rounded-full transform transition-all duration-200 bg-sky-500/30 group-hover:bg-sky-600/40 shadow-sm opacity-0 group-hover:opacity-100" />
                  ) : (
                    <span className="absolute inset-0 rounded-full transform transition-all duration-200 bg-gradient-to-br from-sky-100 to-sky-200 shadow-sm opacity-0 group-hover:opacity-100" />
                  )}
                  <span className="relative z-10 select-none drop-shadow-sm text-base font-semibold">
                    {items}
                  </span>
                </a>
              ))}
            </div>

            {/* right action (no scaling) */}
            <div> 
              <button
                className={`w-10 h-10 rounded-lg bg-gradient-to-br shadow-md transition-all duration-300 ${
                  scrolled ? "text-white " : "text-slate-800 from-sky-100 to-sky-200 "
                } `}
              >
                ◐
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
