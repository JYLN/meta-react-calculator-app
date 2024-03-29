import { useRef, useState } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult(result => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult(result => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult(result => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult(result => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = '';
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <main className='App'>
      <header>
        <h1>Simplest Working Calculator</h1>
      </header>
      <form>
        <p ref={resultRef}>{result}</p>
        <input pattern='[0-9]' ref={inputRef} type='number' placeholder='Type a number' />
        <article className='math-buttons'>
          <button className='btn-green' onClick={plus}>
            add
          </button>
          <button className='btn-pink' onClick={minus}>
            subtract
          </button>
          <button className='btn-orange' onClick={times}>
            multiply
          </button>
          <button className='btn-cyan' onClick={divide}>
            divide
          </button>
        </article>
        <article className='reset-buttons'>
          <button className='btn-input' onClick={resetInput}>
            reset input
          </button>
          <button className='btn-result' onClick={resetResult}>
            reset result
          </button>
        </article>
      </form>
    </main>
  );
}

export default App;
