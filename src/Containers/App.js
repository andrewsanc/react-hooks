import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(10);

  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={() => setCount(count + 1)} >+1</button>
      <button onClick={() => setCount(count - 1)} >-1</button>
      <button onClick={() => setCount(0)} >Reset Count</button>
    </div>
  )
}

export default App;
