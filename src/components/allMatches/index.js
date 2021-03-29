import { connect } from 'react-redux';
import AllMatches from './AllMatches'



const mapStateToProps = (state) => {
    return {
       matches: state.matches        
    }
}




export default connect(mapStateToProps)(AllMatches);