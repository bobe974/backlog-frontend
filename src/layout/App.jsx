import "../App.css";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import ApplicationContextProvider from "../context/ApplicationContextProvider";

function App() {
  return (
    <section className="bg-blue-200">
      <div>
        <Header />
       
        <ApplicationContextProvider><Outlet /></ApplicationContextProvider>
        {/* sert de point de sortie pour le rendu des composants enfants des routes MERDE */}
      </div>
    </section>
  );
}

export default App;
