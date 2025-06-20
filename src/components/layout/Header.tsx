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
    <header className="header h-16 sm:h-18 lg:h-20 px-3 sm:px-4 lg:px-6 xl:px-8 flex items-center justify-between">
      <div className="flex items-center min-w-0 flex-1">
        <button 
          onClick={toggleSidebar}
          className="p-2 sm:p-3 mr-2 sm:mr-4 rounded-xl sm:rounded-2xl text-midnight-blue hover:bg-sky-light/30 lg:hidden focus:outline-none focus:ring-2 focus:ring-sky-muted/20 transition-all duration-300 hover:scale-105"
        >
          <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold gradient-text truncate">{title}</h1>
        </div>
      </div>
      
      <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 xl:space-x-8">
        <button className="p-2 sm:p-3 rounded-xl sm:rounded-2xl text-midnight-blue hover:bg-sky-light/30 focus:outline-none focus:ring-2 focus:ring-sky-muted/20 transition-all duration-300 relative hover:scale-105">
          <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 h-3 w-3 sm:h-4 sm:w-4 bg-gradient-to-r from-error-500 to-error-600 rounded-full shadow-soft animate-pulse"></span>
        </button>
        
        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
          <div className="hidden sm:block text-right">
            <p className="text-xs sm:text-sm font-bold text-deep-navy truncate max-w-24 sm:max-w-32 lg:max-w-none">{user?.name}</p>
            <p className="text-xs text-sky-muted capitalize font-medium">{user?.role}</p>
          </div>
          <div className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-midnight-blue via-navy-blue to-sky-muted text-white flex items-center justify-center font-bold shadow-medium hover:shadow-large transition-all duration-300 hover:scale-110 animate-float">
            {user?.name ? (
              <span className="text-sm sm:text-base lg:text-lg">{user.name.charAt(0).toUpperCase()}</span>
            ) : (
              <User className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;