import React, { useState } from "react";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={handleClick}>Button</button>
    </div>
  );
};
export default ButtonCounter;
