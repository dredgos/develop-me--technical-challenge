import { useState } from "react";
import Button from "../button/Button"

const AddPlayer = ({ addNewPlayer, players, startTourney }) => {

    const [input, setInput] = useState("");
    const [inputError, setInputError] = useState(false);
    let [enoughPlayers, setEnoughPlayers] = useState(false);

    const powerOfTwo = (x) => {
        return x >= 4 && Math.log2(x) % 1 === 0;
    }

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
            setEnoughPlayers(powerOfTwo(players.length + 1));
            setInput("");             
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
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
            {enoughPlayers ? <button onClick={startTourney}>Let the Games Begin!</button> : "Add More Players"}
            {inputError ? <p>That player is already signed up</p> : null}
        </>
    );
};

export default AddPlayer;