const PlayerList = ({ players }) => {
    return (
        <section>
            <h3>Current Players</h3>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </section>
    );
};

export default PlayerList;