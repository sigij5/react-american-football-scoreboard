//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App(props) {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const homeName = props.homeTeam;
  const awayName = props.awayTeam;
  const [time, setTime] = useState('0:00');
  const [homePasses, setHomePasses] = useState(0)
  const [awayPasses, setAwayPasses] = useState(0)

  return (
    
    <div className="container">
      <section className="scoreboard">
{/* 
        <TopRow homeName = {props.homeTeam} awayName = {props.awayTeam}/> */}
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeName}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
      <div className="timer">{time}</div>
          <div className="away">
            <h2 className="away__name">{awayName}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={()=>{setHomeScore(homeScore + 1)}} className="homeButtons__touchdown">Home Goal</button>
          <button onClick={()=>{setHomePasses(homePasses + 1)}} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={()=>{setAwayScore(awayScore + 1)}} className="awayButtons__touchdown">Away Goal</button>
          <button onClick={()=>{setAwayPasses(awayPasses + 1)}} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>(
    </div>
  );
}

// function score(team, points){
//   const [homeScore, setHomeScore] = useState(0);
//   const [awayScore, setAwayScore] = useState(0);

//   if(team === 'home'){
//    setHomeScore(homeScore + points)
//   }else setAwayScore(awayScore + points)

// }

// function TopRow(props){


//   return(
// <div className="topRow">
// <div className="home">
//   <h2 className="home__name">{props.homeName}</h2>

//   {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
//   <div className="home__score">{props.homeScore}</div>
// </div>
// <div className="timer">0:03</div>
// <div className="away">
//   <h2 className="away__name">{props.awayName}</h2>
//   <div className="away__score">{props.awayScore}</div>
// </div>
// </div>
// )
// }

export default App;
