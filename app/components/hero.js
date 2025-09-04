'use client';
import React, { useState, useEffect } from "react";
import Typed from 'typed.js';
import data from '../data/personal.json';

const HeroSection = () => {
    const [personal] = useState(data);

    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    useEffect(() => {
        const select = (el, all = false) => {
            el = el.trim()
            if (all) {
              return [...document.querySelectorAll(el)]
            } else {
              return document.querySelector(el)
            }
          };

         /**
         * Hero type effect
         */
         const typed = select('.typed');
         if (typed) {
           let typed_strings = typed.getAttribute('data-typed-items')
           typed_strings = typed_strings.split(',')
           const type = new Typed('.typed', {
             strings: typed_strings,
             loop: true,
             typeSpeed: 100,
             backSpeed: 50,
             backDelay: 2000,
             cursorChar: "|"
           });
     
           return () => {
             // Destroy Typed instance during cleanup to stop animation
             type.destroy();
           };
         }
    });

    return ( 
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>{personal.name}</h1>
                <p>I&apos;m <span className="typed" ref={el} data-typed-items={personal.title}></span></p>
                <div className="social-links">
                    {
                        personal.socials && personal.socials.map((social, index) => {
                            return (
                                <a href={social.url} className={social.name} key={'social_' + index} target="_blank"><i className={social.icon}></i></a>
                            )
                        })
                    }
                </div>
            </div>
        </section>
     );
}
 
export default HeroSection;