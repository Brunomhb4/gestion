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
    <div className="card h-80">
      <h3 className="text-lg font-medium text-navy-900 mb-4">Ventas Semanales</h3>
      
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={formattedData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#291024" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#291024" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#638363" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#638363" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="formattedDate" 
            tick={{ fontSize: 12, fill: '#352859' }}
          />
          <YAxis 
            yAxisId="left"
            orientation="left"
            tick={{ fontSize: 12, fill: '#352859' }}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            tick={{ fontSize: 12, fill: '#352859' }}
            domain={[0, 'dataMax + 5000']}
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#7DA0CA" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #7DA0CA',
              borderRadius: '8px',
              color: '#291024'
            }}
          />
          <Area 
            yAxisId="left"
            type="monotone" 
            dataKey="tickets" 
            name="Tickets"
            stroke="#291024" 
            fillOpacity={1} 
            fill="url(#colorTickets)" 
          />
          <Area 
            yAxisId="right"
            type="monotone" 
            dataKey="revenue" 
            name="Ingresos ($)"
            stroke="#638363" 
            fillOpacity={1} 
            fill="url(#colorRevenue)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyChart;