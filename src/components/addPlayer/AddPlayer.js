import { useState } from "react";

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
            <section>
                <h2>Party Rules:</h2>
                <p>Must have a minimum of four players</p>
                <p>Number of players must be a power of two (4, 8, 16, 32 etc...)</p>
            </section>
            <form className="form-group" onSubmit={handleSubmit} >
                <label className="form-label" htmlFor="newplayer">Add a Player</label>
                <input
                    required 
                    type="text" 
                    id="newplayer"
                    onChange={handlePlayerName}
                    value={input}
                    className="form-control"
                />
                <button className="btn ">Sign Them Up</button>
            </form>
            {enoughPlayers ? <button className="btn " onClick={startTourney}>Let the Games Begin!</button> : <p className="warning">Add More Players to Continue</p>}
            {inputError ? <p className="warning">That player is already signed up</p> : null}
        </>
    );
};

export default AddPlayer;
