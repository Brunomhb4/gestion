import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { 
  Home, 
  LayoutDashboard, 
  Users, 
  Waves, 
  LogOut,
  X
} from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const { userRole, logout } = useAuthStore();
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const navItems = [
    {
      path: userRole === 'admin' ? '/admin' : '/superadmin',
      icon: LayoutDashboard,
      label: 'Dashboard',
      show: true
    },
    {
      path: '/superadmin/waterparks',
      icon: Waves,
      label: 'Gestión de Balnearios',
      show: userRole === 'superadmin'
    },
    {
      path: '/superadmin/users',
      icon: Users,
      label: 'Gestión de Usuarios',
      show: userRole === 'superadmin'
    }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="flex items-center min-w-0 flex-1">
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-midnight-blue via-navy-blue to-sky-muted rounded-2xl sm:rounded-3xl shadow-large animate-float flex-shrink-0">
            <Waves className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
          </div>
          <div className="ml-3 sm:ml-4 lg:ml-5 min-w-0 flex-1">
            <h1 className="text-base sm:text-lg lg:text-xl font-bold gradient-text truncate">Balnearios</h1>
            <p className="text-xs font-semibold text-sky-muted truncate">Panel Admin</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-1.5 sm:p-2 rounded-xl sm:rounded-2xl text-sky-muted hover:text-midnight-blue hover:bg-sky-light/30 lg:hidden transition-all duration-300 hover:scale-105 flex-shrink-0"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
      
      <nav className="sidebar-nav custom-scrollbar">
        <ul className="space-y-1 sm:space-y-2">
          {navItems.filter(item => item.show).map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={`sidebar-nav-item ${
                    active ? 'sidebar-nav-item-active' : 'sidebar-nav-item-inactive'
                  }`}
                  onClick={onClose}
                >
                  <Icon className="mr-2 sm:mr-3 lg:mr-4 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                  <span className="truncate font-semibold text-xs sm:text-sm">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-3 sm:p-4 lg:p-6 border-t border-sky-light/30 mt-auto bg-gradient-to-r from-sky-light/10 to-transparent">
        <button 
          onClick={() => {
            logout();
            onClose();
          }} 
          className="w-full flex items-center px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4 text-xs sm:text-sm font-semibold text-error-600 rounded-xl sm:rounded-2xl hover:bg-error-50/80 transition-all duration-300 hover:shadow-soft hover:scale-105"
        >
          <LogOut className="mr-2 sm:mr-3 lg:mr-4 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
          <span className="truncate">Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;