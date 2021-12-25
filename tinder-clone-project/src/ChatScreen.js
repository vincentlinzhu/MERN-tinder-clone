import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./ChatScreen.css";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Emma Watson",
      image:
        "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/12/07/4cc13a06-dbe9-4adb-b761-3c7c2caf04d8_98f9ca2f.jpg?itok=242NacV2&v=1638870231",
      message:
        "I'm going to bed, before either of you come up with another clever idea to get us killed, or worse, expelled.",
    },
    {
      name: "Emma Watson",
      image:
        "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/12/07/4cc13a06-dbe9-4adb-b761-3c7c2caf04d8_98f9ca2f.jpg?itok=242NacV2&v=1638870231",
      message: "win gar dium levi OH sa 😤",
    },
    {
      message: "You do it then if you're so clever!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH Emma Watson ON 08/21/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__owntext">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__form">
        <input
          className="chatScreen__input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__button"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
