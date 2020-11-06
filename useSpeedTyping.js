import React, { useState, useEffect, useRef } from "react";

function useSpeedTyping() {

  let STARTING_TIME = 5;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [runTiming, setRunTiming] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const refContainer = useRef(null);

  const changeTime = (e) => {
    setText(e.target.value)
  };

  const calculateNumOfWords = (text) => {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  };

  console.log(text);

  const startGame = () => {
    setWordCount(0);
    setRunTiming(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    refContainer.current.disabled = false;
    refContainer.current.focus();
  };

  const endGame = () => {
    setRunTiming(false);
    setWordCount(calculateNumOfWords(text));
  };

  useEffect(() => {
    if (runTiming && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => {
          return time - 1;
        });
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, runTiming]);

  return [text, setText, timeRemaining, runTiming, wordCount, refContainer, changeTime, calculateNumOfWords, startGame, endGame, ];
}

export default useSpeedTyping;
