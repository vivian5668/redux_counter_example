
import React from 'react';
import { connect } from 'react-redux';

// just a functional component

function Counter(props) {
    return (
        <div>
            <h1>I am a counter!</h1>
            <p>Count: {props.count}</p>
            <button onClick={props.mapDispatchToProps}>increment</button>
        </div>
    )
}

// we need a functional to pass state to props
function mapStateToProps(state) {
    // take count from state and put it into a property called count
    console.log('mapstateToProps', state);
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementClick: () => {
            console.log('clicking');
            //create an action object and dispatch it
            const action = { type: 'INCREMENT' };
            dispatch(action);
        }
    }
}

//this will create a new component that wraps our copoment that glues everything
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
