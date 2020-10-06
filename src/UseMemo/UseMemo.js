import React, { useState, useEffect, useMemo } from "react";

const complexComputed = (num) => {
  console.log("render");
  let i = 0;
  while (i < 100000000) i++;
  return num * 2;
};

function FourthUseMemo() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? "green" : "black",
    }),
    [colored]
  );
  const complex = useMemo(() => {
    return complexComputed(number);
  }, [number]);

  useEffect(() => {
    console.log(" Styles changed");
  }, [styles]);

  return (
    <div>
      <h1 style={styles}>{complex}</h1>
      <button onClick={() => setNumber((prev) => prev - 1)}> Удалть</button>
      <button onClick={() => setNumber((prev) => prev + 1)}>Добавить </button>
      <button onClick={() => setColored((prev) => !prev)}>
        Изменить цвет{" "}
      </button>
    </div>
  );
}

export default FourthUseMemo;
