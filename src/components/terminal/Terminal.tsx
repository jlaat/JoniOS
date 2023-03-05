import { useState } from "react";
import { commands } from "./commands";

const Terminal = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      switch (input) {
        case "help": {
          console.log(commands[0]);
          break;
        }
        case "who": {
          console.log(commands[1]);
          break;
        }
        case "opening_banner": {
          console.log(commands[3]);
          break;
        }
      }
    }
  };

  return (
    <div className="terminal" onKeyDown={handleEnterPressed}>
      <div className="terminal-header">
        <span>opaa</span>
        <span>you@joniOS</span>
        <button className="terminal-close">x</button>
      </div>
      <div className="terminal-body"></div>
      <div className="terminal-input">
        <span className="terminal-input-prompt">you@joniOS:~$</span>
        <input
          className="terminal-input-content"
          type="text"
          value={input}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Terminal;
