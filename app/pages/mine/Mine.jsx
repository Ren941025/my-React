import React from 'react'
import { connect } from 'react-redux'
import { dispatch} from '../../redux/store'


class Mine extends React.Component {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
    }
    render () {
        return (
            <div>Mine</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Mine)
