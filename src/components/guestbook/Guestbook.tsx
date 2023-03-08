import React from "react";
import TabHeader from "../tabheader/TabHeader";

const Guestbook = (props: any) => {
  return (
    <div
      className="guestbook"
      style={{
        display: props.display ? "block" : "none",
        zIndex: props.zindex,
      }}
    >
      <TabHeader
        tabName="Guestbook"
        ruksiClicked={() => {
          props.setDisplay(false);
        }}
      />
      <form className="message-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="message">Message</label>
        <textarea id="message" />
        <button type="submit">Send me a message</button>
      </form>
    </div>
  );
};

export default Guestbook;
