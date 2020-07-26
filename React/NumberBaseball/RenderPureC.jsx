import React, { PureComponent } from 'react';

/* pureCompnent  */
class Test extends PureComponent {
    state = {
        conters : 0,
        string : 'hello',
        number : 1,
        boolean : true,
         /* 객체나 배열일 경우 참조가 있는 경우 어려워 함 */
        object : {},
        array :[],
    };

/*     shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true, false;
    } */

onClick = () => {

    /* const array = this.state.array;
    array.push(1); 이렇게 하면 변경된 사항 구별 X */
    this.setState( {
        araay : [...this.state.array, 1], /* <= 이렇게 할 것 */
        /* 새로운 것이 아닌이상 하지 말 것
         배열안 객체 안 배열 안 X  */
    } );
};

render() {
    console.log('렌더링', this.state);
    return ( <div>
        <button onClick = { this.onClick}>Click</button>
    </div>);
    }
}

export default Test;
