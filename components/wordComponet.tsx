import React from "react";

function WordComponet({ word }: { word: string }) {
  return (
    <div className="bg-my-primary rounded-sm mt-4 text-center">{word}</div>
  );
}

export default WordComponet;
