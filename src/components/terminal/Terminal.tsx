import { useEffect, useState } from "react";
import { commands } from "./commands";
import Ruksi from "../.././assets/icons/ruksi.png";

interface ExecutedCommand {
  command: string;
  output: string[];
}

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<ExecutedCommand[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleEnterPressed = (
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === "Enter") {
      switch (input) {
        case "help": {
          addCommandToHistory({ command: input, output: commands[0] });
          break;
        }
        case "who": {
          console.log(commands[1]);
          addCommandToHistory({ command: input, output: commands[1] });
          break;
        }
        case "skills": {
          addCommandToHistory({ command: input, output: commands[2] });
          break;
        }
        case "clear": {
          setHistory([]);
          setInput("");
          break;
        }
      }
    }
  };

  const addCommandToHistory = (command: ExecutedCommand) => {
    setHistory([...history, command]);
    setInput("");
    scrollTerminalToBottom();
  };

  // Scroll terminal COMPLETELY to bottom
  const scrollTerminalToBottom = () => {
    const terminal = document.querySelector(".terminal");
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  };

  useEffect(() => {
    scrollTerminalToBottom();
  }, [history]);

  // User can start writing commands after clicking terminal
  const giveInputFocus = () => {
    const input = document.querySelector(
      ".terminal-input-content"
    ) as HTMLInputElement;
    if (input) {
      input.focus();
    }
  };

  return (
    <div
      className="terminal"
      onKeyDown={handleEnterPressed}
      onClick={giveInputFocus}
    >
      <div className="terminal-header">
        <span>opaa</span>
        <span>you@joniOS</span>
        <img src={Ruksi} className="terminal-close" />
      </div>

      {history.map((command, index) => (
        <div className="command-container" key={index}>
          <span className="terminal-input-prompt">
            <br />
            you@joniOS:~${" "}
          </span>
          <span>{command.command}</span>
          <br />
          <div className="command-container">
            {command.output.map((line) => {
              return (
                <span>
                  <br />
                  {line}
                </span>
              );
            })}
          </div>
          <br />
        </div>
      ))}

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
