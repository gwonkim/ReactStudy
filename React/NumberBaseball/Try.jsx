import React, { PureComponent, memo} from 'react';
/* hooks => pure, should X , memo  
pure 사용하면 렌더링 계속 됨.
*/

  /* tryInfo.try = 'hello';
  props 직접 값을 바꾸지 X
  부모가 바꿔야 하고 자식이 수정 X
  바꾸는 경우
  props를 state에 넣어서 

  const Try = memo( ({tryInfo}) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
    )
  });
  */

  const Try = memo( ({tryInfo}) =>{
    
    /* 
    props는 상속이라서 변경 X 
    어쩔 수 없는 경우
    state로 만들어서 state로 바꾸는 방법
      */
    const [result, setResult] = useState(tryInfo, result);
    const onClick = () => {
      setResult('1');
    };
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    )
  });
/* memo로 감싸줘서 사용 */

export default Try;