import { useState } from "react";
import Button from "../button/Button"

const AddPlayer = ({ addNewPlayer, players }) => {

    const [input, setInput] = useState("");
    const [inputError, setInputError] = useState(false)

    const handlePlayerName = (e) => {
        setInput(e.currentTarget.value);
        setInputError(false);
    }

    const handleSubmit = (e) => {
        if (players.includes(input)) {
            e.preventDefault()
            setInputError(true);
        } else {
            e.preventDefault();
            addNewPlayer(input);
            setInput("");             
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="newplayer">Add a Player</label>
            <input
                required 
                type="text" 
                id="newplayer"
                onChange={handlePlayerName}
                value={input}
            />
            <Button buttonText="Sign them up" />
        </form>
        {inputError ? <p>That player is already signed up</p> : null}
        </>
    );
};

export default AddPlayer;