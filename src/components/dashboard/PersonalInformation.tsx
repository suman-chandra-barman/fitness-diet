"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Pencil, Camera } from "lucide-react";
import EditPersonalInformationModal, {
  PersonalInfoFormData,
} from "../modals/EditPersonalInformationModal";
import EditNameModal from "../modals/EditNameModal";

interface UserData {
  name: string;
  email: string;
  avatar: string;
  personalInfo: PersonalInfoFormData;
}

const initialUserData: UserData = {
  name: "Mahdee Rashid",
  email: "rashid@gmail.com",
  avatar:
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
  personalInfo: {
    age: "32",
    gender: "Male",
    height: "6'2\"",
    heightUnit: "FT",
    weight: "72",
    weightUnit: "KG",
    bodyFatLevel: "Normal",
    pastInjuries: "NO",
    fitnessGoal: "General Fitness",
    foodAllergies: "Yes",
    trainingPreference: "Cardio",
    sleepHour: "8",
    phoneNumber: "000-00000",
  },
};

export default function PersonalINformation() {
  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isEditNameModalOpen, setIsEditNameModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePersonalInfoSave = (data: PersonalInfoFormData) => {
    setUserData((prev) => ({
      ...prev,
      personalInfo: data,
    }));
  };

  const handleNameEmailSave = (name: string, email: string) => {
    setUserData((prev) => ({
      ...prev,
      name,
      email,
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUserData((prev) => ({
          ...prev,
          avatar: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Profile Header Section */}
      <Card className="relative p-4 gap-4">
        <CardHeader className="border-b p-0 !pb-4 pb">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="relative">
              <Avatar className="w-16 h-16 sm:w-20 sm:h-20">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback className="text-lg font-semibold">
                  {userData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                variant="secondary"
                className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full p-0 border-2 border-white shadow-sm"
                onClick={triggerImageUpload}
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold text-gray-900">
                  {userData.name}
                </h2>
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-1 h-auto text-gray-500 hover:text-gray-700"
                  onClick={() => setIsEditNameModalOpen(true)}
                >
                  <Pencil className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-gray-600">{userData.email}</p>
            </div>
          </div>
        </CardHeader>

        {/* Personal Information Section */}
        <CardHeader className="px-0">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Personal Information
            </h3>
            <Button
              size="sm"
              variant="ghost"
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsEditProfileModalOpen(true)}
            >
              <Pencil className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent className="px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Body Fat Level
              </p>
              <p className="text-gray-900">
                {userData.personalInfo.bodyFatLevel}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Phone number</p>
              <p className="text-gray-900">
                {userData.personalInfo.phoneNumber}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Current Fitness Goal
              </p>
              <p className="text-gray-900">
                {userData.personalInfo.fitnessGoal}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Past or current injuries
              </p>
              <p className="text-gray-900">
                {userData.personalInfo.pastInjuries}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Training Preference
              </p>
              <p className="text-gray-900">
                {userData.personalInfo.trainingPreference}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Food Allergies
              </p>
              <p className="text-gray-900">
                {userData.personalInfo.foodAllergies}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Age</p>
              <p className="text-gray-900">{userData.personalInfo.age} year</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Height</p>
              <p className="text-gray-900">{userData.personalInfo.height}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Weight</p>
              <p className="text-gray-900">
                {userData.personalInfo.weight}{" "}
                {userData.personalInfo.weightUnit}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Sleep Hour</p>
              <p className="text-gray-900">
                {userData.personalInfo.sleepHour} Hours
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Edit Personal Information Modal */}
      <EditPersonalInformationModal
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        personalInfo={userData.personalInfo}
        onSave={handlePersonalInfoSave}
      />

      {/* Edit Name and Email Modal */}
      <EditNameModal
        isOpen={isEditNameModalOpen}
        onClose={() => setIsEditNameModalOpen(false)}
        name={userData.name}
        email={userData.email}
        onSave={handleNameEmailSave}
      />
    </div>
  );
}
