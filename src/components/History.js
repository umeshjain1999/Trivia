import React from 'react'
import {Link} from 'react-router-dom';

const History = () => {
    const games = JSON.parse(localStorage.getItem('games'));
    return (
        <div className = 'history'>
            <div className="prev-games">
                {
                    (games)?(
                        games.map((game,index)=>{
                            return( <div className="each-game" key= {index}>
                                <p>GAME {index + 1} : {game.timeCreation}</p>
                                <p>Name - {(game.name)?(game.name):'Unknown'}</p>
                                <p>
                                    <span>Q. Who is the best cricketer in the world?</span>
                                    <span className="ans"><span>Answer.</span> <span className = 'left'> {game.cricketer}</span></span>
                                </p>
                                <p>
                                    <span>Q. Who is the best cricketer in the world?</span>
                                    <span className="ans">
                                              <span>Answer.</span>
                                              <span className = 'history-colors left'>
                                                        {
                                                            game.colors.map((color,index)=>{
                                                            return( <span  key = {index}><li>{color},</li></span> )
                                                            })
                                                        }
                                              </span> 
                                    </span>
                                </p>  
                            </div> )
                        })
                    ):('')
                }
            </div>
            <Link to = '/' className = 'home-button'><button>home</button></Link>
        </div>
    )
}

export default History
