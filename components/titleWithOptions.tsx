"use client";
import React, { useEffect, useState } from "react";
import { EllipsisVertical, FlagTriangleRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Globe } from "lucide-react";
import { List } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeContext } from "@/app/themeContext";

function TitleWithOptions() {
  const context = useContext(ThemeContext);
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const [btnSurrender, setBtnSurrender] = useState(false);
  const [mode, setMode] = useState("dark");

  const surrender = () => {
    localStorage.setItem("initGame", "false");
    localStorage.removeItem("myArray");
    localStorage.removeItem("modegame");
    localStorage.removeItem("word");
    localStorage.removeItem("idWord");

    window.location.reload();
  };

  useEffect(() => {
    const gameInit = localStorage.getItem("initGame");
    const booleanValue = gameInit === "true";
    setBtnSurrender(booleanValue);
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <h1
        onClick={() => {
          router.push("/");
          console.log(context);
        }}
        style={{ fontWeight: 800 }}
        className="text-center text-3xl hover:cursor-pointer"
      >
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
          <DropdownMenuItem onClick={() => router.push("/table")}>
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
          {btnSurrender && (
            <DropdownMenuItem
              onClick={() => {
                console.log("surrender");
                surrender();
              }}
            >
              <FlagTriangleRight />
              Surrender
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default TitleWithOptions;

//
