import { connect } from 'react-redux';
import { reset } from '../../data/actions/State';
import TournamentView from './TournamentView';


const mapStateToProps = (state) => {
    return {
        tournamentStarted: state.tournamentStarted        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetTournament: () => dispatch(reset())
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(TournamentView);