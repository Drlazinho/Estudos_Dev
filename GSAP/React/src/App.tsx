import "./App.css";
import GSAPComponent from "./modules/GSAPComponent1";
import TransitionOverlay from "./modules/TransitionOverlay";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import SobrePage from "./page/Sobre";
import TransitionOverlayImage from "./modules/TransitionOverlayImage";
import CustomCursor from "./modules/CustomCursor";
import SmoothScroll from "./modules/SmoothScroll";

function AppContent() {
  const location = useLocation(); // Esse hook pega a URL atual

  return (
    <>
      <SmoothScroll>
        <CustomCursor />
        <TransitionOverlayImage key={location.pathname} />{" "}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
        </Routes>
        <GSAPComponent />
      </SmoothScroll>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
