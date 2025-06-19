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
    <div className="card h-96 floating-card">
      <h3 className="text-2xl font-bold gradient-text mb-8">Ventas Semanales</h3>
      
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={formattedData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1B3B6F" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1B3B6F" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5483B3" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#5483B3" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="formattedDate" 
            tick={{ fontSize: 12, fill: '#1B3B6F', fontWeight: 600 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            yAxisId="left"
            orientation="left"
            tick={{ fontSize: 12, fill: '#1B3B6F', fontWeight: 600 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            tick={{ fontSize: 12, fill: '#1B3B6F', fontWeight: 600 }}
            domain={[0, 'dataMax + 5000']}
            axisLine={false}
            tickLine={false}
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#7DA0CA" opacity={0.4} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)', 
              border: '2px solid #C1E8FF',
              borderRadius: '16px',
              color: '#021024',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 10px 40px rgba(2, 16, 36, 0.15)',
              fontWeight: 600
            }}
          />
          <Area 
            yAxisId="left"
            type="monotone" 
            dataKey="tickets" 
            name="Tickets"
            stroke="#1B3B6F" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorTickets)" 
          />
          <Area 
            yAxisId="right"
            type="monotone" 
            dataKey="revenue" 
            name="Ingresos ($)"
            stroke="#5483B3" 
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