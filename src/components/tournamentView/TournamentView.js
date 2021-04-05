import AllMatches from "../allMatches/";

const TournamentView = ({ resetTournament }) => {
    return (
        <>
            <AllMatches />
            <div className="button-position">
                <button className="btn btn-danger" onClick={resetTournament}>Start Again</button>
            </div>
        </>
    );
};

export default TournamentView;