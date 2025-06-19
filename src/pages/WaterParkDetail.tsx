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
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-midnight-blue"></div>
        </div>
      </DashboardLayout>
    );
  }
  
  const checkers = fetchCheckers(waterPark.id);
  const dailyStats = fetchDailyStats(waterPark.id);
  const monthlyStats = fetchMonthlyStats(waterPark.id);
  
  const statsCards = [
    {
      title: 'Tickets Activos',
      value: waterPark.activeTickets,
      icon: Ticket,
      bgColor: 'bg-gradient-to-br from-midnight-blue/10 to-navy-blue/20',
      iconColor: 'text-midnight-blue',
      textColor: 'text-deep-navy',
      borderColor: 'border-midnight-blue/20'
    },
    {
      title: 'Tickets Vendidos',
      value: waterPark.soldTickets,
      icon: DollarSign,
      bgColor: 'bg-gradient-to-br from-sky-muted/10 to-blue-soft/20',
      iconColor: 'text-sky-muted',
      textColor: 'text-deep-navy',
      borderColor: 'border-sky-muted/20'
    },
    {
      title: 'Tickets Impresos',
      value: waterPark.printedTickets,
      icon: Printer,
      bgColor: 'bg-gradient-to-br from-blue-soft/10 to-sky-light/30',
      iconColor: 'text-blue-soft',
      textColor: 'text-deep-navy',
      borderColor: 'border-blue-soft/20'
    },
    {
      title: 'Tickets Inactivos',
      value: waterPark.inactiveTickets,
      icon: TicketX,
      bgColor: 'bg-gradient-to-br from-error-100/80 to-error-200/60',
      iconColor: 'text-error-600',
      textColor: 'text-deep-navy',
      borderColor: 'border-error-200/40'
    }
  ];
  
  return (
    <DashboardLayout title={waterPark.name}>
      <div className="animate-fade-in">
        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {statsCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.title}
                className={`card-compact ${stat.bgColor} border-2 ${stat.borderColor} floating-card animate-slide-up hover:scale-105`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center">
                  <div className={`rounded-3xl bg-white/80 backdrop-blur-sm p-5 mr-6 shadow-soft border border-white/40`}>
                    <Icon className={`h-7 w-7 ${stat.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-sky-muted mb-2">{stat.title}</p>
                    <h3 className={`text-2xl font-bold ${stat.textColor}`}>{stat.value.toLocaleString()}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
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