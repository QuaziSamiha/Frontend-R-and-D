"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon, PaperclipIcon, SendIcon } from "lucide-react";
import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    console.log("Sending message:", message);
    setMessage("");
  };
  return (
    <div>
      <Card className="border-gray-200">
        <CardContent className="p-0">
          <Textarea
            placeholder="Ask whatever you want..."
            className="border-0 focus-visible:ring-0 resize-none min-h-[100px] rounded-t-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex items-center justify-between p-3 border-t">
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-gray-700"
              >
                <PaperclipIcon className="h-5 w-5 mr-1" />
                Attachment
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-gray-700"
              >
                <ImageIcon className="h-5 w-5 mr-1" />
                Gallery
              </Button>
            </div>
            <Button
              onClick={handleSendMessage}
              className="bg-gray-900 hover:bg-black text-white"
            >
              Send message
              <SendIcon className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
