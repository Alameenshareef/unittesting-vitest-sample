import React, { Fragment, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      {/* <h1>Hello 1</h1>
      <h1>Hello 2</h1>
      <h2>Hello h2</h2>
      <span data-testid='span'>10</span> */}
      <span data-testid="span">{count}</span>
      <input type="text" />
      <button onClick={() => setCount((prev) => prev + 1)}>Submit</button>
    </Fragment>
  );
};

export default App;
