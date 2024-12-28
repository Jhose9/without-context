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

function AboutTheWin({
  numberWord,
  wordOfTheWin,
  listWord,
}: {
  numberWord: number;
  wordOfTheWin: String;
  listWord: { id: number; word: string }[];
}) {
  const newGame = () => {
    localStorage.setItem("initGame", "false");
    localStorage.removeItem("myArray");
    localStorage.removeItem("modegame");
    localStorage.removeItem("word");
    localStorage.removeItem("idWord");
    localStorage.removeItem("win");

    window.location.reload();
  };
  return (
    <div className="w-11/12 mx-auto text-center bg-my-primary rounded-md md:w-1/2 xl:w-2/5">
      <div className="space-y-6 py-6">
        <h1 className="text-2xl" style={{ fontWeight: 800 }}>
          Congratulations
        </h1>
        <div>
          word: <strong>{wordOfTheWin}</strong>
        </div>
        <div>intentos: {numberWord}</div>
        <div>
          <div>Pista</div>
          <Dialog>
            <DialogTrigger>Show list</DialogTrigger>
            <DialogContent className="max-h-[80vh] overflow-y-auto rounded-md dialog-scroll  ">
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
        </div>
        <div>puntos: 300</div>
        <div>timepo:00:00:00</div>
        <Button onClick={newGame}>New game</Button>
      </div>
    </div>
  );
}

export default AboutTheWin;
