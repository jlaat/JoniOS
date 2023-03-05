import { useState } from "react";

const Terminal = () => {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <span>opaa</span>
        <span>you@joniOS</span>
        <button className="terminal-close">x</button>
      </div>
      <div className="terminal-body">as</div>
      <div className="terminal-input">
        <span className="terminal-input-prompt">you@joniOS:~$</span>
        <input className="terminal-input-content" />
      </div>
    </div>
  );
};

export default Terminal;
