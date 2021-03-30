import { useState } from "react";
import Match from "../match/";

const AllMatches = ({ matches }) => {

    
    return (
        <>
            <div>                
                {matches.map((match) => (
                    <>
                        <h2>Table {match.matchID + 1}</h2>
                        <Match 
                            key={match.matchID} 
                            matchID={match.matchID} 
                            player1={match.player1} 
                            player2={match.player2}
                        />
                    </>
                ))}
            </div>
            <button>New Round</button>
        </>
    );
};

export default AllMatches;