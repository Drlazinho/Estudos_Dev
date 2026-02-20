import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// SEMPRE registre os plugins fora do componente
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function GSAPComponent() {
  const container = useRef(); // Referência para o container pai

  useGSAP(
    () => {
      // 1. TIMELINE BÁSICA
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // O escopo { scope: container } permite usar seletores simples (como ".title")
      // que só afetam elementos DENTRO deste componente.
      tl.from(".title", { y: 30, opacity: 0, duration: 1 }).from(
        ".box",
        { scale: 0, stagger: 0.2 },
        "-=0.5",
      );

      // 2. SCROLLTRIGGER NO REACT
      gsap.to(".scroll-box", {
        x: 300,
        rotation: 360,
        scrollTrigger: {
          trigger: ".scroll-box",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });
    },
    { scope: container },
  ); // O scope é a "âncora" de segurança do GSAP

  return (
    <div ref={container} className="main-wrapper">
      <section className="hero">
        <h1 className="title">GSAP + React</h1>
        <div className="box" style={boxStyle}>
          1
        </div>
        <div className="box" style={boxStyle}>
          2
        </div>
      </section>

      <section style={{ height: "100vh", padding: "100px 0" }}>
        <h2>Role para ver o ScrollTrigger</h2>
        <div className="scroll-box" style={boxStyle}>
          React Scroll
        </div>
      </section>
    </div>
  );
}

const boxStyle = { width: 100, height: 100, background: "#5600ff", margin: 10 };
