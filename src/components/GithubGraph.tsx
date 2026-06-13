"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

interface DayData {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function GithubGraph() {
  const [hoveredDay, setHoveredDay] = useState<DayData | null>(null);

  // Generate a mock year of contributions
  const { days, months, totalContributions } = useMemo(() => {
    const list: DayData[] = [];
    const monthsInfo: { name: string; index: number }[] = [];
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const today = new Date();
    // 365 days ago
    const startDate = new Date();
    startDate.setDate(today.getDate() - 364);

    let total = 0;
    let currentMonth = -1;

    for (let i = 0; i <= 364; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      // Save month positions
      const m = date.getMonth();
      if (m !== currentMonth) {
        currentMonth = m;
        // Only show month name if there's enough space (e.g., skip some or just add index)
        if (i % 30 < 10) {
          monthsInfo.push({ name: monthNames[m], index: Math.floor(i / 7) });
        }
      }

      // Generate realistic-looking developer contributions
      // Weekends have fewer commits, middle of week has more.
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      let count = 0;
      
      const rand = Math.random();
      if (isWeekend) {
        if (rand > 0.8) count = Math.floor(Math.random() * 3);
      } else {
        if (rand > 0.15) count = Math.floor(Math.random() * 8) + 1;
      }

      // Add a couple of high-intensity periods (e.g. hackathons/releases)
      const dateString = date.toISOString().split("T")[0];
      const isHackathonPeriod = i > 120 && i < 140 || i > 280 && i < 300;
      if (isHackathonPeriod) {
        count += Math.floor(Math.random() * 6);
      }

      let level: 0 | 1 | 2 | 3 | 4 = 0;
      if (count > 0 && count <= 2) level = 1;
      else if (count > 2 && count <= 4) level = 2;
      else if (count > 4 && count <= 7) level = 3;
      else if (count > 7) level = 4;

      total += count;

      list.push({
        date: date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        count,
        level,
      });
    }

    return { days: list, months: monthsInfo, totalContributions: total };
  }, []);

  // Group days into weeks for column-based rendering (GitHub style)
  const weeks = useMemo(() => {
    const cols: DayData[][] = [];
    let currentWeek: DayData[] = [];

    days.forEach((day, index) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || index === days.length - 1) {
        cols.push(currentWeek);
        currentWeek = [];
      }
    });

    return cols;
  }, [days]);

  // Color mapping matching GitHub's dark/light modes with Tailwind classes
  const getCellColorClass = (level: number) => {
    switch (level) {
      case 0:
        return "bg-zinc-200 dark:bg-zinc-900 hover:bg-zinc-300 dark:hover:bg-zinc-800";
      case 1:
        return "bg-emerald-200 dark:bg-emerald-900/50 hover:bg-emerald-300 dark:hover:bg-emerald-800/50";
      case 2:
        return "bg-emerald-300 dark:bg-emerald-700/60 hover:bg-emerald-400 dark:hover:bg-emerald-600/60";
      case 3:
        return "bg-emerald-400 dark:bg-emerald-500 hover:bg-emerald-500 dark:hover:bg-emerald-400";
      case 4:
        return "bg-emerald-600 dark:bg-emerald-300 hover:bg-emerald-700 dark:hover:bg-emerald-200";
      default:
        return "bg-zinc-200 dark:bg-zinc-900";
    }
  };

  return (
    <div className="w-full glass-panel border border-border p-6 rounded-2xl shadow-lg relative overflow-hidden bg-card/40">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
            <span>Contribution Graph</span>
            <span className="text-xs font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
              Mock Activity
            </span>
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            Visualizing open-source Kotlin & Android contributions over the past year.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div>
            <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
              Yearly Commits
            </div>
            <div className="text-lg font-bold text-primary">{totalContributions}</div>
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
              Streak
            </div>
            <div className="text-lg font-bold text-emerald-500">42 Days</div>
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
              Productivity
            </div>
            <div className="text-lg font-bold text-cyan-500">98.4%</div>
          </div>
        </div>
      </div>

      {/* Grid Container */}
      <div className="relative overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
        <div className="min-w-[680px]">
          {/* Months list */}
          <div className="flex pl-8 h-5 text-[10px] font-medium text-muted-foreground select-none">
            {months.map((m, idx) => (
              <div
                key={idx}
                className="absolute"
                style={{ left: `${m.index * 13 + 32}px` }}
              >
                {m.name}
              </div>
            ))}
          </div>

          <div className="flex gap-[3px]">
            {/* Weekdays indicator labels */}
            <div className="grid grid-rows-7 h-[98px] pr-2 text-[9px] font-medium text-muted-foreground select-none text-right justify-end w-6">
              <span>Mon</span>
              <span className="invisible">Tue</span>
              <span>Wed</span>
              <span className="invisible">Thu</span>
              <span>Fri</span>
              <span className="invisible">Sat</span>
              <span className="invisible">Sun</span>
            </div>

            {/* Matrix column layout */}
            <div className="flex gap-[3px]">
              {weeks.map((week, weekIdx) => (
                <div key={weekIdx} className="grid grid-rows-7 gap-[3px]">
                  {week.map((day, dayIdx) => (
                    <motion.div
                      key={day.date}
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                      whileHover={{ scale: 1.25, zIndex: 20 }}
                      className={`w-[11px] h-[11px] rounded-[2px] transition-colors cursor-crosshair ${getCellColorClass(
                        day.level
                      )}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Grid */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-border/40">
        {/* Hover status display */}
        <div className="min-h-5 text-xs text-muted-foreground select-none">
          {hoveredDay ? (
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="text-foreground/90 font-medium"
            >
              <strong className="text-primary">{hoveredDay.count}</strong> contributions on {hoveredDay.date}
            </motion.span>
          ) : (
            <span>Hover over the boxes to see activity details.</span>
          )}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground select-none">
          <span>Less</span>
          <div className="w-[10px] h-[10px] rounded-[1px] bg-zinc-200 dark:bg-zinc-900" />
          <div className="w-[10px] h-[10px] rounded-[1px] bg-emerald-200 dark:bg-emerald-900/50" />
          <div className="w-[10px] h-[10px] rounded-[1px] bg-emerald-300 dark:bg-emerald-700/60" />
          <div className="w-[10px] h-[10px] rounded-[1px] bg-emerald-400 dark:bg-emerald-500" />
          <div className="w-[10px] h-[10px] rounded-[1px] bg-emerald-600 dark:bg-emerald-300" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
