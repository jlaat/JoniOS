import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Icons from "./components/Icons/Icons";
import Terminal from "./components/terminal/Terminal";

function App() {
  const [displayTerminal, setDisplayTerminal] = useState(true);
  return (
    <div className="App">
      <Header />
      <Icons renderTerminal={setDisplayTerminal} />
      <Terminal display={displayTerminal} setDisplay={setDisplayTerminal} />
    </div>
  );
}

export default App;
