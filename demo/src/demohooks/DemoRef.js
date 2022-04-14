import React, { useRef } from "react";

const DemoRef = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Fazal</h1>
      <input type="text" placeholder="Type..." ref={inputRef} />
      <button onClick={onClick}>Change</button>
    </div>
  );
}

export default DemoRef;