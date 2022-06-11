import React, { useState } from 'react'
import Profiles from './profiles';
import { Leaderboard } from './database';

export default function Board() {

    const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
     
    setPeriod(e.target.dataset.id)
  }

  return (
    <div className="board">
        <h1 className='leaderboard'>Leaderboard</h1>

        <div className="duration">
            <button onClick={handleClick} data-id='3'>Top 3</button>
            <button onClick={handleClick} data-id='5'>Top 5</button>
            <button onClick={handleClick} data-id='10'>Top 10</button>
            <button onClick={handleClick} data-id='0'>All</button>
        </div>

        <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>

    </div>
  )
}



function between(data, between){
    
    let filter = data.filter((member, index) => {
        if (between == 0) return member;
        if (index < between ) return member;
        return null;
    });

    // sort with asending order
    return filter.sort((a, b) => {
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })

}
