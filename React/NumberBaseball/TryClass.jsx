  
import React, { PureComponent } from 'react';

class Try extends PureComponent {
  /* 
  class에서 props를 바꾸고 싶을 때
  함수 사용해서
  state = {
    result : this.props.result,
    try : this.props.try,
  };
  }

  */
  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}
/* props나 state가 바뀌었는지 알아서 확인... */
/*  */
export default Try;


                {/* <b>{this.props.value.fruit}</b> - {this.props.index} {/* props로 전달 */}
                {/*<div>컨텐츠1</div> 
                <div>컨텐츠2</div> 
                <div>컨텐츠3</div> 
                <div>컨텐츠4</div> 
                <div>컨텐츠5</div>  */}
