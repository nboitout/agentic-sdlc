'use client';

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';

export interface PieDataPoint {
  name: string;
  value: number;
}

interface Props {
  data: PieDataPoint[];
}

const PALETTE = [
  '#4648d4',
  '#6063ee',
  '#818cf8',
  '#a5abff',
  '#2f2ebe',
  '#c0c1ff',
  '#3730a3',
  '#818cf8',
  '#4338ca',
  '#e0e0ff',
];

export default function AdminPieChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={90}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: '#0f1520',
            border: '1px solid rgba(96,99,238,.35)',
            borderRadius: 4,
            color: '#edf0ff',
            fontSize: 12,
          }}
        />
        <Legend wrapperStyle={{ fontSize: 11, color: 'rgba(15,21,32,.62)' }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
