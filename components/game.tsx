import React from "react";
import { Input } from "@/components/ui/input";
import WordComponet from "./wordComponet";

function Game({
  inputValue,
  setInputValue,
  handleKeyEnter,
  listWords,
}: {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleKeyEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  listWords: { id: number; word: string }[];
}) {
  return (
    <div className="my-4 space-y-4 mx-auto w-4/5 md:w-1/2 xl:w-1/4">
      <Input
        type="search"
        placeholder="Word"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyEnter}
      />

      <div>
        {listWords.map(({ id, word }) => (
          <WordComponet key={id} word={word} />
        ))}
      </div>
    </div>
  );
}

export default Game;
