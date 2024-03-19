import { useState } from "react";
import "./App.css";
import GameList from "./components/GameList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-4">
      <div className="bg-red-600 h-full hidden md:block">
      
      </div>
      <div className="col-span-4 md:col-span-3 bg-blue-400">
      <GameList></GameList>
      </div>
    </div>
  );
}

export default App;
