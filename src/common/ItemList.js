import React, { useState, useEffect, useMemo } from "react";

export default function ItemList({ getItem }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItem(42);
    setItems(newItems);
  }, [getItem]);
  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
