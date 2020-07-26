const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => { //setState와 ref를 사용하지 않는 컴포넌트는 함수 컴포넌트로 만들어 쓰는 것
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9)); //전용 setState 
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9)); //꼭 안에 있어야 함
    const [value, setValue] = useState(''); //use가 hooks
    const [result, setResult] = useState(''); //[state, setState]
    const inputEl = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult('정답');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputEl.current.focus();
        } else {
            setResult('땡');
            setValue('');
            inputEl.current.focus();
        }
    };

    return (
        <>
            <div>{first} X {second}는?</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button>입력!</button>
            </form>
            <div id="result">{result}</div>
        </>
    );
};

module.export = GuGuDan;