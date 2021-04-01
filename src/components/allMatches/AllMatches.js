import Match from "../match/";
import { v4 as uuidv4 } from 'uuid';

const AllMatches = ({ matches, newRound, champion, players, winners }) => {

    
    return (
        champion === "" ? 
        <>
            <div>                
                {matches.map((match) => (
                    <>
                        <h2>Table {match.matchID + 1}</h2>
                        <Match 
                            key={uuidv4()} 
                            matchID={match.matchID} 
                            player1={match.player1} 
                            player2={match.player2}
                        />
                    </>
                ))}
            </div>
            {players.length === 2 ? null : 
                players.length / 2 === winners.length ? <button onClick={newRound}>Next Round</button> : 
                    "Lock in all games to proceed"}
        </> : 
        <div>
            <p>Tournament Champion is {champion}</p>
        </div>
    );
};

export default AllMatches;