import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState<number>(0);
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
        <button>Initialize Counter</button>
      </div>
      <p>0</p>
      <button>increment</button>
      <button>decrement</button>
    </div>
  );
}
