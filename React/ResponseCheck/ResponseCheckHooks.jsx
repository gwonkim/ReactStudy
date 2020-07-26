/* setTimeout - hooks*/

import React, { useState, useRef } from 'react';

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);
    /* 
        state => return 부분 다시 렌더링
        ref => return 부분 렌더링 X
        화면에 영향을 미치지 않고 싶을 때 ref 사용
    */
    /* this를 Ref로 표현 */
    const timeOut = useRef(null);
    const startTime = useRef();
    const endTime = useRef(); //ref 안의 current

    const onClickScreen = () => {
        if (state === 'waiting') {
            setState('ready');
            setMessage('초록이 되면 클릭하세요!');
            timeOut.current = setTimeout( () => {
                setState('now');
                setMessage('지금 클릭!!');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000); //2~3초 랜덤
        } else if (state === 'ready') { // 성급하게 클릭
            clearTimeout(timeout.current); //setTimeout 제거
            setState('waiting');
            setMessage: ('너무 성급하세요... 초록을 클릭하세요');

        } else if (state === 'now') { //반응상태 체크
            endTime.cuurent = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요!');
            setResult((prevState) => { /* prevState는 함수로 만들어서 */
                return [...prevResult, endTime.current - startTime.current];
            });
        }
    };
    const onReset = () => {
        setState({
            result: [],
        });
    }

    const renderAverage = () => {
        const { result } = state;
        return result.length === 0
            ? null /* jsx : null === 태그가 없는 것 */
            :
            <>
                <div>평균시간 :
                    {result.reduce((a, c) => a + c)
                        /
                        result.length}ms
            </div>
                <button onClick={onReset}>Reset</button>
            </>
    }

    return (
        <>
            <div
                id="screen"
                className={state}
                onClick={onClickScreen}
            >
                {message}
            </div>
            {renderAverage()}

            {/* 
            jsx에서는 사용불가..
            if 함수 안에서는 사용 가능 
            즉시 실행 함수를 만들 것
            
            */}
         {/*  즉시 실행 함수   
                {( () => {
                if (result.length === 0) {
                    return null;
                } else {
                return 
                <>
                <div>평균시간 :
                        {result.reduce((a, c) => a + c)
                            /
                            result.length}ms
                </div>
                <button onClick={onReset}>Reset</button>
                </>
                }
            })()} 
        */}
        </>
    );
}

export default ResponseCheck;