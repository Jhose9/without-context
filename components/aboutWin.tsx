import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import WordComponet from "./wordComponet";

import { Trophy, Clock, Star, ListChecks, Undo, History } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

function AboutTheWin({
  numberWord,
  wordOfTheWin,
  listWord,
  hints,
}: {
  numberWord: number;
  wordOfTheWin: string;
  listWord: { id: number; word: string }[];
  hints: number;
}) {
  const newGame = () => {
    localStorage.setItem("initGame", "false");
    localStorage.removeItem("myArray");
    localStorage.removeItem("modegame");
    localStorage.removeItem("word");
    localStorage.removeItem("idWord");
    localStorage.removeItem("win");
    localStorage.removeItem("Hint");

    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center">
      <Card className=" w-11/12 md:w-3/6 lg:w-2/6 xl:w-3/12 bg-white dark:bg-gray-800 rounded-xl shadow-lg ">
        <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-500 dark:to-yellow-700 text-center py-7 rounded-tr-lg rounded-tl-lg">
          <div className="flex justify-center mb-3">
            <Trophy className="w-16 h-16 text-white animate-bounce" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 animate-pulse">
            Congratulations!
          </h2>
          <p className="text-white text-lg">
            You found the word:{" "}
            <span className="font-bold">{wordOfTheWin}</span>
          </p>
        </CardHeader>

        <CardContent className="p-6 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Star className="text-yellow-500 dark:text-yellow-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Points
                </p>
                <p className="font-bold text-gray-900 dark:text-white">300</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <ListChecks className="text-blue-500 dark:text-blue-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Attempts
                </p>
                <p className="font-bold text-gray-900 dark:text-white">
                  {numberWord}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Clock className="text-green-500 dark:text-green-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Time</p>
                <p className="font-bold text-gray-900 dark:text-white">
                  00:01:00
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Star className="text-purple-500 dark:text-purple-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Hints Used
                </p>
                <p className="font-bold text-gray-900 dark:text-white">
                  {hints}
                </p>
              </div>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="w-full mt-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 
                hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center space-x-2"
              >
                <History className="w-4 h-4" />
                <span>Show Attempts History</span>
              </Button>
            </DialogTrigger>
            {/*
            max-h-[80vh] - Sets the maximum height of the element to 80% of the viewport height.
            overflow-y-auto - Adds a vertical scrollbar if the content overflows vertically.
            rounded-md - Rounds the corners of the element slightly for a softer appearance.
            dialog-scroll - A custom global CSS class to style the scrollbar (e.g., size, color, or behavior).
            */}
            <DialogContent className="max-h-[80vh] overflow-y-auto rounded-md dialog-scroll">
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription asChild>
                  {/* The <DialogDescription> component from ShadCN renders a <p> tag by default.
                Since the <WordComponet/> component uses a <div>, this creates a conflict because you can't
                have a <div> inside a <p>. To avoid this issue, we use the `asChild` prop in
                <DialogDescription> to render a <span> instead of a <p>, which solves the problem. */}
                  <span>
                    {listWord.map(({ id, word }) => (
                      <WordComponet key={id} word={word} />
                    ))}
                  </span>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardContent>

        <CardFooter className="p-6 bg-gray-50 dark:bg-gray-900 flex justify-center">
          <Button
            onClick={newGame}
            className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-lg 
          hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center space-x-2"
          >
            <Undo className="w-4 h-4" />
            <span>New Game</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AboutTheWin;
