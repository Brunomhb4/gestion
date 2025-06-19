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
        <div className="flex items-center">
          <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-midnight-blue via-navy-blue to-sky-muted rounded-3xl shadow-large animate-float">
            <Waves className="h-7 w-7 text-white" />
          </div>
          <div className="ml-5">
            <h1 className="text-xl font-bold gradient-text">Balnearios</h1>
            <p className="text-xs text-sky-muted font-semibold">Panel Admin</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-2xl text-sky-muted hover:text-midnight-blue hover:bg-sky-light/30 lg:hidden transition-all duration-300 hover:scale-105"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <nav className="sidebar-nav custom-scrollbar">
        <ul className="space-y-2">
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
                  <Icon className="mr-4 h-6 w-6 flex-shrink-0" />
                  <span className="truncate font-semibold">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-6 border-t border-sky-light/30 mt-auto bg-gradient-to-r from-sky-light/10 to-transparent">
        <button 
          onClick={() => {
            logout();
            onClose();
          }} 
          className="w-full flex items-center px-6 py-4 text-sm font-semibold text-error-600 rounded-2xl hover:bg-error-50/80 transition-all duration-300 hover:shadow-soft hover:scale-105"
        >
          <LogOut className="mr-4 h-6 w-6" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;