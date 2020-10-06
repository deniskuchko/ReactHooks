import React, { useState, useCallback } from "react";
import ItemList from "../common/ItemList";

function FifthUseCallback() {
  const [number, setNumber] = useState(1);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? "green" : "black",
  };
  const generateItemsFromAPI = useCallback(
    (indexNumber) => {
      return new Array(number)
        .fill("")
        .map((_, i) => `Элемент ${i + indexNumber}`);
    },
    [number]
  );

  return (
    <div>
      <h1 style={styles}>{number}</h1>
      <button onClick={() => setNumber((prev) => prev + 1)}>Добавить </button>
      <button onClick={() => setColored((prev) => !prev)}>
        Изменить цвет{" "}
      </button>
      <ItemList getItem={generateItemsFromAPI} />
    </div>
  );
}

export default FifthUseCallback;
