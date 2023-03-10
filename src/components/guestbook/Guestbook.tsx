import React, { useEffect, useState } from "react";
import TabHeader from "../tabheader/TabHeader";
import Message from "./Message";
import axios from "axios";

interface Guest {
  name: string;
  message: string;
  date: Date;
}

const Guestbook = (props: any) => {
  const [guest, setGuest] = useState({
    name: "",
    message: "",
  });
  const [guests, setGuests] = useState<Guest[]>([]);

  const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuest({ ...guest, [event.target.name]: event.target.value });
  };

  const textareaChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGuest({ ...guest, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    axios
      .get("https://evening-inlet-68124.herokuapp.com/guests")
      .then((response) => setGuests(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const addGuest = () => {
    axios
      .post("https://evening-inlet-68124.herokuapp.com/guests", guest)
      .then((response) => {})
      .catch((error) => console.error(error));
  };

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
      <form className="message-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={inputChanged} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" onChange={textareaChanged} />
        <button onClick={addGuest}>Send me a message</button>
      </form>
      <div className="messages">
        {guests.map((guest, index) => (
          <Message
            key={index}
            name={guest.name}
            message={guest.message}
            date={guest.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Guestbook;
