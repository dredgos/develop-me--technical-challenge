import { connect } from 'react-redux';
import PlayerList from './PlayerList'
import { prepareTournament } from '../../data/actions/State'


const mapStateToProps = (state) => {
    return {
        players: state.players        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startTourney: (data) => dispatch(prepareTournament(data))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);