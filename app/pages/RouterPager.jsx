import React from 'react'
import store from '../redux/store'
import actions from '../redux/actions'

export default class RouterPager extends React.Component {
    constructor (props) {
        super(props)
        if(props.protected && !$.cookie('token')){
            store.dispatch(actions.setVars('backUrl', props.location.pathname))
            this.props.history.replace('/prected')
        }
    }
}



