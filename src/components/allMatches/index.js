import { connect } from 'react-redux';
import AllMatches from './AllMatches'
import { createNewRound } from '../../data/actions/State'



const mapStateToProps = (state) => {
    return {
       matches: state.matches,
       champion: state.champion,
       players: state.players,
       winners: state.winners,        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newRound: () => dispatch(createNewRound())        
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(AllMatches);