import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function TransitionOverlay() {
  const overlayRef = useRef();

  // EXEMPLO 3 - ANIMAÇÃO DAS LETRAS
  const text = "CARREGANDO"; // O texto que vamos quebrar
  const letters = text.split("");

  //Exemplo 1
  //   useGSAP(
  //     () => {
  //       // Definimos a animação inicial (o que acontece quando a página carrega)
  //       gsap.to(overlayRef.current, {
  //         duration: 1,
  //         scaleY: 0,
  //         transformOrigin: "top",
  //         ease: "power4.inOut",
  //         delay: 0.5,
  //       });
  //     },
  //     { scope: overlayRef },
  //   );

  //Exemplo 2 colocando texto
  //   useGSAP(
  //     () => {
  //       const tl = gsap.timeline();

  //       // 1. A cortina 'abre' (revelando a nova página)
  //       tl.to(".bg", {
  //         scaleY: 0,
  //         duration: 1.2,
  //         transformOrigin: "top",
  //         ease: "power4.inOut",
  //         delay: 0.8, // Pausa curta para o usuário ler o texto
  //       })
  //         // 2. O texto desaparece um pouco antes da cortina terminar de subir
  //         .to(
  //           ".loader-text",
  //           {
  //             opacity: 0,
  //             y: -20,
  //             duration: 0.4,
  //           },
  //           "-=1",
  //         );
  //     },
  //     { scope: overlayRef },
  //   );

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. As letras aparecem uma a uma (Efeito Stagger)
      tl.from(".letter", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(3)",
      })
        // 2. A cortina abre
        .to(
          ".bg",
          {
            scaleY: 0,
            duration: 1,
            transformOrigin: "top",
            ease: "power4.inOut",
          },
          "+=0.2",
        ) // Pequena pausa após as letras aparecerem
        // 3. As letras sobem e somem junto com a cortina
        .to(
          ".letter",
          {
            y: -50,
            opacity: 0,
            stagger: 0.02,
            duration: 0.4,
          },
          "<",
        ); // O símbolo "<" faz começar JUNTO com a cortina
    },
    { scope: overlayRef },
  );

  return (
    <div ref={overlayRef} style={wrapperStyle} className="transition-overlay">
      {/* O fundo da cortina */}
      <div className="bg" style={bgStyle} />

      <div style={{ display: "flex", overflow: "hidden" }}>
        {letters.map((char, i) => (
          <span key={i} className="letter" style={letterStyle}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  backgroundColor: "#5600ff",
  zIndex: 9999,
  transform: "scaleY(1)", // Começa cobrindo tudo
};

// Estilos rápidos para sua consulta
const wrapperStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  zIndex: 9999,
  pointerEvents: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const bgStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#5600ff",
  transform: "scaleY(1)",
};

const textStyle = {
  position: "relative",
  color: "white",
  fontSize: "2rem",
  zIndex: 10,
};

//Exemplo 3 - Estilos para o Stagger
const letterStyle = {
  display: "inline-block", // Essencial para o GSAP conseguir animar Transform (y, rotation)
  color: "white",
  fontSize: "3rem",
  fontWeight: "bold",
  zIndex: 10,
};
