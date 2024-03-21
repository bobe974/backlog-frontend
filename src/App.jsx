import { useState } from "react";
import "./App.css";
import GameList from "./pages/GameList";
import Header from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div >
        <Header></Header>
      <div className="bg-red-600 h-full hidden md:block">
      
      </div>
      <div className="col-span-4 md:col-span-3 bg-blue-400">
      <GameList></GameList>
      </div>
    </div>
  );
}

export default App;
