import React from 'react';
import { Ticket, DollarSign, Store, TrendingUp } from 'lucide-react';
import { useWaterParksStore } from '../../stores/waterParksStore';

const SummaryCards: React.FC = () => {
  const { waterParks } = useWaterParksStore();
  
  // Calculate totals
  const totalActiveTickets = waterParks.reduce((sum, park) => sum + park.activeTickets, 0);
  const totalRevenue = waterParks.reduce((sum, park) => sum + park.totalRevenue, 0);
  const totalWaterParks = waterParks.length;
  const totalSoldTickets = waterParks.reduce((sum, park) => sum + park.soldTickets, 0);
  
  const cards = [
    {
      title: 'Tickets Activos',
      value: totalActiveTickets.toLocaleString(),
      icon: Ticket,
      gradient: 'from-midnight-blue to-navy-blue',
      bgGradient: 'from-sky-light/30 to-blue-soft/20',
      borderColor: 'border-sky-light/40',
      textColor: 'text-deep-navy',
      subTextColor: 'text-midnight-blue',
      iconBg: 'bg-gradient-to-br from-midnight-blue/10 to-navy-blue/10'
    },
    {
      title: 'Ingresos Totales',
      value: `$${totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      gradient: 'from-sky-muted to-blue-soft',
      bgGradient: 'from-sky-muted/20 to-blue-soft/30',
      borderColor: 'border-sky-muted/30',
      textColor: 'text-deep-navy',
      subTextColor: 'text-sky-muted',
      iconBg: 'bg-gradient-to-br from-sky-muted/10 to-blue-soft/10'
    },
    {
      title: 'Total Balnearios',
      value: totalWaterParks.toString(),
      icon: Store,
      gradient: 'from-blue-soft to-sky-light',
      bgGradient: 'from-blue-soft/20 to-sky-light/40',
      borderColor: 'border-blue-soft/30',
      textColor: 'text-deep-navy',
      subTextColor: 'text-blue-soft',
      iconBg: 'bg-gradient-to-br from-blue-soft/10 to-sky-light/20'
    },
    {
      title: 'Tickets Vendidos',
      value: totalSoldTickets.toLocaleString(),
      icon: TrendingUp,
      gradient: 'from-navy-blue to-sky-muted',
      bgGradient: 'from-navy-blue/10 to-sky-muted/20',
      borderColor: 'border-navy-blue/20',
      textColor: 'text-deep-navy',
      subTextColor: 'text-navy-blue',
      iconBg: 'bg-gradient-to-br from-navy-blue/10 to-sky-muted/10'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 mb-10 lg:mb-12">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div 
            key={card.title}
            className={`card-compact bg-gradient-to-br ${card.bgGradient} border-2 ${card.borderColor} hover:shadow-large transition-all duration-300 animate-slide-up floating-card hover:scale-105`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center">
              <div className={`rounded-3xl ${card.iconBg} p-5 shadow-soft border border-white/20 backdrop-blur-sm`}>
                <Icon className="h-7 w-7 text-midnight-blue" />
              </div>
              <div className="ml-6 flex-1 min-w-0">
                <p className={`text-sm font-semibold ${card.subTextColor} truncate mb-2`}>
                  {card.title}
                </p>
                <h3 className={`text-2xl font-bold ${card.textColor} truncate`}>
                  {card.value}
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SummaryCards;