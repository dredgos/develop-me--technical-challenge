import AllMatches from "../allMatches/";

const TournamentView = ({ resetTournament }) => {
    return (
        <div>
            <AllMatches />
            <button onClick={resetTournament}>Start Again</button>
        </div>
    );
};

export default TournamentView;