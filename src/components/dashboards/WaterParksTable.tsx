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
      <div className="mb-10 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold gradient-text mb-3">Resumen de Balnearios</h2>
          <p className="text-base text-sky-muted font-medium">Información general de todos los balnearios</p>
        </div>
        <div className="flex items-center text-sm text-midnight-blue bg-gradient-to-r from-sky-light/40 to-blue-soft/20 px-6 py-3 rounded-2xl border border-sky-light/40 backdrop-blur-sm shadow-soft">
          <Activity className="h-5 w-5 mr-3" />
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
                <th className="table-header-cell hidden md:table-cell">Tickets Vendidos</th>
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
                      <div className="h-14 w-14 rounded-3xl bg-gradient-to-br from-midnight-blue via-navy-blue to-sky-muted flex items-center justify-center text-white font-bold text-base mr-5 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-110">
                        {park.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-deep-navy text-lg">{park.name}</div>
                        <div className="text-xs text-sky-muted mt-1 font-medium">ID: {park.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="table-body-cell">
                    <span className="badge badge-primary font-bold text-sm">
                      {park.activeTickets.toLocaleString()}
                    </span>
                  </td>
                  <td className="table-body-cell hidden md:table-cell">
                    <span className="badge badge-success font-bold text-sm">
                      {park.soldTickets.toLocaleString()}
                    </span>
                  </td>
                  <td className="table-body-cell hidden lg:table-cell">
                    <span className="font-bold text-sky-muted text-lg">
                      ${park.totalRevenue.toLocaleString()}
                    </span>
                  </td>
                  <td className="table-body-cell">
                    <Link
                      to={`${basePath}/waterpark/${park.id}`}
                      className="inline-flex items-center px-6 py-3 text-sm font-semibold text-midnight-blue hover:text-white hover:bg-gradient-to-r hover:from-midnight-blue hover:to-navy-blue rounded-2xl transition-all duration-300 hover:shadow-medium hover:scale-105 border border-sky-light/40 bg-white/50 backdrop-blur-sm"
                    >
                      <span className="mr-3">Ver detalles</span>
                      <ExternalLink className="h-4 w-4" />
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