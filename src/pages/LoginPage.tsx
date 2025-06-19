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
    <div className="min-h-screen bg-gradient-to-br from-sky-light via-white to-blue-soft/30 particle-bg flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-10">
          <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-midnight-blue via-navy-blue to-sky-muted rounded-4xl shadow-large hover:shadow-xl transition-all duration-300 hover:scale-110 animate-float">
            <Waves className="h-12 w-12 text-white" />
          </div>
        </div>
        <h2 className="text-center text-5xl font-bold gradient-text mb-4">
          Panel de Administración
        </h2>
        <p className="text-center text-lg text-sky-muted font-semibold">
          Gestión integral de balnearios
        </p>
      </div>

      <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="card shadow-large animate-scale-in">
          {error && (
            <div className="mb-8 bg-error-50/90 backdrop-blur-sm border-2 border-error-200/50 p-6 rounded-2xl flex items-start animate-slide-in">
              <AlertOctagon className="h-6 w-6 text-error-500 mr-4 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-error-700 font-semibold">{error}</p>
            </div>
          )}
          
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="label text-base">
                Correo electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <AtSign className="h-6 w-6 text-sky-muted" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input pl-14 text-base"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="label text-base">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Lock className="h-6 w-6 text-sky-muted" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pl-14 pr-14 text-base"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-5 flex items-center hover:bg-sky-light/20 rounded-r-2xl transition-colors duration-300"
                >
                  {showPassword ? (
                    <EyeOff className="h-6 w-6 text-sky-muted hover:text-midnight-blue" />
                  ) : (
                    <Eye className="h-6 w-6 text-sky-muted hover:text-midnight-blue" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full flex justify-center py-5 text-base font-bold"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-4"></div>
                    Iniciando sesión...
                  </div>
                ) : (
                  'Iniciar sesión'
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-12">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-sky-light/40"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-6 bg-white text-sky-muted font-bold text-base">
                  Cuentas de demostración
                </span>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {demoAccounts.map((account) => (
                <button
                  key={account.label}
                  onClick={() => setDemoAccount(account.email, account.password)}
                  className="w-full text-left px-8 py-5 border-2 border-sky-light/40 rounded-2xl shadow-soft text-sm bg-white/60 backdrop-blur-sm hover:bg-sky-light/30 hover:border-sky-muted/40 transition-all duration-300 group hover:shadow-medium hover:scale-102"
                >
                  <div className="font-bold text-midnight-blue group-hover:text-deep-navy mb-2 text-base">
                    {account.label}
                  </div>
                  <div className="text-sm text-sky-muted font-medium">
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