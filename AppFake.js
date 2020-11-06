/**
 * Challenge: build the basic structure of our game
 *
 * 1. <h1> title at the top
 * 2. <textarea> for the box to type in
 *      (tip: React normalizes <textarea /> to be more like <input />,
 *      so it can be used as a self-closing element and uses the `value` property
 *      to set its contents)
 * 3. <h4> ti display the amount of time remaining
 * 4. <button> to start the game
 * 5. Another <h1> to display the word count
 */

//--------------------------2----------------------
/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 *
 * https://scrimba.com/p/p7P5Hd/cW8Jdfy
 */
//------------------------------------3--------------------------------------
/**
 * Challenge:
 *
 * Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 */
//-------------------4------------------------------------
/**
 * Challenge:
 *
 * 1. Create state to hold the current value of the countdown timer.
 *    Display this time in the "Time Remaining" header
 */

//---------------------5---------------------------
/**
 * Challenge:
 *
 * 1. Set up an effect that runs every time the `timeRemaining` changes
 *    The effect should wait 1 second, then decrement the `timeRemaining` by 1
 *
 *    Hint: use `setTimeout` instead of `setInterval`. This will help you avoid
 *    a lot of extra work.
 *
 *    Warning: there will be a bug in this, but we'll tackle that next
 */

//-----------------------------------6-------------------------------------------
/**
 * Challenge:
 *
 * Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not)
 */
//-------------------------7------------------------------
/**
 * Challenge:
 *
 * When the timer reaches 0, count the number of words the user typed in
 * and display it in the "Word count" section
 */
//-------------------------8-------------------------
/**
 * Challenge:
 *
 * Make the input box focus (DOM elements have a method called .focus())
 * immediately when the game starts
 */
import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [wordCount, setWordCount] = useState(0);
  const [startTiming, setStartTiming] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const calculateNumOfWords = (text) => {
    const words = text.split(" ");
    console.log(words.length);
  };

  const startTimer = () => {
    setStartTiming(true);
  };

  const endTiming = () => {
    setStartTiming(false);
    setWordCount(calculateNumOfWords(text));
  };

  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endTiming();
    }
  }, [timeRemaining]);

  console.log(text);

  return (
    <main>
      <h1>Build the basic structure of our game</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startTimer}>Start game</button>
      <h1>Words count: </h1>
    </main>
  );
}

export default App;
