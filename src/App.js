import React from "react"
import Counter from "./componenets/Counter";
import State from "./componenets/State";
import Accessibility from "./componenets/Accessibility";

export default function App() {
  return (
    <div>
      <State />
      <Counter />
      <State />
      <Accessibility />
    </div>
  );
}


