"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import DietPlanCard from "@/components/cards/DietPlanCard";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DietProgressChart from "@/components/charts/DietProgressChart";
import DietPlanReport from "@/components/dashboard/diet-plan/DietPlanReport";

export default function DietPlanPage() {
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: "bot" as const,
      message: "Hi, how can I help you?",
    },
    {
      id: 2,
      type: "bot" as const,
      message: "This is your personalize AI Chatbot.",
    },
    {
      id: 3,
      type: "bot" as const,
      message: "Ask any type of Diet Information",
    },
  ]);

  const router = useRouter();

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatHistory((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: "user" as const,
          message: chatMessage,
        },
      ]);
      setChatMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4">
      {/* Header */}
      <div className="flex items-center justify-between py-4">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
          Diet Plan Report
        </h3>
        <Link href="/dashboard/create-goal">
          <Button
            variant="outline"
            className="flex items-center font-medium space-x-2 px-4 py-2 bg-orange-50 hover:bg-orange-100  cursor-pointer"
          >
            <div className="border border-orange-500 hover:border-orange-600 rounded p-0.5">
              <Plus className="w-4 h-4 text-orange-500 hover:text-orange-600" />
            </div>
            <span>New Diet Plan</span>
          </Button>
        </Link>
      </div>

      {/* Diet Progress Chart */}
      <div className="mb-4">
        <DietProgressChart />
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 flex items-center justify-between">
            {/* Empty State */}
            {/* <DietPlanCard className="max-w-md mx-auto border-0 shadow-none" /> */}
            <DietPlanReport />
          </div>

          {/* AI Chatbot Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-[500px] lg:h-[80vh] flex flex-col">
              <CardContent className="flex-1 p-6 flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 space-y-4 mb-4">
                  {chatHistory.length ? (
                    chatHistory.map((chat) => (
                      <div key={chat.id} className="flex justify-start">
                        <div
                          className={`max-w-[85%] p-3 rounded-lg ${
                            chat.type === "bot"
                              ? "bg-gray-200 text-gray-800"
                              : "bg-blue-500 text-white ml-auto"
                          }`}
                        >
                          <p className={`text-sm`}>{chat.message}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center">
                      <p className="mb-2">Hi, how can I help you?</p>
                      <p>
                        This is your personalize{" "}
                        <span className="text-orange-500 font-semibold">
                          AI Chatbot
                        </span>
                        .
                        <br /> Ask any type of{" "}
                        <span className="text-orange-500 font-semibold">
                          {" "}
                          Diet Information
                        </span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <div className="space-y-3 border rounded-2xl p-1">
                  <Input
                    placeholder="Write what you want..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 border-0 bg-transparent shadow-none focus:ring-0 focus:outline-none placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                  />
                  <div className="flex items-center justify-end space-x-3">
                    <Button
                      onClick={handleSendMessage}
                      className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2 flex-shrink-0"
                      disabled={!chatMessage.trim()}
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
