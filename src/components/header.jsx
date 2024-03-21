import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">GameStacker</Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Les jeux</Link>
            </li>
            <li>
              <Link to="/backlog">Mon backlog</Link>
            </li>
          </ul>
        </nav>
        <div>
          <input type="text" placeholder="Rechercher..." className="px-2 py-1 rounded mr-2" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">Rechercher</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
