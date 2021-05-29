import { useReducer, useState } from "react";
import "./styles.css";

import reducerFn from "./state/reducer";
import { initialState } from "./state/context";
import { ActionType } from "./state/actions";

export default function App() {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <div className="App">
      <h1>Reducer Example</h1>
      <div>
        <label>Start count:</label>
        <input
          type="number"
          onChange={(e) => setInput(parseInt(e.target.value))}
          value={input}
        />
        <br />
        <button
          onClick={() =>
            dispatch({ type: ActionType.INITCOUNTER, payload: input })
          }
        >
          Initialize Counter
        </button>
      </div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: ActionType.INCREMENT })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: ActionType.DECREMENT })}>
        decrement
      </button>
    </div>
  );
}
