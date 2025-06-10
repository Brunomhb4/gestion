import React from 'react';
import { useAuthStore } from '../../stores/authStore';
import { Menu, Bell } from 'lucide-react';

interface HeaderProps {
  title: string;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, toggleSidebar }) => {
  const { user } = useAuthStore();
  
  return (
    <header className="bg-white h-16 px-4 border-b border-gray-200 flex items-center justify-between">
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar}
          className="p-1 mr-4 rounded-full text-gray-600 hover:bg-gray-100 lg:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{title}</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-1 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Bell className="h-5 w-5" />
        </button>
        
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
            {user?.name.charAt(0)}
          </div>
          <span className="ml-2 text-sm font-medium text-gray-700 hidden sm:inline-block">
            {user?.name}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;