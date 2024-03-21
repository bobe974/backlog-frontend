import "../App.css";
import Header from "../components/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <section className="bg-blue-200">
      <div>
        <Header />
        <Outlet />{" "}
        {/* sert de point de sortie pour le rendu des composants enfants des routes MERDE */}
      </div>
    </section>
  );
}

export default App;
