import { useState } from 'react'


const Match = ({ player1, player2, sendWinner, totalRounds, setNewChampion }) => {

   const [winner, setWinner] = useState("")
   const [confirmed, setConfirmed] = useState(false)

    const handleClick1 = () => setWinner(player1)
    const handleClick2 = () => setWinner(player2)
    const handleConfirm = (value) => {
        setConfirmed(true)
        sendWinner(winner)
    }
    const handleChampion = () => {
        setNewChampion(winner)
    }

    return (        

        <div>
            <button value={player1} onClick={handleClick1}>{player1}</button>
            <button value={player2} onClick={handleClick2}>{player2}</button>
            <p>Winner: {winner === "" ? "TBC" : winner}</p>
            {totalRounds === 1 ? <button onClick={handleChampion}>Crown the Champion</button> : 
                confirmed ? null : <button onClick={handleConfirm}>Lock in Winner</button>}            
        </div>

    );
};

export default Match;