import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  descCounter,
  getCounter,
  incCounter,
  addTenToCounter,
} from "./features/counterSlice";

function App() {
  const counter = useSelector(getCounter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      Hello <p>{counter}</p>
      <button onClick={() => dispatch(incCounter())}>ADD</button>
      <button onClick={() => dispatch(descCounter())}>MINUS</button>
      <button onClick={() => dispatch(addTenToCounter(10))}>ADD 10</button>
    </div>
  );
}

export default App;
