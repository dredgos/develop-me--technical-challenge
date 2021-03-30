import { connect } from 'react-redux';
import Match from './Match'
import { addWinner } from '../../data/actions/State'



const mapStateToProps = (state) => {
    return {
              
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendWinner: (winner) => dispatch(addWinner(winner))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Match);