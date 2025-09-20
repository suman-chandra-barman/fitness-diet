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

interface MealItem {
  id: string;
  type: string;
  name: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  serving: string;
  completed: boolean;
}

interface DayData {
  day: number;
  date: string;
  dayName: string;
  meals: MealItem[];
}

export default function DietPlanReport() {
  const [selectedWeek, setSelectedWeek] = useState("1");
  const [selectedDay, setSelectedDay] = useState(2);

  // Sample data - in real app this would come from API/database
  const totalWeeks = 8; // This would come from the user's selected plan duration

  const weekData: DayData[] = [
    {
      day: 1,
      date: "12/06/24",
      dayName: "Sun",
      meals: [
        {
          id: "1",
          type: "Breakfast",
          name: "Grilled Chicken Salad",
          calories: 450,
          protein: 35,
          fat: 18,
          carbs: 48,
          serving: "1 bowl",
          completed: true,
        },
        {
          id: "2",
          type: "Snack",
          name: "Greek Yogurt with Nuts",
          calories: 200,
          protein: 8,
          fat: 7,
          carbs: 16,
          serving: "150g",
          completed: false,
        },
        {
          id: "3",
          type: "Lunch",
          name: "Brown Rice & Veg Curry",
          calories: 500,
          protein: 26,
          fat: 12,
          carbs: 37,
          serving: "1 plate",
          completed: false,
        },
        {
          id: "4",
          type: "Snack",
          name: "Protein Smoothie",
          calories: 320,
          protein: 12,
          fat: 6,
          carbs: 21,
          serving: "1 glass",
          completed: false,
        },
        {
          id: "5",
          type: "Dinner",
          name: "Baked Salmon & Veggies",
          calories: 450,
          protein: 18,
          fat: 15,
          carbs: 38,
          serving: "200g",
          completed: false,
        },
      ],
    },
    {
      day: 2,
      date: "13/06/24",
      dayName: "Mon",
      meals: [
        {
          id: "6",
          type: "Breakfast",
          name: "Oatmeal with Berries",
          calories: 350,
          protein: 12,
          fat: 8,
          carbs: 65,
          serving: "1 bowl",
          completed: false,
        },
        {
          id: "7",
          type: "Snack",
          name: "Apple with Peanut Butter",
          calories: 180,
          protein: 6,
          fat: 12,
          carbs: 18,
          serving: "1 medium",
          completed: false,
        },
        {
          id: "8",
          type: "Lunch",
          name: "Quinoa Buddha Bowl",
          calories: 480,
          protein: 20,
          fat: 16,
          carbs: 58,
          serving: "1 bowl",
          completed: false,
        },
        {
          id: "9",
          type: "Snack",
          name: "Protein Bar",
          calories: 250,
          protein: 20,
          fat: 8,
          carbs: 25,
          serving: "1 bar",
          completed: false,
        },
        {
          id: "10",
          type: "Dinner",
          name: "Grilled Turkey & Sweet Potato",
          calories: 420,
          protein: 32,
          fat: 12,
          carbs: 45,
          serving: "200g",
          completed: false,
        },
      ],
    },
    // Add more days...
  ];

  const currentDayData =
    weekData.find((day) => day.day === selectedDay) || weekData[0];

  const [meals, setMeals] = useState<MealItem[]>(currentDayData.meals);

  const toggleMealCompletion = (mealId: string) => {
    setMeals((prev) =>
      prev.map((meal) =>
        meal.id === mealId ? { ...meal, completed: !meal.completed } : meal
      )
    );
  };

  // Calculate totals
  const totals = meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      fat: acc.fat + meal.fat,
      carbs: acc.carbs + meal.carbs,
    }),
    { calories: 0, protein: 0, fat: 0, carbs: 0 }
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
          meals: [],
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
        {/* Diet Table */}
        <Card className="my-4">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Meal Type
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Meal Name
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Calories{" "}
                      <span className="text-xs text-gray-500">(kcal)</span>
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Protein <span className="text-xs text-gray-500">(g)</span>
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Fat <span className="text-xs text-gray-500">(g)</span>
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Carbs <span className="text-xs text-gray-500">(g)</span>
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Serving
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {meals.map((meal, index) => (
                    <tr
                      key={meal.id}
                      className={`border-b hover:bg-gray-50 ${
                        meal.type === "Snack" ? "bg-purple-50" : ""
                      }`}
                    >
                      <td className="py-4 px-4 text-gray-600">{meal.type}</td>
                      <td className="py-4 px-4 font-medium text-gray-900">
                        {meal.name}
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {meal.calories}
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {meal.protein}
                      </td>
                      <td className="py-4 px-4 text-gray-700">{meal.fat}</td>
                      <td className="py-4 px-4 text-gray-700">{meal.carbs}</td>
                      <td className="py-4 px-4 text-gray-700">
                        {meal.serving}
                      </td>
                      <td className="py-4 px-4">
                        <Checkbox
                          checked={meal.completed}
                          onCheckedChange={() => toggleMealCompletion(meal.id)}
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

        {/* Total Daily Nutrition Summary */}
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Total Daily Nutrition Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border rounded-xl p-4">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">
                  Total Calories <span className="text-xs">(kcal)</span>
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900">
                  {totals.calories} kcal
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">
                  Total Protein <span className="text-xs">(g)</span>
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900">
                  {totals.protein}g
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">
                  Total Fat <span className="text-xs">(g)</span>
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900">
                  {totals.fat}g
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">
                  Total Carbs <span className="text-xs">(g)</span>
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900">
                  {totals.carbs}g
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
