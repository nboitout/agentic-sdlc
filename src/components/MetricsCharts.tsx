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
} from "recharts"
import type { SiteCopy } from "@/lib/i18n"

const T = {
  ink:        "#0F1319",
  brass:      "#9B7D5C",
  brassLight: "#B49470",
  muted:      "#62697C",
  border:     "#DEDAD1",
  canvas:     "#F2F0EB",
  white:      "#FFFFFF",
  body:       "#1C2130",
}

const pieColors = [T.ink, T.brass, T.muted, T.brassLight, T.border]
const RADIAN = Math.PI / 180

function PieLabel({
  cx = 0, cy = 0, midAngle = 0, innerRadius = 0, outerRadius = 0, percent = 0, index = 0,
}: {
  cx?: number; cy?: number; midAngle?: number
  innerRadius?: number; outerRadius?: number
  percent?: number; index?: number
}) {
  if (percent < 0.09) return null
  const radius = innerRadius + (outerRadius - innerRadius) * 0.58
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  const lightSlice = index >= 3
  return (
    <text
      x={x} y={y}
      fill={lightSlice ? T.body : T.white}
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={11}
      fontWeight={700}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const tipBox: React.CSSProperties = {
  background: T.white,
  border: `1px solid ${T.border}`,
  borderRadius: 8,
  padding: "8px 14px",
  fontSize: 12,
  color: T.ink,
  boxShadow: "0 8px 24px rgba(15,19,25,.09)",
}

function PieTooltip({ active, payload }: { active?: boolean; payload?: { name: string; value: number }[] }) {
  if (!active || !payload?.length) return null
  return (
    <div style={tipBox}>
      <p style={{ color: T.muted, fontWeight: 600, margin: "0 0 2px" }}>{payload[0].name}</p>
      <p style={{ color: T.ink, fontWeight: 700, margin: 0 }}>{payload[0].value}%</p>
    </div>
  )
}

function BarTooltip({ active, payload, label }: { active?: boolean; payload?: { name: string; value: number; color: string }[]; label?: string }) {
  if (!active || !payload?.length) return null
  return (
    <div style={tipBox}>
      <p style={{ color: T.muted, fontWeight: 600, margin: "0 0 4px" }}>{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color, fontWeight: 600, margin: "2px 0" }}>
          {p.name}: <span style={{ color: T.ink }}>{p.value}</span>
        </p>
      ))}
    </div>
  )
}

type MetricsChartsProps = {
  charts: SiteCopy["metrics"]["charts"]
}

export function MetricsCharts({ charts }: MetricsChartsProps) {
  const sandboxTimeData = charts.sandboxData.map((item, index) => ({
    ...item,
    color: pieColors[index] ?? T.ink,
  }))

  return (
    <div className="metrics-charts-grid">
      <div className="chart-card">
        <div className="chart-card-header">
          <span className="chart-eyebrow">{charts.sandboxEyebrow}</span>
          <h3 className="chart-title">{charts.sandboxTitle}</h3>
          <p className="chart-sub">{charts.sandboxBody}</p>
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={sandboxTimeData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              labelLine={false}
              label={PieLabel}
              strokeWidth={2}
              stroke={T.white}
            >
              {sandboxTimeData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<PieTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        <ul className="chart-legend">
          {sandboxTimeData.map((d) => (
            <li key={d.name}>
              <span className="legend-dot" style={{ background: d.color, border: d.color === T.border ? `1px solid ${T.muted}` : "none" }} />
              {d.name}
              <span className="legend-pct">{d.value}%</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="chart-card">
        <div className="chart-card-header">
          <span className="chart-eyebrow">{charts.factoryEyebrow}</span>
          <h3 className="chart-title">{charts.factoryTitle}</h3>
          <p className="chart-sub">{charts.factoryBody}</p>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <BarChart
            data={charts.upliftData}
            layout="vertical"
            margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
            barCategoryGap="30%"
            barGap={3}
          >
            <CartesianGrid horizontal={false} strokeDasharray="3 3" stroke={T.border} />
            <XAxis
              type="number"
              domain={[0, 180]}
              tick={{ fontSize: 10, fill: T.muted }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              type="category"
              dataKey="metric"
              width={138}
              tick={{ fontSize: 11, fill: T.body }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<BarTooltip />} cursor={{ fill: T.canvas }} />
            <Bar dataKey="sandbox" name={charts.sandboxLegend} fill={T.border} radius={[0, 3, 3, 0]} />
            <Bar dataKey="factory" name={charts.factoryLegend} fill={T.ink} radius={[0, 3, 3, 0]} />
          </BarChart>
        </ResponsiveContainer>

        <div style={{ display: "flex", gap: 20, paddingTop: 14, borderTop: `1px solid ${T.border}`, marginTop: 8 }}>
          {[
            { label: charts.sandboxLegend, bg: T.border, outline: true },
            { label: charts.factoryLegend, bg: T.ink, outline: false },
          ].map((l) => (
            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: T.muted, fontWeight: 600 }}>
              <span style={{
                width: 10, height: 10, borderRadius: 2, background: l.bg, flexShrink: 0,
                border: l.outline ? `1px solid ${T.muted}` : "none",
              }} />
              {l.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
