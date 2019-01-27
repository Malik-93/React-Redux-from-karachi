import React, { Component } from 'react';
import { updateUser } from '../Redux/Actions/action';
import { connect } from 'react-redux'
class Judge extends Component {

    testFunc = () => {
        return console.log('TestFunc***', this.props);
    }

componentDidMount() {
    console.log( 'Judge**componentDidMount**' + this.props.updateUser({name: 'Mudassir Malik', age: 22}))
    this.props.updateUser({name: 'Mudassir Malik', age: 22})
}
    render() {
        return (
            <div className="judge">
            {console.log('Judge return***', this.props.user)}
            <button onClick={this.testFunc}>Check It</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.reducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) =>  dispatch( updateUser(user) ) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Judge);