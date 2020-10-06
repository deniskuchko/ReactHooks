import React from "react";
import { useAlert } from "./alert/AlertContext";

export default function Main() {
  const { show } = useAlert();
  return <button onClick={() => show("Этот текст из Main.js")}> Alert </button>;
}
