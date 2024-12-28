import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function GameMode() {
  let TypeGame = "any";
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
            <SelectItem
              onClick={() => {
                TypeGame = "Classic";
              }}
              value="Classic"
            >
              Classic
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default GameMode;
