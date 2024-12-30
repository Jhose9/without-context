import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function GameMode() {
  return (
    <div className="flex items-center justify-center gap-2">
      <p style={{ fontWeight: 800 }} className="text-center">
        Game Mode:
      </p>
      <div>
        <Select>
          <SelectTrigger className="w-[6.6rem]">
            <SelectValue placeholder="Classic" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem value="Classic">Classic</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default GameMode;
