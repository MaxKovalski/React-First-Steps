import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p style={{ fontSize: 10 + count + "em " }}>{count}</p>
    </div>
  );
}
export default Counter;
