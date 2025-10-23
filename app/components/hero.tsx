"use client";

import React, { useState, useEffect, useRef } from "react";
import Icons from "../elements/icons";
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
    <section
      id="hero"
      className={`${styles.hero} w-full flex flex-col justify-center px-20`}
    >
      <div
        className="w-full flex flex-col items-start justify-center text-left"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h1 className={`${styles.title} text-4xl md:text-5xl`}>
          {personal.name}
        </h1>
        <p className={`${styles.subtitle} mt-3 text-lg md:text-xl`}>
          I&apos;m{" "}
          <span
            className="typed font-semibold text-indigo-600"
            ref={el}
            data-typed-items={personal.title}
          ></span>
        </p>
        {/* 
        <div className="flex items-center justify-center gap-4 mt-4">
          {personal.socials &&
            personal.socials.map((social, index) => (
              <a
                href={social.url}
                className="text-gray-600 hover:text-gray-800"
                key={`social_${index}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className={social.icon}></i>
              </a>
            ))}
        </div> */}
      </div>

      <div
        // className={`${styles.logoArea} w-full px-6 sm:px-12 md:px-24 lg:px-40 `}
          className={`${styles.logoArea} w-full mt-8`}
      >
        <Icons />
      </div>
    </section>
  );
};

export default Hero;
