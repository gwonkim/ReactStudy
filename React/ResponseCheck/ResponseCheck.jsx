/* setTimeout - class*/

import React, { Component } from 'react';

class ResponseCheck extends Component {
    state = {
        state: 'waiting',
        message: '클릭해서 시작하세요',
        result: [],
    };

    timeout;  // === this.timeout
    startTime;
    endTime;

    onClickScreen = () => {
        const { state, message, result } = this.state;
        if (state === 'waiting') {
            this.setState({
                state: 'ready',
                message: 'green이 되면 클릭하세요.',
            });
            setTimeout(() => {
                this.setState({
                    state: 'now',
                    message: '지금 클릭!!',
                });
                this.startTime = new Date();
            }, Math.floor(Math.random() * 1000) + 2000); //2~3초 랜덤
        } else if (state === 'ready') { // 성급하게 클릭
            clearTimeout(this.timeout); //setTimeout 제거
            this.setState({
                state: 'waiting',
                message: '너무 성급하세요... 초록을 클릭하세요'
            });
        } else if (state === 'now') { //반응상태 체크
            this.endTime = new Date();
            this.setState((prevState) => {
                return {
                    state: 'waiting',
                    message: '클릭해서 시작하세요!',
                    result: [...prevState.result, this.endTime - this.startTime],
                };
            });
        }

    };

    onReset = () => {
        this.setState( {
            result : [],
        });
    };

    renderAverage = () => {
        const { result } = this.state;
        return result.length === 0
            ? null /* jsx : null === 태그가 없는 것 */
            : 
            <> 
            <div>평균시간 :
                    {result.reduce((a, c) => a + c)
                    /
                    result.length}ms
            </div>
            <button onClick = {this.onReset}>Reset</button>
            </>
    };

    render() {
        const { state, message } = this.state;
        return (
            <>
                <div
                    id="screen"
                    className={state}
                    onClick={this.onClickScreen}
                >
                    {message}
                </div>
                {/* 조건부연산자  조건 ? A : B  or !== &&*/}
                {/*  {
                this.state.result.length === 0
                ? null :
                <div>평균시간 : 
                    {this.state.result.reduce( 
                        (a,c) => a+c)
                         / 
                         this.state.result.length}ms
                </div>
            } */}

                {this.renderAverage()}
            </>
        )
    }
}

export default ResponseCheck;