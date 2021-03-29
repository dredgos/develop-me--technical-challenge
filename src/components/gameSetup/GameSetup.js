import AddPlayer from '../addPlayer/'
import PlayerList from '../playerList';
import SetupMessage from '../setupMessage/SetupMessage';

const GameSetup = () => {
    return (
        <>
            <AddPlayer />
            <PlayerList />
            <SetupMessage />
        </>
    );
};

export default GameSetup;