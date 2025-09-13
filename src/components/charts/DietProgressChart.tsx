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

interface DayProgress {
  day: string;
  progress: number;
}

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
    if (progress === 0) return "bg-gray-300"; // No data
    if (progress < 60) return "bg-[#F2ECFF]"; // Under 60%
    return "bg-[#7738F8]"; // 60% and above
  };

  const getHoverColor = (progress: number) => {
    if (progress === 0) return "hover:bg-gray-400"; // No data
    if (progress < 60) return "hover:bg-purple-300"; // Under 60%
    return "hover:bg-violet-700"; // 60% and above
  };

  const maxHeight = 200; // Maximum height for bars
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
        <div className="relative">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400 font-medium">
            <span>100%</span>
            <span>80%</span>
            <span>60%</span>
            <span>40%</span>
            <span>20%</span>
            <span>0%</span>
          </div>

          {/* Chart area */}
          <div className="ml-12">
            <div className="flex items-end justify-between gap-3 h-52">
              {currentData.map((item, index) => {
                const barHeight =
                  item.progress === 0 ? 8 : (item.progress / 100) * maxHeight;
                const barColor = getBarColor(item.progress);
                const hoverColor = getHoverColor(item.progress);

                return (
                  <div
                    key={`${item.day}-${index}`}
                    className="flex flex-col items-center flex-1"
                  >
                    <div className="w-full flex items-end justify-center h-52">
                      <div
                        className={`w-full ${barColor} ${hoverColor} rounded-full transition-all duration-300 cursor-pointer relative group`}
                        style={{ height: `${barHeight}px` }}
                      >
                        {/* Tooltip on hover */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            {item.progress === 0
                              ? "No data"
                              : `${item.progress}%`}
                          </div>
                          <div className="w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-gray-900 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 mt-3 font-medium">
                      {item.day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DietProgressChart;
