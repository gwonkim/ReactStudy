const React = require('react');
const { useStaten useRef } = require('react');

const WordRelay = () => {
  const [word, setWord] = useState('김지원');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);


onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
        setResult('딩동댕');
        setWord(value);
        value('');
        inputRef.current.focus;
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus;

    }
  };

  const onChangeInput = (e) => {
    this.setValue({e.target.value });
  };
//render x
    return ( //this 사용 x
      <>
        <div>{word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={inputRef} value={value} onChange={this.onChangeInput} />
          <button>클릭!</button>
        </form>
        <div>{result}</div>
      </>
    );
}
module.exports = WordRelay;
