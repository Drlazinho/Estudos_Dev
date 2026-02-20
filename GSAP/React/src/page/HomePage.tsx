import { usePageTransition } from "../modules/usePageTransition";

export function HomePage() {
  const transitionTo = usePageTransition();

  return (
    <div>
      <h1>Bem-vindo, Lazinho!</h1>
      <button onClick={() => transitionTo("/sobre")}>
        Ir para Sobre (Com Animação)
      </button>
    </div>
  );
}
