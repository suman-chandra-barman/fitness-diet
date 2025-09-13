"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const CreateGoalPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    currentWeight: "",
    targetWeight: "",
    currentUnit: "KG",
    targetUnit: "KG",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the goal to your backend/state management
    console.log("Goal created:", formData);
    router.push("/");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mb-4 p-0 h-auto text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>

        <Card className="bg-white shadow-sm border border-gray-100">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-900">
              Create Your Goal
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="title"
                  className="text-sm font-medium text-gray-700"
                >
                  Goal Title
                </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Write your goal here"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="currentWeight"
                    className="text-sm font-medium text-gray-700"
                  >
                    Current Weight
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="currentWeight"
                      type="number"
                      placeholder="0"
                      value={formData.currentWeight}
                      onChange={(e) =>
                        handleInputChange("currentWeight", e.target.value)
                      }
                      className="flex-1"
                      required
                    />
                    <Select
                      value={formData.currentUnit}
                      onValueChange={(value) =>
                        handleInputChange("currentUnit", value)
                      }
                    >
                      <SelectTrigger className="w-[70px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="KG">KG</SelectItem>
                        <SelectItem value="LB">LB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="targetWeight"
                    className="text-sm font-medium text-gray-700"
                  >
                    Target Weight
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="targetWeight"
                      type="number"
                      placeholder="0"
                      value={formData.targetWeight}
                      onChange={(e) =>
                        handleInputChange("targetWeight", e.target.value)
                      }
                      className="flex-1"
                      required
                    />
                    <Select
                      value={formData.targetUnit}
                      onValueChange={(value) =>
                        handleInputChange("targetUnit", value)
                      }
                    >
                      <SelectTrigger className="w-[70px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="KG">KG</SelectItem>
                        <SelectItem value="LB">LB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className=" bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5"
              >
                Set Goal
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateGoalPage;
