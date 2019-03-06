import React from "react";
import "./App.css";

import SharedComponent, { useSharedValue } from "shared";

function App() {
  const [count, setCount] = React.useState(0);
  const shared = useSharedValue();

  return (
    <div className="App">
      <header>
        <SharedComponent title={"Shared Component!"} />
      </header>
      <div>
        <label>Shared value => {shared}</label>
      </div>
      {/* <section>
        <div>
          <label>Count: {count}</label>
        </div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </section> */}
    </div>
  );
}

export default App;
