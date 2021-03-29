import { connect } from 'react-redux';
import { addPlayer } from '../../data/actions/State';
import AddPlayer from './AddPlayer';



const mapDispatchToProps = (dispatch) => {
    return {
        addNewPlayer: (data) => dispatch(addPlayer(data))
    }
}

export default connect(null, mapDispatchToProps)(AddPlayer);