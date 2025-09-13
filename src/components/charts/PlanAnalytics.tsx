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
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface AnalyticsData {
  date: string;
  diet: number | null;
  workout: number | null;
}

const PlanAnalytics = ({ hasData = false }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  // Empty data structure for different periods
  const monthlyEmptyData: AnalyticsData[] = [
    { date: "2 Sep", diet: null, workout: null },
    { date: "4 Sep", diet: null, workout: null },
    { date: "6 Sep", diet: null, workout: null },
    { date: "8 Sep", diet: null, workout: null },
    { date: "10 Sep", diet: null, workout: null },
    { date: "12 Sep", diet: null, workout: null },
    { date: "14 Sep", diet: null, workout: null },
    { date: "16 Sep", diet: null, workout: null },
    { date: "18 Sep", diet: null, workout: null },
    { date: "20 Sep", diet: null, workout: null },
    { date: "22 Sep", diet: null, workout: null },
    { date: "24 Sep", diet: null, workout: null },
    { date: "26 Sep", diet: null, workout: null },
    { date: "28 Sep", diet: null, workout: null },
    { date: "30 Sep", diet: null, workout: null },
  ];

  const weeklyEmptyData: AnalyticsData[] = [
    { date: "Mon", diet: null, workout: null },
    { date: "Tue", diet: null, workout: null },
    { date: "Wed", diet: null, workout: null },
    { date: "Thu", diet: null, workout: null },
    { date: "Fri", diet: null, workout: null },
    { date: "Sat", diet: null, workout: null },
    { date: "Sun", diet: null, workout: null },
  ];

  const yearlyEmptyData: AnalyticsData[] = [
    { date: "Jan", diet: null, workout: null },
    { date: "Feb", diet: null, workout: null },
    { date: "Mar", diet: null, workout: null },
    { date: "Apr", diet: null, workout: null },
    { date: "May", diet: null, workout: null },
    { date: "Jun", diet: null, workout: null },
    { date: "Jul", diet: null, workout: null },
    { date: "Aug", diet: null, workout: null },
    { date: "Sep", diet: null, workout: null },
    { date: "Oct", diet: null, workout: null },
    { date: "Nov", diet: null, workout: null },
    { date: "Dec", diet: null, workout: null },
  ];

  // Data with actual values when hasData is true
  const monthlyData: AnalyticsData[] = [
    { date: "2 Sep", diet: 45, workout: 40 },
    { date: "4 Sep", diet: 50, workout: 70 },
    { date: "6 Sep", diet: 70, workout: 65 },
    { date: "8 Sep", diet: 65, workout: 50 },
    { date: "10 Sep", diet: 72, workout: 55 },
    { date: "12 Sep", diet: 58, workout: 70 },
    { date: "14 Sep", diet: 62, workout: 68 },
    { date: "16 Sep", diet: 55, workout: 30 },
    { date: "18 Sep", diet: 78, workout: 35 },
    { date: "20 Sep", diet: 75, workout: 65 },
    { date: "22 Sep", diet: 68, workout: 70 },
    { date: "24 Sep", diet: 85, workout: 60 },
    { date: "26 Sep", diet: 82, workout: 75 },
    { date: "28 Sep", diet: 78, workout: 85 },
    { date: "30 Sep", diet: 95, workout: 90 },
  ];

  const weeklyData: AnalyticsData[] = [
    { date: "Mon", diet: 65, workout: 70 },
    { date: "Tue", diet: 72, workout: 55 },
    { date: "Wed", diet: 58, workout: 80 },
    { date: "Thu", diet: 85, workout: 45 },
    { date: "Fri", diet: 78, workout: 90 },
    { date: "Sat", diet: 92, workout: 75 },
    { date: "Sun", diet: 88, workout: 85 },
  ];

  const yearlyData: AnalyticsData[] = [
    { date: "Jan", diet: 55, workout: 60 },
    { date: "Feb", diet: 62, workout: 45 },
    { date: "Mar", diet: 58, workout: 70 },
    { date: "Apr", diet: 75, workout: 65 },
    { date: "May", diet: 68, workout: 80 },
    { date: "Jun", diet: 82, workout: 55 },
    { date: "Jul", diet: 78, workout: 75 },
    { date: "Aug", diet: 85, workout: 70 },
    { date: "Sep", diet: 88, workout: 85 },
    { date: "Oct", diet: 92, workout: 80 },
    { date: "Nov", diet: 85, workout: 90 },
    { date: "Dec", diet: 95, workout: 88 },
  ];

  const getCurrentData = () => {
    if (hasData) {
      switch (selectedPeriod) {
        case "weekly":
          return weeklyData;
        case "yearly":
          return yearlyData;
        default:
          return monthlyData;
      }
    } else {
      switch (selectedPeriod) {
        case "weekly":
          return weeklyEmptyData;
        case "yearly":
          return yearlyEmptyData;
        default:
          return monthlyEmptyData;
      }
    }
  };

  const currentData = getCurrentData();

  return (
    <Card className="w-full bg-white shadow-sm border border-gray-100">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">
            Plan Analytics
          </h3>
          <div className="flex items-center gap-6">
            {/* Legend */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-600">Diet</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-sm text-gray-600">Workout</span>
              </div>
            </div>

            {/* Period Selector */}
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
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={currentData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                dy={10}
              />
              <YAxis
                domain={[0, 100]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                tickFormatter={(value) => `${value}%`}
                ticks={[20, 40, 60, 80, 100]}
              />
              {hasData && (
                <>
                  <Line
                    type="monotone"
                    dataKey="diet"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{
                      r: 4,
                      fill: "#3B82F6",
                      strokeWidth: 2,
                      stroke: "#ffffff",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="workout"
                    stroke="#A855F7"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{
                      r: 4,
                      fill: "#A855F7",
                      strokeWidth: 2,
                      stroke: "#ffffff",
                    }}
                  />
                </>
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanAnalytics;
