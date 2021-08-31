import React from "react";
import Messenger from "./Messenger";
import "./MessengerList.css";

function MessengerList() {
  return (
    <div className="messengerList">
      <h3>View your DMs</h3>
      <Messenger
        name="dog1"
        text="Is this doggo?"
        profilePic="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        timestamp="5 minutes ago"
      />

      <Messenger
        name="dog2"
        text="Woof why you ghost "
        profilePic="https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        timestamp="6 days ago"
      />
    </div>
  );
}

export default MessengerList;
