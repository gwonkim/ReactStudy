React 정리(ing)
===========
react + js + ...
-----------

*********
7/12R

# 엘리먼트

##ReactDOM.render()
react 엘리먼트를 루트 DOM 노드에 렌더링하려면 둘 다 
ReactDOM.render()로 전달

```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

    => Hello, world


## 렌더링 된 엘리먼트 업데이트 
React 엘리먼트 = 불변객체

엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경 불가 
엘리먼트는 영화에서 하나의 프레임과 같이 특정 시점의 UI를 보여줍니다.

```
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```
***
# Component

## 컴포넌트 작성
컴포넌트를 정의하는 가장 간단한 방법은 JavaScript 함수를 작성하는 것

함수 컴포넌트 or 클래스 컴포넌트
function / class



## 컴포넌트 렌더링 

React 엘리먼트는 사용자 정의 컴포넌트로도 가능
React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX 어트리뷰트와 자식을 해당 컴포넌트에 단일 객체로 전달합니다. 이 객체를 “props”

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

주의 : 컴포넌트 이름은 항상 대문자로 시작
소문자 시작 컴포넌트 -> DOM 태그로 처리
    ex)
    <div />
    <Welcome />

## 컴포넌트 합성
컴포넌트 자신의 출력에 다른 컴포넌트 참조 가능

## 컴포넌트 추출
하나의 컴포넌트를 여러 개의 작은 컴포넌트로 조각내기

***

# Props  (props는 속성을 나타내는 데이터)

## Props는 읽기 전용
함수 컴포넌트나 클래스 컴포넌트 모두 컴포넌트의 자체 props를 수정 X

    모든 React 컴포넌트는 
    자신의 props를 다룰 때 
    반드시 
    순수 함수처럼 동작해야 한다.

변경은 state 

***
***
