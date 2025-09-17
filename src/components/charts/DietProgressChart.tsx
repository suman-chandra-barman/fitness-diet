"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
  TooltipProps,
} from "recharts";

interface DayProgress {
  day: string;
  progress: number;
}

// Custom tooltip component
const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg">
        {value === 0 ? "No data" : `${value}%`}
      </div>
    );
  }
  return null;
};

const DietProgressChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("weekly");

  const weeklyData: DayProgress[] = [
    { day: "Sun", progress: 0 },
    { day: "Mon", progress: 45 },
    { day: "Tue", progress: 30 },
    { day: "Wed", progress: 75 },
    { day: "Thu", progress: 0 },
    { day: "Fri", progress: 85 },
    { day: "Sat", progress: 55 },
  ];

  const monthlyData: DayProgress[] = [
    { day: "Week 1", progress: 65 },
    { day: "Week 2", progress: 40 },
    { day: "Week 3", progress: 80 },
    { day: "Week 4", progress: 0 },
  ];

  const yearlyData: DayProgress[] = [
    { day: "Jan", progress: 70 },
    { day: "Feb", progress: 45 },
    { day: "Mar", progress: 0 },
    { day: "Apr", progress: 85 },
    { day: "May", progress: 55 },
    { day: "Jun", progress: 90 },
    { day: "Jul", progress: 35 },
    { day: "Aug", progress: 0 },
    { day: "Sep", progress: 75 },
    { day: "Oct", progress: 60 },
    { day: "Nov", progress: 40 },
    { day: "Dec", progress: 80 },
  ];

  const getCurrentData = () => {
    switch (selectedPeriod) {
      case "monthly":
        return monthlyData;
      case "yearly":
        return yearlyData;
      default:
        return weeklyData;
    }
  };

  const getBarColor = (progress: number) => {
    if (progress === 0) return "#d1d5db"; // gray-300 - No data
    if (progress < 60) return "#F2ECFF"; // Light purple - Under 60%
    return "#7738F8"; // Purple - 60% and above
  };

  const currentData = getCurrentData();

  return (
    <Card className="w-full bg-white shadow-sm border border-gray-100">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Diet Progress</h3>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-24 h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <div style={{ width: "100%", height: "200px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={currentData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
              barCategoryGap="20%"
            >
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6b7280", fontWeight: 500 }}
                dy={10}
              />
              <YAxis
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9ca3af", fontWeight: 500 }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="progress"
                radius={[9999, 9999, 9999, 9999]}
                minPointSize={8}
                maxBarSize={50}
                className="rounded-full"
              >
                {currentData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={getBarColor(entry.progress)}
                    className="hover:brightness-no transition-all duration-300 cursor-pointer"
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DietProgressChart;
