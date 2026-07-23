'use client';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export interface StackedTimePoint {
  date: string;
  [country: string]: number | string;
}

interface Props {
  data: StackedTimePoint[];
  countries: string[];
  /** X-axis label mode: 'date' strips the year from YYYY-MM-DD; 'raw' shows the value as-is. */
  labelMode?: 'date' | 'raw';
  /** X-axis tick interval (recharts). Default shows first & last only. */
  interval?: number | 'preserveStartEnd';
  /** Optional fixed colour per country, so the same country keeps one colour across charts. */
  colorMap?: Record<string, string>;
}

const PALETTE = [
  '#4648d4', '#6063ee', '#818cf8', '#2f2ebe', '#a5abff',
  '#3730a3', '#4338ca', '#c0c1ff', '#312e81', '#93000a', '#9a9a9a',
];

export default function AdminStackedCountryChart({
  data,
  countries,
  labelMode = 'date',
  interval = 'preserveStartEnd',
  colorMap,
}: Props) {
  const tickFormatter = labelMode === 'raw' ? (v: string) => v : (v: string) => v.slice(5);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 4, right: 8, left: -10, bottom: 0 }} barCategoryGap="18%">
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(15,21,32,.1)" vertical={false} />
        <XAxis
          dataKey="date"
          tick={{ fill: 'rgba(15,21,32,.58)', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={tickFormatter}
          interval={interval}
        />
        <YAxis
          tick={{ fill: 'rgba(15,21,32,.58)', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          allowDecimals={false}
        />
        <Tooltip
          contentStyle={{
            background: '#0f1520',
            border: '1px solid rgba(96,99,238,.35)',
            borderRadius: 4,
            color: '#edf0ff',
            fontSize: 12,
          }}
          labelStyle={{ color: 'rgba(237,240,255,.55)', marginBottom: 6, fontSize: 11 }}
          cursor={{ fill: 'rgba(15,21,32,.04)' }}
        />
        <Legend wrapperStyle={{ fontSize: 11, color: 'rgba(15,21,32,.62)', paddingTop: 12 }} />
        {countries.map((country, i) => (
          <Bar
            key={country}
            dataKey={country}
            stackId="a"
            fill={colorMap?.[country] ?? PALETTE[i % PALETTE.length]}
            isAnimationActive={false}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
