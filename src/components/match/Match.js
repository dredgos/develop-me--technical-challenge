import { useState } from 'react'

const Match = ({ player1, player2, sendWinner }) => {

   const [winner, setWinner] = useState("")
   const [confirmed, setConfirmed] = useState(false)

    const handleClick1 = () => setWinner(player1)
    const handleClick2 = () => setWinner(player2)
    const handleConfirm = (value) => {
        setConfirmed(true)
        sendWinner(winner)
    }

    return (        
        <div>
            <button value={player1} onClick={handleClick1}>{player1}</button>
            <button value={player2} onClick={handleClick2}>{player2}</button>
            <p>Winner: {winner}</p>
            {confirmed ? null : <button onClick={handleConfirm}>Lock In Winner</button>}
            
        </div>
    );
};

export default Match;