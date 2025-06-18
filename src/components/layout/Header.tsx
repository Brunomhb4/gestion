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
    <header className="bg-white/80 backdrop-blur-md h-18 px-6 lg:px-8 border-b border-sky-200/50 flex items-center justify-between shadow-sm">
      <div className="flex items-center min-w-0 flex-1">
        <button 
          onClick={toggleSidebar}
          className="p-3 mr-4 rounded-xl text-navy-600 hover:bg-navy-50 lg:hidden focus:outline-none focus:ring-2 focus:ring-navy-500/20 transition-all duration-300"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="text-xl lg:text-2xl font-semibold text-navy-900 truncate">{title}</h1>
        </div>
      </div>
      
      <div className="flex items-center space-x-4 lg:space-x-6">
        <button className="p-3 rounded-xl text-navy-600 hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-500/20 transition-all duration-300 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-sm"></span>
        </button>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-semibold text-navy-900">{user?.name}</p>
            <p className="text-xs text-sage-600 capitalize">{user?.role}</p>
          </div>
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-navy-600 to-sage-600 text-white flex items-center justify-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            {user?.name ? user.name.charAt(0).toUpperCase() : <User className="h-5 w-5" />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;