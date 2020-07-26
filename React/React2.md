React 정리(ing)
===========
State&Lifecycle
-----------

# State and Lifecycle

State는 props와 유사하지만, 비공개이며 컴포넌트에 의해 완전히 제어됩니다.

## 함수에서 클래스로 변환
1. 클래스로 변경
```
class Clock extends React.Component {
    render() {
        <!-- props -> this.props로 변경 -->
    }
}
```
2. State 추가
1) props에서 state로 이동
    props -> state로 변경

2) 초기 this.state를 지정하는 class constructor를 추가
클래스 컴포넌트는 항상 props로 기본 constructor를 호출해야 함.

3) <Clock /> 요소에서 date prop을 삭제

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

***

## class - 생명주기 메소드

componentDidMount() 메서드 
-> 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행됩니다. 
ex) 이 장소가 타이머를 설정하기에 좋은 장소입니다.

componentWillUnmount() 
-> 제거 
ex) 생명주기 메서드 안에 있는 타이머를 분해


컴포넌트 로컬 state를 업데이트하기 위해 this.setState()를 사용

## setState( state 수정) 
this.state를 지정할 수 있는 유일한 공간은 바로 constructor

## 직접 State 수정 x

## State 업데이트는 비동기적일 수도 있다. 
- React는 성능을 위해 여러 setState() 호출을 단일 업데이트로 한꺼번에 처리 가능
- 함수(일반이나 화살표 함수 이용해서 하나로 묶음)

```
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

## State 업데이트는 병합됨.
setState()를 호출할 때 React는 제공한 객체를 현재 state로 병합

***