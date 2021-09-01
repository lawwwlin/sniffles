import React, { useState } from "react";
import "./MessageScreen.css";

const candidate = {
  name: "dog1",
  matchtime: "06/09/21"
}


function MessageScreen(props) {
  const [messages, setMessages] = useState([
    {
      name: "dog1",
      img: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      text: "Is this doggo?",
      matchtime: "06/09/21"
    },
    {
      text: "Mebe UwU"
    },
  ]);

  

  return (
    <div className="messageScreen">
      <h2>spicy DMs</h2>
      <p className="messageScreen_match">You matched with {candidate.name} on {candidate.matchtime}</p>
      {messages.map((message) => (
        message.name ? (
        <div className="messageScreen_msg">
          <p className="messageScreen_text">{message.text}</p>
        </div>
        ) : (  <div className="messageScreen_msg">
        <p className="messageScreen_textUser">{message.text}</p>
      </div>
      )))}
    </div>
  );
}

export default MessageScreen;
