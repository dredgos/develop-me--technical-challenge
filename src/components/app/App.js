import GameSetup from '../gameSetup/GameSetup';
import Header from '../header/Header';
import TournamentView from '../tournamentView/';





function App({ tournamentStarted }) {
  return (
    <div className="container">
      <Header />
      {!tournamentStarted ? <GameSetup /> : <TournamentView />}
      

 
    </div>
  );
}

export default App;
