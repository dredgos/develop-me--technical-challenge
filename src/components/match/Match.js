import { useState } from 'react'


const Match = ({ player1, player2, sendWinner, totalRounds, setNewChampion, matchID }) => {

   const [winner, setWinner] = useState("");
   const [confirmed, setConfirmed] = useState(false);
   const [p1, setP1] = useState(false);
   const [p2, setP2] = useState(false);

    const handleClick1 = () => {
        setWinner(player1);
        setP1(true);
        setP2(false);
    }

    const handleClick2 = () => {
        setWinner(player2);
        setP1(false);
        setP2(true);
    }

    const handleConfirm = () => {
        setConfirmed(true)
        sendWinner(data)
    }
    const handleChampion = () => {
        setNewChampion(winner)
    }

    let data = {
        winner: winner,
        id: matchID + 1
    }



    return (
        <section className="individual_matches">
            <div className="table">
                <div className="table__section table__section__a"></div>
                <div className="table__section table__section__b"></div>
                <div className="table__section table__section__a"></div>
                <div className="table__section table__section__b"></div>
            </div>
            {!confirmed ? 
            <div>
                <button className={p1 ? "btn btn-success" : " btn btn-secondary"} value={player1} onClick={handleClick1}>{player1}</button>
                <button className={p2 ? "btn btn-success" : " btn btn-secondary"} value={player2} onClick={handleClick2}>{player2}</button>
            </div> : null}
            <p>Winner: {winner === "" ? "TBC" : winner}</p>
            {totalRounds === 1 ? <button onClick={handleChampion}>Crown the Champion</button> : 
                winner === "" ? null : 
                    confirmed ? null : 
                        <button className="btn btn-success"onClick={handleConfirm}>Lock in Winner</button>}           
        </section>

    );
};

export default Match;