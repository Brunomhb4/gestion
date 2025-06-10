import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { Waves, AtSign, Lock, AlertOctagon, Eye, EyeOff } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login, userRole, isAuthenticated } = useAuthStore();
  
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate(userRole === 'admin' ? '/admin' : '/superadmin');
    }
  }, [isAuthenticated, userRole, navigate]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Por favor ingresa tu email y contraseña');
      return;
    }
    
    try {
      setLoading(true);
      await login(email, password);
    } catch (err) {
      setError((err as Error).message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };
  
  const demoAccounts = [
    { 
      label: 'Admin Paradise', 
      email: 'admin1@example.com', 
      password: 'password',
      description: 'Administrador de Acuático Paradise'
    },
    { 
      label: 'Admin Aqua Fun', 
      email: 'admin2@example.com', 
      password: 'password',
      description: 'Administrador de Aqua Fun'
    },
    { 
      label: 'Super Admin', 
      email: 'superadmin@example.com', 
      password: 'password',
      description: 'Administrador General'
    },
  ];
  
  const setDemoAccount = (email: string, password: string) => {
    setEmail(email);
    setPassword(password);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg">
            <Waves className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Panel de Administración
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Gestión integral de balnearios
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="card shadow-xl">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 p-4 rounded-lg flex items-start animate-slide-in">
              <AlertOctagon className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="label">
                Correo electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <AtSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input pl-10"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="label">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pl-10 pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full flex justify-center py-3 text-base"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Iniciando sesión...
                  </div>
                ) : (
                  'Iniciar sesión'
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500 font-medium">
                  Cuentas de demostración
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {demoAccounts.map((account) => (
                <button
                  key={account.label}
                  onClick={() => setDemoAccount(account.email, account.password)}
                  className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg shadow-sm text-sm bg-white hover:bg-gray-50 hover:border-primary-300 transition-all duration-200 group"
                >
                  <div className="font-medium text-gray-900 group-hover:text-primary-700">
                    {account.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {account.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;