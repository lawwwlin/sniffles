import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Messenger.css";
import { Link } from "react-router-dom";

function Messenger({ name, text, profilePic, timestamp }) {
  return (
    <div className="messenger">
      <Link to={`/messages/${name}`}>
          <Avatar className="messenger_pic" alt={name} src={profilePic} />
      </Link>
      <div className="messenger_info">
        <h2>{name}</h2>
        <p>{text}</p>
      </div>
      <p messenger_timestamp className="messenger_timestamp">
        {timestamp}
      </p>
    </div>
  );
}

export default Messenger;
