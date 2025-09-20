import { useState } from "react";
import { Plus, Mic, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SuggestionCards } from "./SuggestionCards";

export const VerionChat = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex-1 flex flex-col justify-center items-center px-6 py-8 max-w-4xl mx-auto w-full">
      {/* Main greeting */}
      <div className="text-center mb-12 slide-up">
        <h1 className="text-5xl font-light mb-2">
          Hello, <span className="text-gradient font-medium">Abhin</span>
        </h1>
      </div>

      {/* Chat input */}
      <div className="w-full max-w-3xl mb-8 slide-up" style={{ animationDelay: "200ms" }}>
        <div className="relative">
          <div className="flex items-center gap-3 bg-chat-input border border-chat-input-border rounded-3xl px-6 py-4 shadow-card-ai hover:border-primary/30 transition-all duration-300 ai-glow">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-primary"
            >
              <Plus className="h-4 w-4" />
            </Button>
            
            <Input
              placeholder="Ask Verion"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border-none bg-transparent text-lg placeholder:text-muted-foreground focus-visible:ring-0 px-0"
            />
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary gap-2 px-3"
              >
                <Wrench className="h-4 w-4" />
                <span className="text-sm">Tools</span>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-primary"
              >
                <Mic className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Suggestion Cards */}
      <SuggestionCards />
    </div>
  );
};