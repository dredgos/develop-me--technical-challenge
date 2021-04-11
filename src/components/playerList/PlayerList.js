const PlayerList = ({ players, startTourney }) => {
    return (
        <section>
            <h3>Current Players</h3>
            <ol>
                {players.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ol>
        </section>
    );
};

export default PlayerList;