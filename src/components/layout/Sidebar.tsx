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
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-navy-600 to-sage-600 rounded-2xl shadow-lg">
            <Waves className="h-6 w-6 text-white" />
          </div>
          <div className="ml-4">
            <h1 className="text-xl font-bold text-navy-900">Balnearios</h1>
            <p className="text-xs text-sage-600 font-medium">Panel Admin</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-xl text-sage-400 hover:text-navy-600 hover:bg-navy-50 lg:hidden transition-all duration-300"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <nav className="sidebar-nav custom-scrollbar">
        <ul className="space-y-1">
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
                  <Icon className="mr-4 h-5 w-5 flex-shrink-0" />
                  <span className="truncate font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-6 border-t border-sky-200/50 mt-auto">
        <button 
          onClick={() => {
            logout();
            onClose();
          }} 
          className="w-full flex items-center px-6 py-4 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-all duration-300 hover:shadow-sm"
        >
          <LogOut className="mr-4 h-5 w-5" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;