import React, { useState, useEffect } from "react";

function SecondUseEffect() {
  const [type, setType] = useState("users");
  const [state, setstate] = useState([]);
  const [pos, setpos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setstate(json));

    return () => {
      console.log("clean type");
      // таким образом можно делатьотписки, удалять слушателей..
    };
  }, [type]);

  useEffect(() => {
    console.log("ComponentDidMount");
  }, []);

  const mouseMoveHandler = (event) => {
    setpos({
      x: event.clientX,
      y: event.clientY,
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, []);

  return (
    <div>
      <h1>Ресурс: {type}</h1>
      <button
        onClick={() => {
          setType("users");
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          setType("todos");
        }}
      >
        Todos
      </button>
      <button
        onClick={() => {
          setType("posts");
        }}
      >
        Posts
      </button>
      {/* <pos>{JSON.stringify(state, null, 2)}</pos> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default SecondUseEffect;
