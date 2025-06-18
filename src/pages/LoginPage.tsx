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
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sage-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-8">
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-navy-600 to-sage-600 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Waves className="h-10 w-10 text-white" />
          </div>
        </div>
        <h2 className="text-center text-4xl font-bold text-navy-900 mb-3">
          Panel de Administración
        </h2>
        <p className="text-center text-base text-sage-600 font-medium">
          Gestión integral de balnearios
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="card shadow-2xl animate-scale-in">
          {error && (
            <div className="mb-8 bg-red-50/80 backdrop-blur-sm border border-red-200/50 p-5 rounded-xl flex items-start animate-slide-in">
              <AlertOctagon className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-700 font-medium">{error}</p>
            </div>
          )}
          
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="label">
                Correo electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <AtSign className="h-5 w-5 text-sage-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input pl-12"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="label">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-sage-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pl-12 pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-navy-50 rounded-r-xl transition-colors duration-300"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-sage-400 hover:text-sage-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-sage-400 hover:text-sage-600" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full flex justify-center py-4 text-base font-semibold"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Iniciando sesión...
                  </div>
                ) : (
                  'Iniciar sesión'
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-sage-200/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-sage-600 font-medium">
                  Cuentas de demostración
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {demoAccounts.map((account) => (
                <button
                  key={account.label}
                  onClick={() => setDemoAccount(account.email, account.password)}
                  className="w-full text-left px-6 py-4 border border-sage-200/50 rounded-xl shadow-sm text-sm bg-white/50 backdrop-blur-sm hover:bg-sky-50/50 hover:border-navy-300/50 transition-all duration-300 group hover:shadow-md"
                >
                  <div className="font-semibold text-navy-900 group-hover:text-navy-700 mb-1">
                    {account.label}
                  </div>
                  <div className="text-xs text-sage-600">
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