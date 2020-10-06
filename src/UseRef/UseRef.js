import React, { useState, useRef, useEffect } from "react";

function ThirdUseRef() {
  const [value, setValue] = useState("initial");
  const refCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    refCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>Количество рендеров: {refCount.current}</h1>
      <h1>Предыдущее состояние : {prevValue.current}</h1>
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={focus}>focus</button>
    </div>
  );
}

export default ThirdUseRef;
