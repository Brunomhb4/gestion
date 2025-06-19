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
    <header className="header h-20 px-6 lg:px-8 flex items-center justify-between">
      <div className="flex items-center min-w-0 flex-1">
        <button 
          onClick={toggleSidebar}
          className="p-3 mr-4 rounded-2xl text-midnight-blue hover:bg-sky-light/30 lg:hidden focus:outline-none focus:ring-2 focus:ring-sky-muted/20 transition-all duration-300 hover:scale-105"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl lg:text-3xl font-bold gradient-text truncate">{title}</h1>
        </div>
      </div>
      
      <div className="flex items-center space-x-6 lg:space-x-8">
        <button className="p-3 rounded-2xl text-midnight-blue hover:bg-sky-light/30 focus:outline-none focus:ring-2 focus:ring-sky-muted/20 transition-all duration-300 relative hover:scale-105">
          <Bell className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-r from-error-500 to-error-600 rounded-full shadow-soft animate-pulse"></span>
        </button>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-bold text-deep-navy">{user?.name}</p>
            <p className="text-xs text-sky-muted capitalize font-medium">{user?.role}</p>
          </div>
          <div className="h-14 w-14 rounded-3xl bg-gradient-to-br from-midnight-blue via-navy-blue to-sky-muted text-white flex items-center justify-center font-bold shadow-medium hover:shadow-large transition-all duration-300 hover:scale-110 animate-float">
            {user?.name ? user.name.charAt(0).toUpperCase() : <User className="h-6 w-6" />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;