import axios from "axios";
import React, { useState, useEffect } from "react";
import ChatRoom from "./ChatRoom";

// recieve profile of current logged in user
function ChatRoomList(props) {
  const [chatrooms, setChatrooms] = useState([]);

  // get all chatrooms for current user from database
  useEffect(() => {
    // this is only executed once
    axios
      .get(`api/chatroom/${props.profile.id}`)
      .then((res) => {
        setChatrooms(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  chatrooms.sort((room1, room2) => room1.updatedat - room2.updatedat).reverse();

  const chatRoomItems = chatrooms.map((room) => {
    let sender_id = -1;
    let receiver_id = -1;
    if (props.profile.id === room.profile1_id) {
      sender_id = room.profile1_id;
      receiver_id = room.profile2_id;
    } else {
      sender_id = room.profile2_id;
      receiver_id = room.profile1_id;
    }

    return (
      <ChatRoom
        sender_id={sender_id}
        receiver_id={receiver_id}
        key={room.id}
        room_id={room.id}
        sender_name={props.profile.name}
        chatroom={room}
      />
    );
  });

  return chatrooms.length !== 0 ? (
    <p className="messengerList">{chatRoomItems}</p>
  ) : (
    <div className="messenger">
      <div className="messenger_pic">
        <button> icon here </button>
      </div>
      <div className="messenger_info">
        <h2>You don't have a date yet!</h2>
      </div>
      <p messenger_timestamp className="messenger_timestamp">
      </p>
    </div>
  );
}

export default ChatRoomList;
