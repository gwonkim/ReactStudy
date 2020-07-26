import React, { Component } from 'react';

/* render 성공적으로 시행될 때 -> componentDidMount()
컴포넌트가 제거될 때는 componentWillUnmount()

라이프 사이클 
 컴포넌트가 클라이언트 파일에서 불려와 렌더링 될 때
 렌더함수가 실행될 때 react가 jsx를 돔에 붙여주는데
 붙여주는 그 순간에 
 컴포넌트가 돔에 붙는 순간 특정한 동작 가능
 */

/* 
클래스의 경우
-> constructor/method -> render -> ref -> componentDidMount => 화면이 보여짐  
-> (setState/props 바꿜 때 -> shouldComponentUpdate -> render -> componentDidUpdate)

부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

*/

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};

const score = {
    가위: 1,
    바위: 0,
    보: -1,
};

const computerChoice = (imgCoord) => { //컴퓨터의 선택 
    return Object.entries(rspCoords).find(function (v) {
        return v[1] === imgCoord;
    })[0];
};

class RCP extends Component {
    state = {
        result: '',
        imgCoord: rspCoords.바위,
        score: 0,
    };


    interval;

    componentDidMount() { //컴포넌트 첫 렌더링 된 후, 비동기 요청을 많이 함.
        this.interval = setInterval(this.changeHand, 100);
    }

 /*    componentWillUpdate() { //리렌더링 후    setState나 props
    
    }  */

    componentWillUnmount() { //컴포넌트 제거되기 직전 DidMount를 제거, 비동기 요청 정리
        //부모에 의해 자신의 컴포넌트를 없애을 때
        clearInterval(this.interval);
    }

    changeHand = () => {
        const { imgCoord } = this.state;

        if (imgCoord === rspCoords.바위) {
            this.setState({
                imgCoord: rspCoords.가위,
            });
        } else if (imgCoord === rspCoords.가위) {
            this.setState({
                imgCoord: rspCoords.보,
            });
        } else if (imgCoord === rspCoords.보) {
            this.setState({
                imgCoord: rspCoords.바위,
            });
        }
    };


/* 고위 함수 - onClick 간략화 함수에 함수  = (choice) => () => { } */
    onClickBtn = (choice) => () => {
        const { imgCoord } = this.state;
        clearInterval(this.interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
            this.setState({
                result: '비겼습니다!',
            });
        } else if ([-1, 2].includes(diff)) {
            this.setState((prevState) => {
                return {
                    result: '이겼습니다!',
                    score: prevState.score + 1,
                };
            });
        } else {
            this.setState((prevState) => {
                return {
                    result: '졌습니다!',
                    score: prevState.score - 1,
                };
            });
        }
        setTimeout(() => {
            this.interval = setInterval(this.changeHand, 100);
        }, 1000);

    };

    render() {/* imgCoord = 이미지 좌표 */
        const { result, score, imgCoord } = this.state;
        return (
            <>
                <div id='computer' style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
                <div>
                    <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        );
    }
}

export default RCP;