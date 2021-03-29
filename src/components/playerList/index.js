import { connect } from 'react-redux';
import PlayerList from './PlayerList'
import { shufflePlayers } from '../../data/actions/State'


const mapStateToProps = (state) => {
    return {
        players: state.players        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        shufflePlayerList: (data) => dispatch(shufflePlayers(data))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);