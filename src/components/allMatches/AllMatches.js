import Match from "../match/";

const AllMatches = ({ matches, newRound, champion }) => {

    
    return (
        champion === "" ? 
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
            <button onClick={newRound}>Next Round</button>
        </> : 
        <div>
            <p>Tournament Champion is {champion}</p>
        </div>
    );
};

export default AllMatches;