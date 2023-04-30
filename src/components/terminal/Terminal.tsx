import { useEffect, useState } from "react";
import { commands } from "./commands";
import Draggable from "react-draggable";
import Ruksi from "../.././assets/icons/ruksi.png";

interface ExecutedCommand {
  command: string;
  output: string[];
}

const Terminal = (props: any) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<ExecutedCommand[]>([]);
  const [display, setDisplay] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleEnterPressed = (
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === "Enter") {
      switch (input) {
        case "help":
        case "Help": {
          addCommandToHistory({ command: input, output: commands[0] });
          break;
        }
        case "who":
        case "Who": {
          addCommandToHistory({ command: input, output: commands[1] });
          break;
        }
        case "skills":
        case "Skills": {
          addCommandToHistory({ command: input, output: commands[2] });
          break;
        }
        case "clear":
        case "Clear": {
          setHistory([]);
          setInput("");
          break;
        }
        case "contact":
        case "Contact": {
          addCommandToHistory({ command: input, output: commands[3] });
          break;
        }
        default: {
          addCommandToHistory({
            command: input,
            output: ["command not found"],
          });
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

  const closeTerminal = () => {
    props.setDisplay(false);
    setHistory([]);
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
    <Draggable handle=".terminal-header" cancel=".terminal-close">
      <div
        className="terminal"
        onKeyDown={handleEnterPressed}
        onClick={giveInputFocus}
        style={{
          display: props.display ? "block" : "none",
          zIndex: props.zindex,
        }}
      >
        <div className="terminal-header">
          <span>opaa</span>
          <span>you@joniOS</span>
          <img src={Ruksi} className="terminal-close" onClick={closeTerminal} />
        </div>

        <div className="terminal-history">
          <span className="terminal-introduction terminal-output">
            type help and press enter to get list of commands.
          </span>
          {history.map((command, index) => (
            <div className="command-container" key={index}>
              <span className="terminal-input-prompt green-section">
                you@joniOS:~${""}
              </span>
              <span className="terminal-output">{command.command}</span>
              <br />
              <div className="command-container">
                {command.output.map((line, index) => {
                  return (
                    <span className="terminal-output" key={index}>
                      {line}
                      <br />
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="terminal-input">
          <span className="terminal-input-prompt green-section">
            you@joniOS:~$
          </span>
          <input
            className="terminal-input-content"
            type="text"
            value={input}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </Draggable>
  );
};

export default Terminal;
