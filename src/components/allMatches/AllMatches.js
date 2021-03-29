import Match from "../match/";

const AllMatches = ({ matches }) => {

    return (
        <div>
            
            {matches.map((match) => (
                <>
                    <h2>Table {match.matchID}</h2>
                    <Match key={match.matchID} player1={match.player1} player2={match.player2} />
                </>
            ))}
        </div>
    );
};

export default AllMatches;