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

  return (
    <aside className="bg-white h-screen w-64 shadow-sm border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center">
          <Waves className="h-8 w-8 text-blue-600" />
          <h1 className="ml-2 text-xl font-semibold text-gray-900">Balnearios</h1>
        </div>
        <button 
          onClick={onClose}
          className="p-1 rounded-full text-gray-600 hover:bg-gray-100 lg:hidden"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto pt-4">
        <ul className="px-2 space-y-1">
          {/* Dashboard Link - different for each role */}
          <li>
            <Link 
              to={userRole === 'admin' ? '/admin' : '/superadmin'} 
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive(userRole === 'admin' ? '/admin' : '/superadmin')
                ? 'text-blue-700 bg-blue-50'
                : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
              }`}
              onClick={onClose}
            >
              <LayoutDashboard className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
          </li>
          
          {/* SuperAdmin Only Links */}
          {userRole === 'superadmin' && (
            <>
              <li>
                <Link 
                  to="/superadmin/waterparks" 
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive('/superadmin/waterparks')
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                  }`}
                  onClick={onClose}
                >
                  <Waves className="mr-3 h-5 w-5" />
                  Gestión de Balnearios
                </Link>
              </li>
              <li>
                <Link 
                  to="/superadmin/users" 
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive('/superadmin/users')
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                  }`}
                  onClick={onClose}
                >
                  <Users className="mr-3 h-5 w-5" />
                  Gestión de Usuarios
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <button 
          onClick={() => {
            logout();
            onClose();
          }} 
          className="w-full flex items-center px-4 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;