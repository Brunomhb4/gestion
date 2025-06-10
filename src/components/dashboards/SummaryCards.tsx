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
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900',
      subTextColor: 'text-blue-700'
    },
    {
      title: 'Ingresos Totales',
      value: `$${totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
      borderColor: 'border-green-200',
      textColor: 'text-green-900',
      subTextColor: 'text-green-700'
    },
    {
      title: 'Total Balnearios',
      value: totalWaterParks.toString(),
      icon: Store,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-900',
      subTextColor: 'text-purple-700'
    },
    {
      title: 'Tickets Vendidos',
      value: totalSoldTickets.toLocaleString(),
      icon: TrendingUp,
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-900',
      subTextColor: 'text-orange-700'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div 
            key={card.title}
            className={`card-compact bg-gradient-to-br ${card.bgGradient} border ${card.borderColor} hover:shadow-lg transition-all duration-300 animate-slide-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center">
              <div className={`rounded-xl bg-gradient-to-br ${card.gradient} p-3 shadow-sm`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4 flex-1 min-w-0">
                <p className={`text-sm font-medium ${card.subTextColor} truncate`}>
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