import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">DataCamp</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">首页</Link>
            <Link to="/modules" className="text-gray-700 hover:text-blue-600 font-medium">课程模块</Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-600 font-medium">资源中心</Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={toggleMenu}
              >
                首页
              </Link>
              <Link
                to="/modules"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={toggleMenu}
              >
                课程模块
              </Link>
              <Link
                to="/resources"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={toggleMenu}
              >
                资源中心
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;