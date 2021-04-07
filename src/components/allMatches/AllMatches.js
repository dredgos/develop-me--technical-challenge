import Match from "../match/";

const AllMatches = ({ matches, newRound, champion, players, winners, totalRounds }) => {

    
    return (
        champion === "" ? 
        <>
            <div className={totalRounds === 1 ? "match_display_single" : "match_display"}>                
                {matches.map((match) => (
                    <div className="single_match">
                        <h2>Table {match.matchID + 1}</h2>
                        <Match 
                            key={`${match.player1}V${match.player2}`} 
                            matchID={match.matchID} 
                            player1={match.player1} 
                            player2={match.player2}
                        />
                    </div>
                ))}
            </div>
            <div>
            {players.length === 2 ? null : 
                players.length / 2 === winners.length ? <div className="button-position"><button className="btn btn-success" onClick={newRound}>Next Round</button></div> : 
                    <p className="lockin">Lock in all games to proceed</p>}</div>
        </> : 
        <div>
            <div class="pyro">
                <div class="before"></div>
                <div class="after"></div>
            </div>
            <div className="champion">
                <p className="blink">Tournament Champion is {champion}</p>
            </div>
        </div>
    );
};

export default AllMatches;