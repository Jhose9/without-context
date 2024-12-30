import React from "react";

function WordComponet({ word }: { word: string }) {
  return (
    <div className="bg-my-primary rounded-md mt-4 text-center p-2 text-xl">
      {word}
    </div>
  );
}

export default WordComponet;
