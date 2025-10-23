"use client";

import React, { useState, useEffect, useRef } from "react";
import Icons from "../elements/icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Typed from "typed.js";
import personalData from "../data/personal.json";
import styles from "../../style/hero.module.css";

const Hero: React.FC = () => {
  const [personal] = useState(personalData);

  // React ref for Typed.js target element
  const el = useRef<HTMLSpanElement | null>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      const typedItems = el.current.getAttribute("data-typed-items");
      const strings = typedItems ? typedItems.split(",") : ["Welcome!"];

      typedInstance.current = new Typed(el.current, {
        strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        cursorChar: "|",
      });
    }

    return () => {
      // Clean up Typed.js instance
      typedInstance.current?.destroy();
    };
  }, []);

  return (
    <section id="hero" className={`${styles.hero} w-full relative `}>
      <div className="w-full px-6 sm:px-12 md:px-20 mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="w-full md:grid md:grid-cols-[auto_1fr] md:gap-12 items-start" data-aos="zoom-in" data-aos-delay="100">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className={`${styles.title} text-7xl md:text-[6.5rem] text-gray-700`}>
                {personal.name}
              </h1>
              <p className={`${styles.subtitle} mt-3 text-xl md:text-2xl`}>
                I&apos;m{" "}
                <span
                  className="typed font-semibold text-indigo-600"
                  ref={el}
                  data-typed-items={personal.title}
                ></span>
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                {personal.socials &&
                  personal.socials.map((social, index) => {
                    // Map known social names to react-icons components
                    const getIcon = (name: string) => {
                      const n = name.toLowerCase();
                      if (n.includes("linkedin")) return FaLinkedin;
                      if (n.includes("github") || n.includes("git")) return FaGithub;
                      return null;
                    };

                    const Icon = getIcon(social.name || social.icon || "");

                    return (
                      <a
                        href={social.url}
                        key={`social_${index}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center justify-center w-12 h-12 bg-transparent text-gray-500 rounded-lg shadow-sm transform transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
                        aria-label={social.name || `social-${index}`}
                      >
                        {Icon ? <Icon size={30} /> : <i className={social.icon} />}
                      </a>
                    );
                  })}
              </div>
            </div>

            {/* Right-side paragraph shown on md+ screens, aligned to top of title */}
            <div className="hidden md:flex col-span-1 items-start mt-8">
              <p className="text-gray-600 text-2xl leading-snug whitespace-break-spaces">
                Transforming ideas into interactive and seamless digital experiences with cutting-edge frontend development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* place logo loop inside hero background at bottom */}
      <div
        className={`${styles.logoArea} absolute left-0 right-0 bottom-0 flex justify-center md:justify-start`}
      >
        <Icons />
      </div>
    </section>
  );
};

export default Hero;
