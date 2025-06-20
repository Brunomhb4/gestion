import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { useWaterParksStore } from '../../stores/waterParksStore';
import { ExternalLink, Activity } from 'lucide-react';

const WaterParksTable: React.FC = () => {
  const { waterParks } = useWaterParksStore();
  const { userRole } = useAuthStore();
  
  const basePath = userRole === 'admin' ? '/admin' : '/superadmin';
  
  return (
    <div className="card floating-card">
      <div className="mb-6 sm:mb-8 lg:mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="min-w-0 flex-1">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-2 sm:mb-3">Resumen de Balnearios</h2>
          <p className="text-sm sm:text-base text-sky-muted font-medium">Información general de todos los balnearios</p>
        </div>
        <div className="flex items-center text-xs sm:text-sm text-midnight-blue bg-gradient-to-r from-sky-light/40 to-blue-soft/20 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-xl sm:rounded-2xl border border-sky-light/40 backdrop-blur-sm shadow-soft flex-shrink-0">
          <Activity className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
          <span className="font-semibold">{waterParks.length} balnearios</span>
        </div>
      </div>
      
      <div className="table-container">
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="table-header">
              <tr>
                <th className="table-header-cell">Nombre del Balneario</th>
                <th className="table-header-cell">Tickets Activos</th>
                <th className="table-header-cell hidden sm:table-cell">Tickets Vendidos</th>
                <th className="table-header-cell hidden lg:table-cell">Ingresos</th>
                <th className="table-header-cell">Acciones</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {waterParks.map((park, index) => (
                <tr 
                  key={park.id} 
                  className="table-row animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <td className="table-body-cell">
                    <div className="flex items-center">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-midnight-blue via-navy-blue to-sky-muted flex items-center justify-center text-white font-bold text-sm sm:text-base mr-3 sm:mr-4 lg:mr-5 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-110 flex-shrink-0">
                        {park.name.charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-deep-navy text-sm sm:text-base lg:text-lg truncate">{park.name}</div>
                        <div className="text-xs text-sky-muted mt-0.5 sm:mt-1 font-medium">ID: {park.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="table-body-cell">
                    <span className="badge badge-primary font-bold text-xs sm:text-sm">
                      {park.activeTickets.toLocaleString()}
                    </span>
                  </td>
                  <td className="table-body-cell hidden sm:table-cell">
                    <span className="badge badge-success font-bold text-xs sm:text-sm">
                      {park.soldTickets.toLocaleString()}
                    </span>
                  </td>
                  <td className="table-body-cell hidden lg:table-cell">
                    <span className="font-bold text-sky-muted text-sm sm:text-base lg:text-lg">
                      ${park.totalRevenue.toLocaleString()}
                    </span>
                  </td>
                  <td className="table-body-cell">
                    <Link
                      to={`${basePath}/waterpark/${park.id}`}
                      className="inline-flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm font-semibold text-midnight-blue hover:text-white hover:bg-gradient-to-r hover:from-midnight-blue hover:to-navy-blue rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-medium hover:scale-105 border border-sky-light/40 bg-white/50 backdrop-blur-sm"
                    >
                      <span className="mr-2 sm:mr-3 hidden sm:inline">Ver detalles</span>
                      <span className="mr-2 sm:hidden">Ver</span>
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WaterParksTable;