import GameSetup from '../gameSetup/GameSetup';
import Header from '../header/Header';
import HeaderStyle from '../headerStyle/HeaderStyle';
import TournamentView from '../tournamentView/';





function App({ tournamentStarted }) {
  return (
      <>
      <HeaderStyle />
      <div className="container">
        <Header />
        {!tournamentStarted ? <GameSetup /> : <TournamentView />}
      

 
      </div>
      </>
  );
}

export default App;
