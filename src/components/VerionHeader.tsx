import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface VerionHeaderProps {
  onToggleSidebar: () => void;
}

export const VerionHeader = ({ onToggleSidebar }: VerionHeaderProps) => {
  return (
    <header className="h-16 border-b border-border bg-background/80 backdrop-blur-sm flex items-center justify-between px-6">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground"
        >
          <Search className="h-4 w-4" />
        </Button>
        
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-gradient animate-bulge">Verion</h1>
          <Button
            variant="ghost"
            className="text-sm text-muted-foreground hover:text-foreground gap-1 px-2"
          >
            2.5 Pro
            <ChevronDown className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">PRO</span>
        </div>
        
        <Avatar className="h-8 w-8 ring-2 ring-primary/20">
          <AvatarImage src="" alt="User" />
          <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
            A
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};