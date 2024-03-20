import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter/Counter";
import BgChanger from "./BgChanger/BgChanger";

function App() {
  return (
    <>
      <Counter />
      <BgChanger />
    </>
  );
}

export default App;
