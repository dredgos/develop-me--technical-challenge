import { useState } from "react";
import Button from "../button/Button"

const AddPlayer = ({ addNewPlayer }) => {

    const [playerName, setPlayerName] = useState("");

    const handlePlayerName = (e) => {
        setPlayerName(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewPlayer(playerName);        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newplayer">Add a Player</label>
            <input 
                type="text" 
                id="newplayer"
                onChange={handlePlayerName}
                value={playerName}
            />
            <Button buttonText="Sign them up" />
        </form>
    );
};

export default AddPlayer;