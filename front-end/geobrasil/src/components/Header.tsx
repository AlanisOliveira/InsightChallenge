import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../services/authService'; 

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loginStatus') === 'true');

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
  };
  return (
    <header className="border-gray-200 px-4 lg:px-6 py-2.5 bg-[#000000]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-AeonikBold text-slate-50">GeoBrasil</div>
        <nav className="flex-1">
          <ul className="flex justify-center space-x-4 font-medium text-white text-lg">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/noticias">Notícias</Link></li>
          </ul>
        </nav>
        <div className='text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:focus:ring-green-800'>
          {isLoggedIn ? (
            <button onClick={handleLogout}>
              Sair
            </button>
          ) : (
            <Link to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
