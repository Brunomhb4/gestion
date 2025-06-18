import React from 'react';
import { useAuthStore } from '../../stores/authStore';
import { Menu, Bell, User } from 'lucide-react';

interface HeaderProps {
  title: string;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, toggleSidebar }) => {
  const { user } = useAuthStore();
  
  return (
    <header className="bg-white h-16 px-4 lg:px-6 border-b border-blue-200 flex items-center justify-between shadow-sm">
      <div className="flex items-center min-w-0 flex-1">
        <button 
          onClick={toggleSidebar}
          className="p-2 mr-3 rounded-lg text-navy-600 hover:bg-blue-100 lg:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 transition-colors duration-200"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="text-lg lg:text-xl font-semibold text-navy-900 truncate">{title}</h1>
        </div>
      </div>
      
      <div className="flex items-center space-x-3 lg:space-x-4">
        <button className="p-2 rounded-lg text-navy-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 transition-colors duration-200 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-navy-900">{user?.name}</p>
            <p className="text-xs text-sage-500 capitalize">{user?.role}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-navy-500 to-navy-600 text-white flex items-center justify-center font-medium shadow-sm">
            {user?.name ? user.name.charAt(0).toUpperCase() : <User className="h-5 w-5" />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;