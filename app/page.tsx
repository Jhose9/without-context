"use client";
import HowToPlay from "@/components/howToPlay";
import { Button } from "@/components/ui/button";
import GameMode from "@/components/gameMode";
import TitleWithOptions from "@/components/titleWithOptions";
import QuestionsAnswers from "@/components/questionsAnswers";
import { useEffect, useState } from "react";
import words from "@/db/words.json";
import Game from "@/components/game";
import AboutTheWin from "@/components/aboutWin";

export default function Home() {
  const [initGame, setInitGame] = useState(false);
  const [winWord, setWinWord] = useState("");
  const [idCount, setIdCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  //number of attempts
  const [attempts, setAttempts] = useState(0);
  const [numberHints, setNumberHints] = useState(0);
  const [win, setWin] = useState(false);
  const [listWords, setListWords] = useState<{ id: number; word: string }[]>(
    []
  );

  /**
   * Initializes the game with default settings.
   * - Sets the game state as "in progress" in localStorage.
   * - Defines the game mode as "normal" and saves it in localStorage.
   * - Randomly selects a word for the player to guess and saves it in localStorage.
   * - Updates the state to indicate the game has started.
   * - Reloads the page to reflect the initialization.
   */
  const playGame = () => {
    //storage donde dice cuando el juego inicio
    localStorage.setItem("initGame", "true");

    // storage donde dice que modo de juego es
    localStorage.setItem("modegame", "normal");
    // storage donde dice si ya ganaste
    localStorage.setItem("win", "false");

    // storage donde dice el numero de pistas que tuviste en la partida
    localStorage.setItem("Hint", "0");

    setInitGame(true);
    const randomGame =
      words.games[Math.floor(Math.random() * words.games.length)];
    console.log(randomGame.words);
    localStorage.setItem("word", `${randomGame.words}`);
  };

  /**
   * Handles the "Enter" key pressed by the user.
   * - Converts the entered word to lowercase.
   * - Checks if the word is already in the list
   * - If it matches the winning word.
   * - If the word is not in the list and it's not the winning word, adds it to the list with a unique ID.
   * - Updates the localStorage with the new list of words.
   * - Clears the input field after processing the word.
   */
  const handleKeyEnter = (event: any) => {
    if (event.key != "Enter") return;

    const { value } = event.target;
    const word = value.toLowerCase();

    if (listWords.some((item) => item.word === word)) {
      setInputValue(""); // Clear input if word is duplicated
      return;
    }

    // Check if the word matches the winning word
    if (word === winWord) {
      console.log("You win!");
      setWin(true);
      setAttempts(listWords.length);
      // acá nos dice si el juego todavia esta en cuerso
      localStorage.setItem("initGame", "false");
      localStorage.setItem("win", "true");
      addWordToList(word);
      return;
    } 

    // Add the word to the list and update localStorage
    if (word !== "") addWordToList(word);
    setInputValue(""); // Clear the input field
  };

  const addWordToList = (word: string) => {
    setListWords((prevList) => {
      const updateList = [...prevList, { id: idCount, word }];
      // Update localStorage with the new list
      localStorage.setItem("myArray", JSON.stringify(updateList));
      localStorage.setItem("idWord", `${idCount}`);
      return updateList;
    });
    // Increment the ID counter
    setIdCount((prevId) => prevId + 1);
  };

  /**
   * Loads game data from localStorage when the component starts.
   * - Checks if the game has started and updates `initGame`.
   * - Gets the word to guess and sets it in `word`.
   * - Retrieves the player's previous guesses and updates `listWords`.
   */
  useEffect(() => {
    const hints = localStorage.getItem("Hint");
    if (hints) setNumberHints(parseInt(hints));
    // dice si esta en la vista de vitoria
    const winLocal = localStorage.getItem("win") === "true";
    setWin(winLocal);
    // Load game initialization state
    const gameInit = localStorage.getItem("initGame") === "true";
    setInitGame(gameInit);

    // Load the word to guess
    const wordToGuess = localStorage.getItem("word");
    if (wordToGuess) {
      setWinWord(wordToGuess);
    }

    // Load the current ID count
    const storedIdCount = localStorage.getItem("idWord");
    if (storedIdCount) {
      setIdCount(parseInt(storedIdCount) + 1);
    }

    // Load the list of player's previous guesses
    const storedWords = JSON.parse(localStorage.getItem("myArray") || "[]");
    setListWords(storedWords);
  }, [initGame, win]);

  if (win) {
    return (
      <>
        <TitleWithOptions win={win} />
        <AboutTheWin
          hints={numberHints}
          numberWord={attempts}
          wordOfTheWin={winWord}
          listWord={listWords}
        />
      </>
    );
  }

  if (!initGame && !win) {
    return (
      <>
        <TitleWithOptions />
        <div className="my-4 space-y-4">
          <div className="flex justify-center">
            <Button
              onClick={playGame}
              className="text-2xl w-3/5 md:w-4/12 xl:w-2/12"
            >
              Play
            </Button>
          </div>
          <GameMode />
        </div>
        <HowToPlay />
        <QuestionsAnswers />
      </>
    );
  }

  if (initGame && !win) {
    return (
      <>
        <TitleWithOptions initGame={initGame} />
        <Game
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleKeyEnter={handleKeyEnter}
          listWords={listWords}
        />
        <HowToPlay />
        <QuestionsAnswers />
      </>
    );
  }
}
