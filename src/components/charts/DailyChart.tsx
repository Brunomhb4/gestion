import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { DailyStats } from '../../stores/waterParksStore';

interface DailyChartProps {
  data: DailyStats[];
}

const DailyChart: React.FC<DailyChartProps> = ({ data }) => {
  // Format the data for display
  const formattedData = data.map(item => ({
    ...item,
    formattedDate: new Date(item.date).toLocaleDateString('es-MX', {
      weekday: 'short',
      day: 'numeric'
    })
  }));

  return (
    <div className="card h-80 floating-card">
      <h3 className="text-xl font-semibold text-navy-900 mb-6">Ventas Semanales</h3>
      
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={formattedData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#291024" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#291024" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#638363" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#638363" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="formattedDate" 
            tick={{ fontSize: 12, fill: '#352859' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            yAxisId="left"
            orientation="left"
            tick={{ fontSize: 12, fill: '#352859' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            tick={{ fontSize: 12, fill: '#352859' }}
            domain={[0, 'dataMax + 5000']}
            axisLine={false}
            tickLine={false}
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#7DA0CA" opacity={0.3} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)', 
              border: '1px solid #7DA0CA',
              borderRadius: '12px',
              color: '#291024',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Area 
            yAxisId="left"
            type="monotone" 
            dataKey="tickets" 
            name="Tickets"
            stroke="#291024" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorTickets)" 
          />
          <Area 
            yAxisId="right"
            type="monotone" 
            dataKey="revenue" 
            name="Ingresos ($)"
            stroke="#638363" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorRevenue)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyChart;