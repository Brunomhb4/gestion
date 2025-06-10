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
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg">
            <Waves className="h-6 w-6 text-white" />
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-bold text-gray-900">Balnearios</h1>
            <p className="text-xs text-gray-500">Panel Admin</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 lg:hidden transition-colors duration-200"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <nav className="sidebar-nav custom-scrollbar">
        <ul className="space-y-2 px-3">
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
                  <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200 mt-auto">
        <button 
          onClick={() => {
            logout();
            onClose();
          }} 
          className="w-full flex items-center px-4 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;