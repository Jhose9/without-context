import React from "react";
import { Input } from "@/components/ui/input";

function Game({
  inputValue,
  setInputValue,
  handleKeyEnter,
  listWords,
}: {
  inputValue: any;
  setInputValue: any;
  handleKeyEnter: any;
  listWords: any;
}) {
  return (
    <div className="my-4 space-y-4 mx-auto w-4/5 md:w-1/2 xl:w-1/4">
      <Input
        type="search"
        placeholder="Palabra"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyEnter}
      />

      <div>
        {listWords.map((item: any) => (
          <div key={item.id}>{item.word}</div>
        ))}
      </div>
    </div>
  );
}

export default Game;
