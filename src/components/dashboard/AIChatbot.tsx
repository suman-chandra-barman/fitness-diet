"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function AIChatbot() {
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
    <div className="w-full">
      <Card className="h-[500px] lg:h-[80vh] flex flex-col">
        <CardContent className="flex-1 p-6 flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 space-y-4 mb-4">
            {chatHistory.length ? (
              chatHistory.map((chat) => (
                <div key={chat.id} className="flex justify-start">
                  <div
                    className={`p-3 rounded-lg ${
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
  );
}

export default AIChatbot;
