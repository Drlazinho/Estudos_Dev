import { usePageTransition } from "../modules/usePageTransition";

export function SobrePage() {
  const transitionTo = usePageTransition();

  return (
    <div>
      <h1>Sobre</h1>
      <p>
        Esta é a página Sobre. Adicione aqui informações sobre você ou o
        projeto.
      </p>
      <button onClick={() => transitionTo("/")}>Voltar para Home</button>
    </div>
  );
}

export default SobrePage;
