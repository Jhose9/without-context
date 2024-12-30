"use client";
import React, { useEffect, useState } from "react";
import { EllipsisVertical, FlagTriangleRight, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Globe } from "lucide-react";
import { List } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import WordComponet from "./wordComponet";

function TitleWithOptions({
  win,
  initGame,
}: {
  win?: boolean;
  initGame?: boolean;
}) {
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const [btnSurrender, setBtnSurrender] = useState(false);
  const [hintButton, setHintButton] = useState(false);
  const [mode, setMode] = useState("dark");
  //esto es de pruebas "estas son las pistas que tiene cada palabra"
  const [TestHint] = useState([
    "naturaleza",
    "elevación",
    "tierra",
    "cima",
    "senderismo",
    "bosque",
    "montaña",
    "río",
    "valle",
    "pradera",
    "desierto",
    "nieve",
    "cascada",
    "cueva",
    "animales",
    "viento",
    "piedras",
    "rocas",
    "océano",
    "lago",
    "árboles",
    "flor",
    "cielo",
    "estrella",
    "amanecer",
  ]);
  const [numberHint, setNumberHint] = useState(0);

  const surrender = () => {
    localStorage.setItem("initGame", "false");
    localStorage.removeItem("myArray");
    localStorage.removeItem("modegame");
    localStorage.removeItem("word");
    localStorage.removeItem("idWord");
    localStorage.removeItem("Hint");

    window.location.reload();
  };

  const moreHint = () => {
    setNumberHint((prevNumber) => prevNumber + 1);
    const auxHint = numberHint + 1;
    localStorage.setItem("Hint", `${auxHint}`);
  };
  useEffect(() => {
    const gameInit = localStorage.getItem("initGame");
    const valueHint = localStorage.getItem("Hint");
    const booleanValue = gameInit === "true";
    setBtnSurrender(booleanValue);
    setHintButton(booleanValue);
    if (valueHint) setNumberHint(parseInt(valueHint));
  }, [win, initGame]);

  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <h1
        onClick={() => {
          router.push("/");
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
          {hintButton && (
            <Dialog>
              <DialogTrigger asChild>
                <div
                  onClick={() => console.log("jose")}
                  className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  <Sparkles size={18} />
                  Hint
                </div>
              </DialogTrigger>
              <DialogContent className="max-h-[80vh] overflow-y-auto rounded-md dialog-scroll">
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription asChild>
                    <span>
                      {TestHint.slice(0, numberHint).map((item, index) => (
                        <WordComponet word={item} key={index} />
                      ))}
                      <Button onClick={moreHint} className="mt-4">
                        More
                      </Button>
                    </span>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default TitleWithOptions;
