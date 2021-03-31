import { useState } from "react";
import Button from "../button/Button"

const AddPlayer = ({ addNewPlayer }) => {

    const [input, setInput] = useState("");

    const handlePlayerName = (e) => {
        setInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewPlayer(input);
        setInput("")        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newplayer">Add a Player</label>
            <input 
                type="text" 
                id="newplayer"
                onChange={handlePlayerName}
                value={input}
            />
            <Button buttonText="Sign them up" />
        </form>
    );
};

export default AddPlayer;