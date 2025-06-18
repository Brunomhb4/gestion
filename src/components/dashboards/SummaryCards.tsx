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
      gradient: 'from-navy-600 to-navy-700',
      bgGradient: 'from-navy-50/50 to-sky-100/50',
      borderColor: 'border-navy-200/50',
      textColor: 'text-navy-900',
      subTextColor: 'text-navy-700',
      iconBg: 'bg-navy-100/80'
    },
    {
      title: 'Ingresos Totales',
      value: `$${totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      gradient: 'from-sage-600 to-sage-700',
      bgGradient: 'from-sage-50/50 to-sage-100/50',
      borderColor: 'border-sage-200/50',
      textColor: 'text-sage-900',
      subTextColor: 'text-sage-700',
      iconBg: 'bg-sage-100/80'
    },
    {
      title: 'Total Balnearios',
      value: totalWaterParks.toString(),
      icon: Store,
      gradient: 'from-sky-500 to-sky-600',
      bgGradient: 'from-sky-50/50 to-sky-100/50',
      borderColor: 'border-sky-200/50',
      textColor: 'text-sky-900',
      subTextColor: 'text-sky-700',
      iconBg: 'bg-sky-100/80'
    },
    {
      title: 'Tickets Vendidos',
      value: totalSoldTickets.toLocaleString(),
      icon: TrendingUp,
      gradient: 'from-navy-600 to-sage-600',
      bgGradient: 'from-navy-50/30 to-sage-50/30',
      borderColor: 'border-sage-200/50',
      textColor: 'text-navy-900',
      subTextColor: 'text-sage-700',
      iconBg: 'bg-gradient-to-r from-navy-100/80 to-sage-100/80'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-10">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div 
            key={card.title}
            className={`card-compact bg-gradient-to-br ${card.bgGradient} border ${card.borderColor} hover:shadow-xl transition-all duration-300 animate-slide-up floating-card`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center">
              <div className={`rounded-2xl ${card.iconBg} p-4 shadow-sm`}>
                <Icon className="h-6 w-6 text-navy-700" />
              </div>
              <div className="ml-5 flex-1 min-w-0">
                <p className={`text-sm font-medium ${card.subTextColor} truncate mb-1`}>
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