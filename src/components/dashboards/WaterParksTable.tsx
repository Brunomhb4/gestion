import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { useWaterParksStore, WaterPark } from '../../stores/waterParksStore';
import { ExternalLink } from 'lucide-react';

const WaterParksTable: React.FC = () => {
  const { waterParks } = useWaterParksStore();
  const { userRole } = useAuthStore();
  
  const basePath = userRole === 'admin' ? '/admin' : '/superadmin';
  
  return (
    <div className="card overflow-hidden">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">Resumen de Balnearios</h2>
      </div>
      
      <div className="table-container -mx-6 sm:mx-0">
        <div className="min-w-full overflow-x-auto">
          <table className="table">
            <thead className="table-header">
              <tr>
                <th className="table-header-cell">Nombre del Balneario</th>
                <th className="table-header-cell">Tickets Activos</th>
                <th className="table-header-cell hidden sm:table-cell">Tickets Vendidos</th>
                <th className="table-header-cell">Acciones</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {waterParks.map((park) => (
                <tr key={park.id} className="hover:bg-gray-50 transition-colors">
                  <td className="table-body-cell font-medium text-gray-900">{park.name}</td>
                  <td className="table-body-cell">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {park.activeTickets}
                    </span>
                  </td>
                  <td className="table-body-cell hidden sm:table-cell">
                    {park.soldTickets}
                  </td>
                  <td className="table-body-cell">
                    <Link
                      to={`${basePath}/waterpark/${park.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <span className="mr-1 text-sm">Ver detalles</span>
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