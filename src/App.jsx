import React, { useState } from "react";
import Form from "./Form";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h3>Count: {count}</h3>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <Form />
    </div>
  );
}

export default App;