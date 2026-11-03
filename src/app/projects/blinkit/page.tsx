"use client";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, RotateCcw } from "lucide-react";

type Dataset = {
  dims: {
    fat: string[];
    type: string[];
    loc: string[];
    size: string[];
    otype: string[];
    year: number[];
  };
  rows: number[][];
};

// Column positions in each row of /blinkit-data.json
const FAT = 0,
  TYPE = 1,
  LOC = 2,
  SIZE = 3,
  OTYPE = 4,
  YEAR = 5,
  SALES = 6,
  RATING = 7,
  VIS = 8;

const ACCENT = "#facc15";
const ACCENT_2 = "#22c55e";

// Paste the Power BI "Publish to web" embed URL here (app.powerbi.com/view?r=...)
// to show the original report above the web version.
const POWERBI_EMBED_URL = "";

const money = (n: number) =>
  n >= 1e6
    ? `₹${(n / 1e6).toFixed(2)}M`
    : n >= 1e3
    ? `₹${(n / 1e3).toFixed(1)}K`
    : `₹${n.toFixed(0)}`;

function groupSum(rows: number[][], col: number, n: number) {
  const out = new Array(n).fill(0);
  for (const r of rows) out[r[col]] += r[SALES];
  return out as number[];
}

function Card({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur p-5 ${className}`}
    >
      <h3 className="text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4 font-sans">
        {title}
      </h3>
      {children}
    </div>
  );
}

function HBars({
  labels,
  values,
  color = ACCENT,
}: {
  labels: string[];
  values: number[];
  color?: string;
}) {
  const order = values
    .map((v, i) => [v, i] as const)
    .sort((a, b) => b[0] - a[0]);
  const max = Math.max(...values, 1);
  return (
    <div className="flex flex-col gap-2 font-sans">
      {order.map(([v, i]) => (
        <div key={labels[i]} className="flex items-center gap-3 text-xs">
          <div className="w-32 shrink-0 truncate text-neutral-600 dark:text-neutral-300">
            {labels[i]}
          </div>
          <div className="flex-1 h-4 rounded bg-black/5 dark:bg-white/5 overflow-hidden">
            <div
              className="h-full rounded transition-all duration-500"
              style={{ width: `${(v / max) * 100}%`, background: color }}
            />
          </div>
          <div className="w-16 text-right tabular-nums">{money(v)}</div>
        </div>
      ))}
    </div>
  );
}

function Donut({ labels, values }: { labels: string[]; values: number[] }) {
  const total = values.reduce((a, b) => a + b, 0) || 1;
  const colors = [ACCENT, ACCENT_2, "#38bdf8"];
  let acc = 0;
  const R = 60,
    C = 2 * Math.PI * R;
  return (
    <div className="flex items-center gap-6 font-sans">
      <svg viewBox="0 0 160 160" className="w-36 h-36 -rotate-90">
        <circle cx="80" cy="80" r={R} fill="none" strokeWidth="22" className="stroke-black/5 dark:stroke-white/5" />
        {values.map((v, i) => {
          const len = (v / total) * C;
          const el = (
            <circle
              key={labels[i]}
              cx="80"
              cy="80"
              r={R}
              fill="none"
              stroke={colors[i % colors.length]}
              strokeWidth="22"
              strokeDasharray={`${len} ${C - len}`}
              strokeDashoffset={-acc}
              className="transition-all duration-500"
            />
          );
          acc += len;
          return el;
        })}
      </svg>
      <div className="flex flex-col gap-2 text-sm">
        {labels.map((l, i) => (
          <div key={l} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: colors[i % colors.length] }} />
            <span className="text-neutral-600 dark:text-neutral-300">{l}</span>
            <span className="tabular-nums font-semibold">{((values[i] / total) * 100).toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function YearLine({ years, values }: { years: number[]; values: number[] }) {
  const W = 520,
    H = 180,
    P = 28;
  const max = Math.max(...values, 1);
  const pts = values.map((v, i) => [
    P + (i * (W - 2 * P)) / Math.max(values.length - 1, 1),
    H - P - (v / max) * (H - 2 * P),
  ]);
  const d = pts.map((p, i) => `${i ? "L" : "M"}${p[0]},${p[1]}`).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto font-sans">
      <path d={d} fill="none" stroke={ACCENT} strokeWidth="3" className="transition-all duration-500" />
      {pts.map((p, i) => (
        <g key={years[i]}>
          <circle cx={p[0]} cy={p[1]} r="4" fill={ACCENT} />
          <text x={p[0]} y={H - 6} textAnchor="middle" className="fill-neutral-500" fontSize="11">
            {years[i]}
          </text>
          <text x={p[0]} y={p[1] - 10} textAnchor="middle" className="fill-neutral-700 dark:fill-neutral-300" fontSize="10">
            {values[i] ? money(values[i]) : ""}
          </text>
        </g>
      ))}
    </svg>
  );
}

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: number;
  options: string[];
  onChange: (v: number) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-xs text-neutral-500 font-sans">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="rounded-lg border border-black/10 dark:border-white/15 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100"
      >
        <option value={-1}>All</option>
        {options.map((o, i) => (
          <option key={o} value={i}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function BlinkitDashboard() {
  const [data, setData] = useState<Dataset | null>(null);
  const [error, setError] = useState(false);
  const [loc, setLoc] = useState(-1);
  const [size, setSize] = useState(-1);
  const [type, setType] = useState(-1);
  const [fat, setFat] = useState(-1);

  useEffect(() => {
    fetch("/blinkit-data.json")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setError(true));
  }, []);

  const view = useMemo(() => {
    if (!data) return null;
    const rows = data.rows.filter(
      (r) =>
        (loc < 0 || r[LOC] === loc) &&
        (size < 0 || r[SIZE] === size) &&
        (type < 0 || r[TYPE] === type) &&
        (fat < 0 || r[FAT] === fat)
    );
    const total = rows.reduce((a, r) => a + r[SALES], 0);
    const rating = rows.length ? rows.reduce((a, r) => a + r[RATING], 0) / rows.length : 0;
    const years = data.dims.year;
    const byYear = new Array(years.length).fill(0);
    for (const r of rows) byYear[years.indexOf(r[YEAR])] += r[SALES];
    const outlet = data.dims.otype.map((name, i) => {
      const sub = rows.filter((r) => r[OTYPE] === i);
      const s = sub.reduce((a, r) => a + r[SALES], 0);
      return {
        name,
        sales: s,
        items: sub.length,
        avg: sub.length ? s / sub.length : 0,
        rating: sub.length ? sub.reduce((a, r) => a + r[RATING], 0) / sub.length : 0,
        vis: sub.length ? sub.reduce((a, r) => a + r[VIS], 0) / sub.length : 0,
      };
    });
    const byLoc = groupSum(rows, LOC, data.dims.loc.length);
    const bySize = groupSum(rows, SIZE, data.dims.size.length);
    const byType = groupSum(rows, TYPE, data.dims.type.length);
    const topType = byType.indexOf(Math.max(...byType));
    const topLoc = byLoc.indexOf(Math.max(...byLoc));
    const topSize = bySize.indexOf(Math.max(...bySize));
    return {
      n: rows.length,
      total,
      avg: rows.length ? total / rows.length : 0,
      rating,
      byFat: groupSum(rows, FAT, data.dims.fat.length),
      byType,
      byLoc,
      bySize,
      byYear,
      outlet,
      topType,
      topLoc,
      topSize,
    };
  }, [data, loc, size, type, fat]);

  const reset = () => {
    setLoc(-1);
    setSize(-1);
    setType(-1);
    setFat(-1);
  };

  return (
    <main className="min-h-screen pt-28 pb-24 px-4 md:px-10 max-w-7xl mx-auto font-sans">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to projects
      </Link>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <p className="text-sm font-semibold" style={{ color: ACCENT }}>
            Live dashboard · rebuilt from my Power BI report
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">Blinkit Sales Analytics</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-3 max-w-2xl">
            8,523 grocery items across Blinkit outlets. Change any filter and every
            number and chart recalculates in your browser, the same way slicers work in
            the Power BI version.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="https://github.com/iostream4YOU/Blinkit-Data-Analysis-By-Using-Power-BI"
            target="_blank"
            className="inline-flex items-center gap-1 rounded-lg border border-black/10 dark:border-white/15 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5"
          >
            GitHub <ArrowUpRight className="w-4 h-4" />
          </Link>
          <a
            href="/Blinkit-Data-Analysis.pbix"
            download
            className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-black"
            style={{ background: ACCENT }}
          >
            Download .pbix <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold mb-1">The original Power BI report</h2>
        <p className="text-sm text-neutral-500 mb-4">
          {POWERBI_EMBED_URL
            ? "Live from Power BI. Click any bar or slicer to cross-filter the whole report."
            : "Recorded in Power BI: clicking a bar or table row cross-filters every visual. Download the .pbix to open it in Power BI Desktop."}
        </p>
        <div
          className="relative w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-neutral-900"
          style={{ aspectRatio: POWERBI_EMBED_URL ? "16/9.5" : "1280/770" }}
        >
          {POWERBI_EMBED_URL ? (
            <iframe
              title="Blinkit Sales Analytics - Power BI"
              src={POWERBI_EMBED_URL}
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          ) : (
            <video
              className="absolute inset-0 w-full h-full"
              src="/assets/projects-screenshots/blinkit/powerbi-demo.mp4"
              poster="/assets/projects-screenshots/blinkit/poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              controls
              aria-label="Power BI report being cross-filtered by outlet tier and outlet type"
            />
          )}
        </div>
      </section>

      <h2 className="text-xl md:text-2xl font-bold mb-1">Now try it yourself</h2>
      <p className="text-sm text-neutral-500 mb-4">
        The same analysis rebuilt for the web. Pick a filter and every number below recalculates.
      </p>

      {error && <p className="text-red-500">Couldn&apos;t load the dataset. Please refresh the page.</p>}
      {!view && !error && <p className="text-neutral-500">Loading 8,523 rows…</p>}

      {data && view && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
            <Select label="Outlet location" value={loc} options={data.dims.loc} onChange={setLoc} />
            <Select label="Outlet size" value={size} options={data.dims.size} onChange={setSize} />
            <Select label="Item type" value={type} options={data.dims.type} onChange={setType} />
            <Select label="Fat content" value={fat} options={data.dims.fat} onChange={setFat} />
            <button
              onClick={reset}
              className="self-end inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 dark:border-white/15 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5"
            >
              <RotateCcw className="w-4 h-4" /> Reset filters
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              ["Total sales", money(view.total)],
              ["Average sale", `₹${view.avg.toFixed(0)}`],
              ["Items", view.n.toLocaleString("en-IN")],
              ["Average rating", view.rating.toFixed(2)],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] p-5"
              >
                <div className="text-xs uppercase tracking-wider text-neutral-500">{k}</div>
                <div className="text-2xl md:text-4xl font-bold mt-2 tabular-nums" style={{ color: ACCENT }}>
                  {v}
                </div>
              </div>
            ))}
          </div>

          {view.n > 0 && (
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 mb-6 text-sm">
              <span className="font-semibold">What this slice says: </span>
              {data.dims.type[view.topType]} is the top-selling category,{" "}
              {data.dims.loc[view.topLoc]} outlets bring in the most revenue, and{" "}
              {data.dims.size[view.topSize]}-size outlets lead on sales.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Card title="Sales by fat content">
              <Donut labels={data.dims.fat} values={view.byFat} />
            </Card>
            <Card title="Sales by outlet location">
              <HBars labels={data.dims.loc} values={view.byLoc} color={ACCENT_2} />
            </Card>
            <Card title="Sales by outlet size">
              <HBars labels={data.dims.size} values={view.bySize} color="#38bdf8" />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Card title="Sales by item type">
              <HBars labels={data.dims.type} values={view.byType} />
            </Card>
            <Card title="Sales by outlet establishment year">
              <YearLine years={data.dims.year} values={view.byYear} />
            </Card>
          </div>

          <Card title="Outlet type comparison">
            <div className="overflow-x-auto">
              <table className="w-full text-sm tabular-nums">
                <thead>
                  <tr className="text-left text-neutral-500">
                    <th className="py-2 pr-4 font-medium">Outlet type</th>
                    <th className="py-2 pr-4 font-medium text-right">Total sales</th>
                    <th className="py-2 pr-4 font-medium text-right">Items</th>
                    <th className="py-2 pr-4 font-medium text-right">Avg sale</th>
                    <th className="py-2 pr-4 font-medium text-right">Avg rating</th>
                    <th className="py-2 font-medium text-right">Avg visibility</th>
                  </tr>
                </thead>
                <tbody>
                  {view.outlet.map((o) => (
                    <tr key={o.name} className="border-t border-black/5 dark:border-white/5">
                      <td className="py-2 pr-4">{o.name}</td>
                      <td className="py-2 pr-4 text-right">{money(o.sales)}</td>
                      <td className="py-2 pr-4 text-right">{o.items.toLocaleString("en-IN")}</td>
                      <td className="py-2 pr-4 text-right">₹{o.avg.toFixed(0)}</td>
                      <td className="py-2 pr-4 text-right">{o.rating.toFixed(2)}</td>
                      <td className="py-2 text-right">{o.vis.toFixed(3)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <p className="text-xs text-neutral-500 mt-6">
            Data: the BlinkIT grocery dataset used in my Power BI project (8,523 rows). Fat-content
            labels are normalised (LF, low fat → Low Fat; reg → Regular).
          </p>
        </>
      )}
    </main>
  );
}
