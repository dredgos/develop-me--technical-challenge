import Button from "../button/Button"

const PlayerInput = () => {
    return (
        <form>
            <label htmlFor="newplayer">Add a Player</label>
            <input type="text" id="newplayer"/>
            <Button buttonText="Sign them up" />
        </form>
    );
};

export default PlayerInput;