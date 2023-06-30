import { useReducer, useRef } from 'react'
import './App.css';

function App() {


  const calculator = (state, action) => {
    if (action.type === "buy") return { money: state.money - 10 };
    if (action.type === "sell") return { money: state.money + 10 };

  }
  const initialmoney = { money: 100 };
  const [state, despatch] = useReducer(calculator, initialmoney);
  const focusRef = useRef(null)
  const focusFun = () => {
    focusRef.current.focus();
  }



  return (
    <div className="App">
      <h1>Balance: {state.money}</h1>
      <button onClick={() => despatch({ type: 'buy' })}>BUY VEGITABLE</button>
      <button onClick={() => despatch({ type: 'sell' })}>SELL DISH</button>
      <input type='text' ref={focusRef}/>
      <button onClick={focusFun}>For focus on input field</button>
    </div>
  );
}

export default App;
