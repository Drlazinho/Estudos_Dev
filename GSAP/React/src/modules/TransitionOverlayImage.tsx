import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";

export default function TransitionOverlayImage() {
  const container = useRef();

  //   Pegamos a URL atual para decidir qual imagem mostrar
  const location = useLocation();
  const pageImages = {
    "/": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tYQxyxqTNT4phsKarPH7_-jZd2RDtW5m4w&s",
    "/sobre":
      "https://a.storyblok.com/f/178900/1920x1080/33adf0818e/infinity-castle.jpg/m/1200x0/filters:quality(95)format(webp)",
  };
  const currentImg = pageImages[location.pathname] || pageImages["/"];

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. A imagem surge de baixo para cima dentro do seu container
      tl.from(".transition-img", {
        y: "100%",
        scale: 1.2, // Começa um pouco maior para dar efeito de zoom-out
        duration: 1,
        ease: "power3.out",
      })
        // 2. A cortina abre (revelando a página real por baixo)
        .to(
          ".bg",
          {
            scaleY: 0,
            duration: 1,
            transformOrigin: "top",
            ease: "power4.inOut",
          },
          "+=0.5",
        ) // Espera meio segundo para o usuário ver a imagem
        // 3. A imagem some junto com a cortina
        .to(
          ".img-container",
          {
            opacity: 0,
            y: -50,
            duration: 0.5,
          },
          "<",
        );
    },
    { scope: container },
  );

  return (
    <div ref={container} style={wrapperStyle}>
      <div className="bg" style={bgStyle} />

      {/* Container da Imagem com Máscara */}
      <div className="img-container" style={imgContainerStyle}>
        <img
          src={currentImg}
          //src="https://picsum.photos/400/600" // Aqui você pode usar uma imagem dinâmica
          className="transition-img hover-target" // O cursor vai crescer aqui!          style={imgStyle}
          alt="Transition"
        />
      </div>
    </div>
  );
}

// Estilos específicos para a imagem
const imgContainerStyle = {
  width: "300px",
  height: "400px",
  overflow: "hidden",
  borderRadius: "15px",
  zIndex: 10,
  position: "relative",
  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

// ... (mantenha o wrapperStyle e bgStyle anteriores)
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
