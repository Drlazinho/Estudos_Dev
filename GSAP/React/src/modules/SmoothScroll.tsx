// SmoothScroll.jsx
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    // 1. Inicializa o Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Suavidade extrema
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // 2. Sincroniza o Lenis com o ScrollTrigger do GSAP
    // Isso é VITAL: sem isso, o GSAP não sabe onde o scroll realmente está
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return <>{children}</>;
}
