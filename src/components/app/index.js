import { connect } from 'react-redux';
import App from './App'


const mapStateToProps = (state) => {
    return {
        tournamentStarted: state.tournamentStarted      
    }
}





export default connect(mapStateToProps)(App);