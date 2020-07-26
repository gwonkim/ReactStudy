import React, { Component } from 'react';

class Test extends Component {
    state = {
        conters : 0,
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.counter !== nextState.counter){
            return true;
        }
        return false;
    }

onClick = () => {
    this.setState( {} );
};

render() {
    console.log('렌더링', this.state);
    return ( <div>
        <button onClick = { this.onClick}>Click</button>
    </div>);
    }
}

export default Test;