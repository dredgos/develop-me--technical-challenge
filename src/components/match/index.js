import { connect } from 'react-redux';
import Match from './Match'



const mapStateToProps = (state) => {
    return {
       matches: state.matches        
    }
}




export default connect(mapStateToProps)(Match);