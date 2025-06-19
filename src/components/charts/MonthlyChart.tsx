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
    <div className="card h-96 floating-card">
      <h3 className="text-2xl font-bold gradient-text mb-8">Ventas Mensuales</h3>
      
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#7DA0CA" opacity={0.4} />
          <XAxis 
            dataKey="month" 
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
            domain={[0, 'dataMax + 50000']}
            axisLine={false}
            tickLine={false}
          />
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
          <Legend />
          <Bar 
            yAxisId="left"
            dataKey="tickets" 
            name="Tickets" 
            fill="#1B3B6F" 
            radius={[8, 8, 0, 0]}
          />
          <Bar 
            yAxisId="right"
            dataKey="revenue" 
            name="Ingresos ($)" 
            fill="#5483B3" 
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;