import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatRoom.css";
// import Chat from './Chat/Chat'
import { Link } from "react-router-dom";


// 
function ChatRoom({ room_id, sender_id, receiver_id, profile }) {

  return (
    <div className="messenger">
      <Link to={{
        pathname: "/message",
        state: {
          test: "testing",
        },
      }}>
          <Avatar className="messenger_pic" alt={profile.name} src={profile.url} />
      </Link>
      <div className="messenger_info">
        <h2>{profile.name}</h2>
        <p>sample message text</p>
      </div>
      <p messenger_timestamp className="messenger_timestamp">
        -insert-timestamp-here-
      </p>
    </div>
  );
}

export default ChatRoom;
