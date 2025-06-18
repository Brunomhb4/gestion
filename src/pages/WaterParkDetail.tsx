import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import { useWaterParksStore, WaterPark } from '../stores/waterParksStore';
import { useAuthStore } from '../stores/authStore';
import DailyChart from '../components/charts/DailyChart';
import MonthlyChart from '../components/charts/MonthlyChart';
import CheckersTable from '../components/tables/CheckersTable';
import { Ticket, TicketX, Printer, DollarSign } from 'lucide-react';

const WaterParkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuthStore();
  const { 
    fetchWaterParkDetails, 
    fetchCheckers, 
    fetchDailyStats,
    fetchMonthlyStats
  } = useWaterParksStore();
  
  const [waterPark, setWaterPark] = useState<WaterPark | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    // Use either the route param id or the admin user's waterParkId
    const parkId = id || user?.waterParkId;
    if (parkId) {
      const parkDetails = fetchWaterParkDetails(parkId);
      setWaterPark(parkDetails);
    }
    setLoading(false);
  }, [id, user?.waterParkId, fetchWaterParkDetails]);
  
  if (loading || !waterPark) {
    return (
      <DashboardLayout title="Detalles del Balneario">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-500"></div>
        </div>
      </DashboardLayout>
    );
  }
  
  const checkers = fetchCheckers(waterPark.id);
  const dailyStats = fetchDailyStats(waterPark.id);
  const monthlyStats = fetchMonthlyStats(waterPark.id);
  
  return (
    <DashboardLayout title={waterPark.name}>
      <div className="fade-in">
        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="card">
            <div className="flex items-center">
              <div className="rounded-full bg-navy-100 p-3 mr-4">
                <Ticket className="h-6 w-6 text-navy-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-sage-500">Tickets Activos</p>
                <h3 className="text-lg font-semibold text-navy-900">{waterPark.activeTickets}</h3>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center">
              <div className="rounded-full bg-sage-100 p-3 mr-4">
                <DollarSign className="h-6 w-6 text-sage-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-sage-500">Tickets Vendidos</p>
                <h3 className="text-lg font-semibold text-navy-900">{waterPark.soldTickets}</h3>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <Printer className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-sage-500">Tickets Impresos</p>
                <h3 className="text-lg font-semibold text-navy-900">{waterPark.printedTickets}</h3>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center">
              <div className="rounded-full bg-red-100 p-3 mr-4">
                <TicketX className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-sage-500">Tickets Inactivos</p>
                <h3 className="text-lg font-semibold text-navy-900">{waterPark.inactiveTickets}</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <DailyChart data={dailyStats} />
          <MonthlyChart data={monthlyStats} />
        </div>
        
        {/* Checkers Table */}
        <CheckersTable checkers={checkers} />
      </div>
    </DashboardLayout>
  );
};

export default WaterParkDetail;