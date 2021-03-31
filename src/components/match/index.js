import { connect } from 'react-redux';
import Match from './Match'
import { addWinner, setChampion } from '../../data/actions/State'



const mapStateToProps = (state) => {
    return {
       totalRounds: state.totalRounds       
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendWinner: (winner) => dispatch(addWinner(winner)),
        handleChampion: () => dispatch(setChampion())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Match);