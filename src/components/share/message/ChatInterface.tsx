"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Paperclip, Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "other";
  timestamp: Date;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Canon LBP 6030 is urgent?",
      sender: "other",
      timestamp: new Date(),
    },
    {
      id: 2,
      text: "Yes",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: 3,
      text: "We need it within 1 week",
      sender: "user",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 p-3 border-b border-gray-200">
        <h3 className="font-medium">Discussion</h3>
      </div>
      <div className="p-4 max-h-80 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.sender === "user"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-blue-100 text-blue-800 ml-auto"
                }`}
              >
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-200 p-3">
        <div className="flex items-end gap-2">
          <textarea
            className="flex-1 border rounded-md p-2 min-h-[40px] max-h-32 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Ask whatever you want..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-10 w-10"
            >
              <Paperclip className="h-5 w-5 text-gray-500" />
            </Button>

            <Button
              className="bg-lightAltBlue hover:bg-darkBlue cursor-pointer rounded-full h-10 px-6 flex items-center"
              onClick={handleSendMessage}
            >
              Send message
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
