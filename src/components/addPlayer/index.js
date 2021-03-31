import { connect } from 'react-redux';
import { addPlayer } from '../../data/actions/State';
import AddPlayer from './AddPlayer';

const mapStateToProps = (state) => {
    return {
       players: state.players,
               
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addNewPlayer: (data) => dispatch(addPlayer(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);