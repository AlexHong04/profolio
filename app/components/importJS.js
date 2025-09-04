'use client'
import { useEffect } from "react";
import AOS from 'aos';

export default function ImportJS() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    import('../assets/js/main.js');
    
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return null;
}
