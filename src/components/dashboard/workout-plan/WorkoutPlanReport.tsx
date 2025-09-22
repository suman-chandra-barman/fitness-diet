"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Pause, Trash2 } from "lucide-react";

interface WorkoutItem {
  id: string;
  type: string;
  name: string;
  sets: number;
  reps: string;
  restTime: string;
  completed: boolean;
}

interface DayData {
  day: number;
  date: string;
  dayName: string;
  workouts: WorkoutItem[];
}

export default function WorkoutPlanReport() {
  const [selectedWeek, setSelectedWeek] = useState("1");
  const [selectedDay, setSelectedDay] = useState(2);

  // Sample data - in real app this would come from API/database
  const totalWeeks = 8; // This would come from the user's selected plan duration

  const weekData: DayData[] = [
    {
      day: 1,
      date: "12/06/24",
      dayName: "Sun",
      workouts: [
        {
          id: "1",
          type: "Warm-up",
          name: "Jumping Jacks",
          sets: 1,
          reps: "3 min",
          restTime: "—",
          completed: true,
        },
        {
          id: "2",
          type: "Strength",
          name: "Push-ups",
          sets: 3,
          reps: "12 reps",
          restTime: "60 sec",
          completed: false,
        },
        {
          id: "3",
          type: "Strength",
          name: "Squats",
          sets: 4,
          reps: "15 reps",
          restTime: "60 sec",
          completed: false,
        },
        {
          id: "4",
          type: "Cardio",
          name: "Running",
          sets: 1,
          reps: "20 min",
          restTime: "—",
          completed: false,
        },
        {
          id: "5",
          type: "Cool-down",
          name: "Stretching",
          sets: 1,
          reps: "10 min",
          restTime: "—",
          completed: false,
        },
      ],
    },
    {
      day: 2,
      date: "13/06/24",
      dayName: "Mon",
      workouts: [
        {
          id: "6",
          type: "Warm-up",
          name: "Dynamic Stretching",
          sets: 1,
          reps: "5 min",
          restTime: "—",
          completed: false,
        },
        {
          id: "7",
          type: "Strength",
          name: "Bench Press",
          sets: 4,
          reps: "8-10 reps",
          restTime: "120 sec",
          completed: false,
        },
        {
          id: "8",
          type: "Strength",
          name: "Deadlifts",
          sets: 3,
          reps: "6-8 reps",
          restTime: "180 sec",
          completed: false,
        },
        {
          id: "9",
          type: "Strength",
          name: "Pull-ups",
          sets: 3,
          reps: "8-12 reps",
          restTime: "90 sec",
          completed: false,
        },
        {
          id: "10",
          type: "Cool-down",
          name: "Foam Rolling",
          sets: 1,
          reps: "10 min",
          restTime: "—",
          completed: false,
        },
      ],
    },
    // Add more days...
  ];

  const currentDayData =
    weekData.find((day) => day.day === selectedDay) || weekData[0];

  const [workouts, setWorkouts] = useState<WorkoutItem[]>(
    currentDayData.workouts
  );

  const toggleWorkoutCompletion = (workoutId: string) => {
    setWorkouts((prev) =>
      prev.map((workout) =>
        workout.id === workoutId
          ? { ...workout, completed: !workout.completed }
          : workout
      )
    );
  };

  // Calculate totals for workout summary
  const workoutTotals = workouts.reduce(
    (acc, workout) => {
      // Calculate total duration (rough estimation)
      let duration = 0;
      if (workout.reps.includes("min")) {
        duration = parseInt(workout.reps.match(/\d+/)?.[0] || "0");
      } else if (workout.reps.includes("reps")) {
        // Estimate 1-2 minutes per set for strength exercises
        duration = workout.sets * 1.5;
      }

      return {
        totalDuration: acc.totalDuration + duration,
        totalExercises: acc.totalExercises + 1,
        completedExercises:
          acc.completedExercises + (workout.completed ? 1 : 0),
      };
    },
    { totalDuration: 0, totalExercises: 0, completedExercises: 0 }
  );

  const generateDays = () => {
    const days = [];
    for (let i = 1; i <= 7; i++) {
      const dayData = weekData.find((d) => d.day === i);
      if (dayData) {
        days.push(dayData);
      } else {
        // Generate placeholder data for missing days
        days.push({
          day: i,
          date: `${11 + i}/06/24`,
          dayName: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][i - 1],
          workouts: [],
        });
      }
    }
    return days;
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-white border-b rounded-2xl p-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">Normal Diet</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="flex items-center">
                <Pause className="h-4 w-4 mr-2" />
                Hold This Week
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center text-red-500">
                <Trash2 className="h-4 w-4 mr-2" />
                Cancel This Diet
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          {/* Days Navigation */}
          <div className="flex space-x-2 overflow-x-auto gap-2 flex-wrap">
            <Select value={selectedWeek} onValueChange={setSelectedWeek}>
              <SelectTrigger className="min-w-[100px] !h-[50px] border border-orange-500 text-orange-500 font-medium">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: totalWeeks }, (_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    Week {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {generateDays().map((day) => (
              <Button
                key={day.day}
                variant={selectedDay === day.day ? "default" : "outline"}
                className={`min-w-[100px] h-[50px] flex-shrink-0 ${
                  selectedDay === day.day
                    ? "bg-purple-100 text-[#7738F8] border border-blue-200 hover:bg-"
                    : "bg-white text-gray-600 border-gray-200"
                }`}
                onClick={() => setSelectedDay(day.day)}
              >
                <div className="text-center ">
                  <div className="text-sm font-medium">Day-{day.day}</div>
                  <div className="text-xs">
                    {day.dayName}: {day.date}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div>
        {/* Workout Table */}
        <Card className="my-4">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Workout Type
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Exercise Name
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Sets
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Reps / Duration
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Rest Time
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {workouts.map((workout) => (
                    <tr
                      key={workout.id}
                      className={`border-b hover:bg-gray-50 ${
                        workout.type === "Strength" ? "bg-purple-50" : ""
                      }`}
                    >
                      <td className="py-4 px-4 text-gray-600">
                        {workout.type}
                      </td>
                      <td className="py-4 px-4 font-medium text-gray-900">
                        {workout.name}
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {workout.sets === 1 ? "—" : workout.sets}
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {workout.reps}
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {workout.restTime}
                      </td>
                      <td className="py-4 px-4">
                        <Checkbox
                          checked={workout.completed}
                          onCheckedChange={() =>
                            toggleWorkoutCompletion(workout.id)
                          }
                          className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Daily Workout Summary */}
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Daily Workout Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border rounded-xl p-4">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">Total Duration</div>
                <div className="text-md">
                  {Math.round(workoutTotals.totalDuration)} min
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">
                  Total Exercises
                </div>
                <div className="text-md">{workoutTotals.totalExercises}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">Focus Areas</div>
                <div className="text-md">Full Body / Strength</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
