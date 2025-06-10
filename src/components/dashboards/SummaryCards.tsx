import React from 'react';
import { Ticket, DollarSign, Store } from 'lucide-react';
import { useWaterParksStore, WaterPark } from '../../stores/waterParksStore';

const SummaryCards: React.FC = () => {
  const { waterParks } = useWaterParksStore();
  
  // Calculate totals
  const totalActiveTickets = waterParks.reduce((sum, park) => sum + park.activeTickets, 0);
  const totalRevenue = waterParks.reduce((sum, park) => sum + park.totalRevenue, 0);
  const totalWaterParks = waterParks.length;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
        <div className="flex items-center">
          <div className="rounded-full bg-blue-500 p-3 mr-4">
            <Ticket className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-medium text-blue-800">Total de Tickets Activos</p>
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900">{totalActiveTickets}</h3>
          </div>
        </div>
      </div>
      
      <div className="card bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
        <div className="flex items-center">
          <div className="rounded-full bg-green-500 p-3 mr-4">
            <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-medium text-green-800">Total de $ Activos</p>
            <h3 className="text-xl sm:text-2xl font-bold text-green-900">${totalRevenue.toLocaleString()}</h3>
          </div>
        </div>
      </div>
      
      <div className="card bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200">
        <div className="flex items-center">
          <div className="rounded-full bg-teal-500 p-3 mr-4">
            <Store className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-medium text-teal-800">Total de Balnearios</p>
            <h3 className="text-xl sm:text-2xl font-bold text-teal-900">{totalWaterParks}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;