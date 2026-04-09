"use client"

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts"

// ─── Pie chart — where developer time goes in sandbox mode ───────────────────

const sandboxTimeData = [
  { name: "Unplanned debugging",  value: 30, color: "#b45309" },
  { name: "Manual coding",        value: 28, color: "#1c1917" },
  { name: "Context switching",    value: 22, color: "#78716c" },
  { name: "Documentation",        value: 12, color: "#a8a29e" },
  { name: "Supervision overhead", value: 8,  color: "#d6d3d1" },
]

const RADIAN = Math.PI / 180

function renderCustomLabel({
  cx, cy, midAngle, innerRadius, outerRadius, percent, name,
}: {
  cx: number; cy: number; midAngle: number
  innerRadius: number; outerRadius: number
  percent: number; name: string
}) {
  if (percent < 0.08) return null
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={600}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

// ─── Bar chart — factory mode target uplift ───────────────────────────────────

const upliftData = [
  { metric: "Supervision coverage", sandbox: 18,  factory: 85  },
  { metric: "AI contribution",      sandbox: 12,  factory: 68  },
  { metric: "Delivery speed",       sandbox: 100, factory: 155 },
  { metric: "Quality score",        sandbox: 62,  factory: 88  },
  { metric: "Rework reduction",     sandbox: 100, factory: 152 },
]

const CustomBarTooltip = ({ active, payload, label }: { active?: boolean; payload?: { name: string; value: number; color: string }[]; label?: string }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: "#fff", border: "1px solid #e7e5e4", borderRadius: 6, padding: "8px 12px", fontSize: 12 }}>
      <p style={{ fontWeight: 600, marginBottom: 4, color: "#1c1917" }}>{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color, margin: "2px 0" }}>
          {p.name}: <strong>{p.value}{p.name === "Delivery speed" || p.name === "Rework reduction" ? " (index)" : "%"}</strong>
        </p>
      ))}
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function MetricsCharts() {
  return (
    <div className="metrics-charts-grid">

      {/* Pie chart */}
      <div className="chart-card">
        <div className="chart-card-header">
          <span className="chart-eyebrow">Today — Sandbox mode</span>
          <h3 className="chart-title">Where developer time actually goes</h3>
          <p className="chart-sub">Most time is consumed by unplanned work, not delivery.</p>
        </div>
        <div className="chart-body">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={sandboxTimeData}
                cx="50%"
                cy="50%"
                outerRadius={105}
                dataKey="value"
                labelLine={false}
                label={renderCustomLabel}
                strokeWidth={2}
                stroke="#fff"
              >
                {sandboxTimeData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`${value}%`, ""]}
                contentStyle={{ fontSize: 12, borderRadius: 6 }}
              />
            </PieChart>
          </ResponsiveContainer>
          <ul className="chart-legend">
            {sandboxTimeData.map((d) => (
              <li key={d.name}>
                <span className="legend-dot" style={{ background: d.color }} />
                {d.name}
                <span className="legend-pct">{d.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Horizontal bar chart */}
      <div className="chart-card">
        <div className="chart-card-header">
          <span className="chart-eyebrow">Target — Factory mode</span>
          <h3 className="chart-title">Metric uplift: sandbox vs factory</h3>
          <p className="chart-sub">What structured supervision and measurement actually moves.</p>
        </div>
        <div className="chart-body">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={upliftData}
              layout="vertical"
              margin={{ top: 4, right: 24, left: 0, bottom: 4 }}
              barCategoryGap="28%"
            >
              <CartesianGrid horizontal={false} strokeDasharray="3 3" stroke="#e7e5e4" />
              <XAxis type="number" domain={[0, 180]} tick={{ fontSize: 11, fill: "#78716c" }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}`} />
              <YAxis type="category" dataKey="metric" width={140} tick={{ fontSize: 11, fill: "#44403c" }} tickLine={false} axisLine={false} />
              <Tooltip content={<CustomBarTooltip />} cursor={{ fill: "#f5f5f4" }} />
              <Legend
                iconType="square"
                iconSize={8}
                wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
                formatter={(value) => <span style={{ color: "#44403c" }}>{value}</span>}
              />
              <Bar dataKey="sandbox" name="Sandbox" fill="#d6d3d1" radius={[0, 3, 3, 0]} />
              <Bar dataKey="factory" name="Factory" fill="#1c1917" radius={[0, 3, 3, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  )
}
