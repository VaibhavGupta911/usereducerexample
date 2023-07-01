import { useReducer, useRef ,useState} from 'react'
import './App.css';
import useConsoleLog from "./useConsoleLog";
function App() {


  const calculator = (state, action) => {
    if (action.type === "buy") return { money: state.money - 10 };
    if (action.type === "sell") return { money: state.money + 10 };

  }
  const initialmoney = { money: 100 };
  const [state, despatch] = useReducer(calculator, initialmoney);

  ////////////////////////////
  const focusRef = useRef(null)
  const focusFun = () => {
    focusRef.current.focus();
  }

///////////////////
const [count,setCount]=useState(0);
useConsoleLog(count)
const pLus=()=>setCount(preCount=>preCount+1);


  return (
    <div className="App">
      {/*useREDUCER Example */}
      <h1>Balance: {state.money}</h1>
      <button onClick={() => despatch({ type: 'buy' })}>BUY VEGITABLE</button>
      <button onClick={() => despatch({ type: 'sell' })}>SELL DISH</button>

      {/*useREF Example */}
      <input type='text' ref={focusRef}/>
      <button onClick={focusFun}>For focus on input field</button>

      {/*CUSTOM HOOK Example */}
      <h1>Count: {count}</h1>
      <button onClick={pLus}>Plus</button>
    </div>
  );
}

export default App;
