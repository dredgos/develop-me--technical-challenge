import Match from "../match/";

const AllMatches = ({ matches, newRound }) => {

    
    return (
        <>
            <div>                
                {matches.map((match) => (
                    <>
                        <h2>Table {match.matchID + 1}</h2>
                        <Match 
                            key={`${match.player1}V${match.player2}`} 
                            matchID={match.matchID} 
                            player1={match.player1} 
                            player2={match.player2}
                        />
                    </>
                ))}
            </div>
            <button onClick={newRound}>New Round</button>
        </>
    );
};

export default AllMatches;