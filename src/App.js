import { useEffect, useReducer, useRef, useState } from 'react'
import './App.css';
import useConsoleLog from "./useConsoleLog";
function App() {

  //usereducer
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

  ///custom hook
  const [count, setCount] = useState(0);
  useConsoleLog(count)
  const pLus = () => setCount(preCount => preCount + 1);

  ////Custom Hook 
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  function usePrevious(val) {
    const ref = useRef()
    useEffect(
      () => { ref.current = val },{/*We are making ref as useref 
                                  then assining var as its current value
                                 then retuning ref current to prevday
                                also useeffect will run when var change
                              */}
      [val]
    )
    return ref.current
  }
  return (
    <div className="App">
      {/*useREDUCER Example */}
      <h1>Balance: {state.money}</h1>
      <button onClick={() => despatch({ type: 'buy' })}>BUY VEGITABLE</button>
      <button onClick={() => despatch({ type: 'sell' })}>SELL DISH</button>

      {/*useREF Example */}
      <input type='text' ref={focusRef} />
      <button onClick={focusFun}>For focus on input field</button>

      {/*CUSTOM HOOK Example */}
      <h1>Count: {count}</h1>
      <button onClick={pLus}>Plus</button>


      {/*CUSTOM HOOK Example */}
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}

export default App;
