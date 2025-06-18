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
    <div className="card">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-navy-900">Resumen de Balnearios</h2>
          <p className="text-sm text-sage-600 mt-1">Información general de todos los balnearios</p>
        </div>
        <div className="flex items-center text-sm text-sage-500">
          <Activity className="h-4 w-4 mr-1" />
          {waterParks.length} balnearios
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
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="table-body-cell">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-navy-500 to-navy-600 flex items-center justify-center text-white font-medium text-sm mr-3">
                        {park.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-navy-900">{park.name}</div>
                        <div className="text-xs text-sage-500">ID: {park.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="table-body-cell">
                    <span className="badge badge-primary">
                      {park.activeTickets.toLocaleString()}
                    </span>
                  </td>
                  <td className="table-body-cell hidden md:table-cell">
                    <span className="badge badge-success">
                      {park.soldTickets.toLocaleString()}
                    </span>
                  </td>
                  <td className="table-body-cell hidden lg:table-cell">
                    <span className="font-semibold text-sage-600">
                      ${park.totalRevenue.toLocaleString()}
                    </span>
                  </td>
                  <td className="table-body-cell">
                    <Link
                      to={`${basePath}/waterpark/${park.id}`}
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-navy-600 hover:text-navy-700 hover:bg-navy-50 rounded-lg transition-colors duration-200"
                    >
                      <span className="mr-1">Ver detalles</span>
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