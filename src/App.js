//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ReactDom from "react-dom";
import Countdown from "react-countdown-now"


//
function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [Home, hScore] = useState(0);
  const [Away, aScore] = useState(0);
  const [timer, setTimer] = useState(0);
  

  setTimeout( () => {
    setTimer(timer + 1);
  },1000)
  
  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{Home}</div>
          </div>
          {/* <div className="timer"> <Countdown date={Date.now() + 300000}> </Countdown></div> */}
          <div className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{Away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => hScore(Home + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => hScore(Home + 3)}>Home Field Goal</button>
          <button className="reset_fieldGoal" onClick={() => hScore(0)}>Score reset</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => aScore(Away + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => aScore(Away + 3)}>Away Field Goal</button>
          <button className="reset_touchdown" onClick={() => aScore(0)}>Scorereset</button>
        </div>
        
        
      </section>
    </div>
  );
}

export default App;
