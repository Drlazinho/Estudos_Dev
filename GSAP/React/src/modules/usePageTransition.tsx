// usePageTransition.js
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export function usePageTransition() {
  const navigate = useNavigate();

  const transitionTo = (targetUrl) => {
    // 1. Primeiro, animamos a cortina para FECHAR (subir)
    gsap.to(".transition-overlay", {
      scaleY: 1,
      transformOrigin: "right",
      duration: 0.8,
      ease: "power4.inOut",
      onComplete: () => {
        // 2. Só quando a animação termina, o React muda a URL
        navigate(targetUrl);
      },
    });
  };

  return transitionTo;
}
