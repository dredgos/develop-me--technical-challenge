import { connect } from 'react-redux';
import Match from './Match'
import { addWinner, setChampion } from '../../data/actions/State'



const mapStateToProps = (state) => {
    return {
       totalRounds: state.totalRounds,
            
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendWinner: (winner) => dispatch(addWinner(winner)),
        setNewChampion: (winner) => dispatch(setChampion(winner))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Match);