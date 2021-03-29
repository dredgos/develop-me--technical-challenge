const PlayerList = ({ players, shufflePlayerList }) => {
    return (
        <section>
            <h3>Current Players</h3>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
            <button onClick={shufflePlayerList}>Let the Games Begin!</button>
        </section>
    );
};

export default PlayerList;