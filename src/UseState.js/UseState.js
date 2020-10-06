import React from "react";

let computedInitialState = () => {
  return Math.trunc(Math.random() * 20);
};

function FirstUseState() {
  //const [count, setCount] = React.useState(computedInitialState());
  const [count, setCount] = React.useState(() => computedInitialState()); //Если из вне,то колбэк функцию в useState,для избегания не нужного рендера
  const [state, setState] = React.useState({
    title: "Number",
    data: Date.now(),
  });
  let [flag, setFlag] = React.useState(true);

  const increment = () => {
    setCount((prevCount) => prevCount + 1); //setCount(count + 1); setCount(count + 1)=> увеличится только на 1, а не на 2
    /* setCount((prevCount) => prevCount + 1); */ //нужен рендер, чтобы запомнилось предыдущее состояние
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const updaTetitle = () => {
    setState((prev) => {
      return flag ? { ...prev, title: "String" } : { ...prev, title: "Number" };
    }); //изменение объекта, тлько через создание копии, иначе оставит только title
    setFlag((flag) => !flag);
  };
  return (
    <div>
      <h1>Счетчик: {count}</h1>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
      <button onClick={updaTetitle}>Изменить текст</button>
      <pre>{JSON.stringify(state, null, 14)}</pre>
    </div>
  );
}

export default FirstUseState;
