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


    let buttonStyle = {
        background: "green",
    }

    return (
        <div>
            {!confirmed ? 
            <>
                <button style={p1 ? buttonStyle : null} value={player1} onClick={handleClick1}>{player1}</button>
                <button style={p2 ? buttonStyle : null} value={player2} onClick={handleClick2}>{player2}</button>
            </> : null}
            <p>Winner: {winner === "" ? "TBC" : winner}</p>
            {totalRounds === 1 ? <button onClick={handleChampion}>Crown the Champion</button> : 
                winner === "" ? null : 
                    confirmed ? null : 
                        <button onClick={handleConfirm}>Lock in Winner</button>}           
        </div>

    );
};

export default Match;