"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface FormData {
  // Basic Information
  age: string;
  gender: string;
  height: string;
  heightUnit: string;
  weight: string;
  weightUnit: string;
  goalWeight: string;
  goalWeightUnit: string;
  primaryGoal: string;
  trainingExperience: string;
  secondaryGoal: string;

  // Health & Medical
  existingConditions: string;
  pastOrCurrentInjuries: string;
  recentLab: string;
  doctorNote: string;

  // Workout Schedule
  workoutDuration: string;
  facility: string;
  preferredTime: string;
  availableDays: string;
  sleepHour: string;
}

const steps = [
  { id: 1, title: "Basic Information" },
  { id: 2, title: "Health & Medical" },
  { id: 3, title: "Workout     Schedule" },
];

export default function CreateDietPlan() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = useForm<FormData>();

  const watchedFields = watch();
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  // Check if current step's required fields are filled
  useEffect(() => {
    const checkRequiredFields = () => {
      switch (currentStep) {
        case 1:
          return !!(
            watchedFields.age &&
            watchedFields.gender &&
            watchedFields.height &&
            watchedFields.weight &&
            watchedFields.goalWeight &&
            watchedFields.primaryGoal &&
            watchedFields.trainingExperience &&
            watchedFields.secondaryGoal
          );
        case 2:
          return true; // Health & Medical is optional (can be skipped)
        case 3:
          return !!(
            watchedFields.workoutDuration &&
            watchedFields.facility &&
            watchedFields.preferredTime &&
            watchedFields.availableDays &&
            watchedFields.sleepHour
          );
        default:
          return false;
      }
    };

    setIsNextDisabled(!checkRequiredFields());
  }, [watchedFields, currentStep]);

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Handle form submission
    router.push("/");
  };

  const nextStep = async () => {
    const isValid = await trigger();
    if (!isValid) return;

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipStep = () => {
    if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gray-50">
      {/* Progress Steps */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step.id}
              </div>
              <span
                className={`ml-2 text-sm font-medium ${
                  currentStep >= step.id ? "text-orange-500" : "text-gray-500"
                }`}
              >
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div
                  className={`w-12 h-0.5 mx-4 ${
                    currentStep > step.id ? "bg-orange-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="font-semibold text-xl md:text-2xl">
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="age" className="mb-2">
                      Age *
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="25"
                      {...register("age", { required: "Age is required" })}
                    />
                    {errors.age && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.age.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="gender" className="mb-2">
                      Gender *
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("gender", value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="weight" className="mb-2">
                      Current Weight *
                    </Label>
                    <div className="flex space-x-2">
                      <Input
                        id="weight"
                        type="number"
                        placeholder="70"
                        className="flex-1"
                        {...register("weight", {
                          required: "Weight is required",
                        })}
                      />
                      <Select
                        onValueChange={(value) => setValue("weightUnit", value)}
                      >
                        <SelectTrigger className="w-20">
                          <SelectValue placeholder="KG" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kg">KG</SelectItem>
                          <SelectItem value="lbs">LBS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {errors.weight && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.weight.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="goalWeight" className="mb-2">
                      Goal Weight *
                    </Label>
                    <div className="flex space-x-2">
                      <Input
                        id="goalWeight"
                        type="number"
                        placeholder="70"
                        className="flex-1"
                        {...register("goalWeight", {
                          required: "Goal Weight is required",
                        })}
                      />
                      <Select
                        onValueChange={(value) =>
                          setValue("goalWeightUnit", value)
                        }
                      >
                        <SelectTrigger className="w-20">
                          <SelectValue placeholder="CM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cm">CM</SelectItem>
                          <SelectItem value="ft">FT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {errors.goalWeight && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.goalWeight.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="height" className="mb-2">
                      Height *
                    </Label>
                    <div className="flex space-x-2">
                      <Input
                        id="height"
                        type="number"
                        placeholder="170"
                        className="flex-1"
                        {...register("height", {
                          required: "Height is required",
                        })}
                      />
                      <Select
                        onValueChange={(value) => setValue("heightUnit", value)}
                      >
                        <SelectTrigger className="w-20">
                          <SelectValue placeholder="CM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cm">CM</SelectItem>
                          <SelectItem value="ft">FT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {errors.height && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.height.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="primaryGoal" className="mb-2">
                      Primary Gaol *
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("primaryGoal", value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5 ">Fat Loss</SelectItem>
                        <SelectItem value="6">Muscle Gain</SelectItem>
                        <SelectItem value="7">Strength</SelectItem>
                        <SelectItem value="8">Endurance</SelectItem>
                        <SelectItem value="9">Mobility</SelectItem>
                        <SelectItem value="10">General Fitness</SelectItem>
                        <SelectItem value="11">Sport Specific</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="trainingExperience" className="mb-2">
                      Training Experience *
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setValue("trainingExperience", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Experience Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No Injuries</SelectItem>
                        <SelectItem value="hand">Hand</SelectItem>
                        <SelectItem value="leg">Leg</SelectItem>
                        <SelectItem value="back">Back</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="secondaryGoal" className="mb-2">
                      Secondary Goal *
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setValue("secondaryGoal", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weight-loss">Weight Loss</SelectItem>
                        <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                        <SelectItem value="flexibility">Flexibility</SelectItem>
                        <SelectItem value="general-health">
                          General Health
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={nextStep}
                    disabled={isNextDisabled}
                    className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Next <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Health & Medical */}
          {currentStep === 2 && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-semibold text-xl md:text-2xl">
                  Health & Medical
                </CardTitle>
                <Button
                  variant="ghost"
                  onClick={skipStep}
                  className="text-orange-500"
                >
                  Skip →
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="existingConditions" className="mb-2">
                      Existing Medical Conditions
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setValue("existingConditions", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Yes or No" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diabetes">Diabetes</SelectItem>
                        <SelectItem value="hypertension">
                          Hypertension
                        </SelectItem>
                        <SelectItem value="thyroid">Thyroid</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="recentLab" className="mb-2">
                      Recent Lab
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("recentLab", value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Lab" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a1c">A1C</SelectItem>
                        <SelectItem value="ldl">LDL</SelectItem>
                        <SelectItem value="hdl">HDL</SelectItem>
                        <SelectItem value="tg">TG</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="pastOrCurrentInjuries" className="mb-2">
                      Past or Current Injuries
                    </Label>
                    <Textarea
                      id="pastOrCurrentInjuries"
                      placeholder="Ex: Ex: knee pain, lower back pain..."
                      className="min-h-[100px]"
                      {...register("pastOrCurrentInjuries")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="doctorNote" className="mb-2">
                      Doctor Note
                    </Label>
                    <Textarea
                      id="doctorNote"
                      placeholder="Ex: I can't eat meat..."
                      className="min-h-[100px]"
                      {...register("doctorNote")}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back
                  </Button>
                  <Button
                    onClick={nextStep}
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    Next <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step : Workout Schedule */}
          {currentStep === 3 && (                      
            <Card>
              <CardHeader>
                <CardTitle className="font-semibold text-xl md:text-2xl">
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-medium mb-2">
                    Select Workout Duration
                  </Label>
                  <p className="text-sm text-gray-500 mb-4">
                    You can select only option for one plan
                  </p>
                  <RadioGroup
                    onValueChange={(value) => setValue("workoutDuration", value)}
                  >
                    <div className="grid grid-cols-5 gap-4">
                      {[2, 3, 5, 6, 7, 8, 9, 10].map((week) => (
                        <div key={week} className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={week.toString()}
                            id={`week-${week}`}
                          />
                          <Label htmlFor={`week-${week}`} className="text-sm">
                            {week} week{week > 1 ? "s" : ""}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="facility" className="mb-2">
                      Facility
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("facility", value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Yes or No" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4">4 Meals</SelectItem>
                        <SelectItem value="5">5 Meals</SelectItem>
                        <SelectItem value="6">6 Meals</SelectItem>
                        <SelectItem value="7">7 Meals</SelectItem>
                        <SelectItem value="8">8 Meals</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="preferredTime" className="mb-2">
                      Preferred Time
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setValue("preferredTime", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Lab" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No Cheat Day</SelectItem>
                        <SelectItem value="once-week">Once a Week</SelectItem>
                        <SelectItem value="twice-week">Twice a Week</SelectItem>
                        <SelectItem value="every-10-days">
                          Every 10 Days
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="availableDays" className="mb-2">
                      Available Days
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("availableDays", value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select available days" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4">4 Meals</SelectItem>
                        <SelectItem value="5">5 Meals</SelectItem>
                        <SelectItem value="6">6 Meals</SelectItem>
                        <SelectItem value="7">7 Meals</SelectItem>
                        <SelectItem value="8">8 Meals</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="sleepHour" className="mb-2">
                     Sleep Hour
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setValue("sleepHour", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Sleep hour" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No Cheat Day</SelectItem>
                        <SelectItem value="once-week">Once a Week</SelectItem>
                        <SelectItem value="twice-week">Twice a Week</SelectItem>
                        <SelectItem value="every-10-days">
                          Every 10 Days
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isNextDisabled}
                    className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Generate Diet Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </form>
      </div>
    </div>
  );
}
