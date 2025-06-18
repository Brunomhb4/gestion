import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer
} from 'recharts';
import { MonthlyStats } from '../../stores/waterParksStore';

interface MonthlyChartProps {
  data: MonthlyStats[];
}

const MonthlyChart: React.FC<MonthlyChartProps> = ({ data }) => {
  return (
    <div className="card h-80">
      <h3 className="text-lg font-medium text-navy-900 mb-4">Ventas Mensuales</h3>
      
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#7DA0CA" />
          <XAxis 
            dataKey="month" 
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
            domain={[0, 'dataMax + 50000']}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #7DA0CA',
              borderRadius: '8px',
              color: '#291024'
            }}
          />
          <Legend />
          <Bar 
            yAxisId="left"
            dataKey="tickets" 
            name="Tickets" 
            fill="#291024" 
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            yAxisId="right"
            dataKey="revenue" 
            name="Ingresos ($)" 
            fill="#638363" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;