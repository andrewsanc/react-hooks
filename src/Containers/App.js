import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(10);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  )
}

export default App;
