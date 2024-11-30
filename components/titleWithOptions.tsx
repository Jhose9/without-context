"use client";
import React, { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import { useTheme } from "next-themes";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Globe } from "lucide-react";
import { List } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function TitleWithOptions() {
  const [mode, setMode] = useState("dark");
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <h1 style={{ fontWeight: 800 }} className="text-center text-3xl">
        Without Context
      </h1>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => console.log("Change the language")}>
            <Globe />
            Language
          </DropdownMenuItem>
          <DropdownMenuItem>
            <List />
            Table Point
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              if (theme == "light") {
                setMode("light");
                setTheme("dark");
              } else {
                setMode("dark");
                setTheme("light");
              }
            }}
          >
            {theme == "light" ? <Moon /> : <Sun />}
            {mode}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default TitleWithOptions;

//
