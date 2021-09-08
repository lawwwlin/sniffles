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
    <div className="candidate">
      <div className="candidate_card" id="candidate_cardNone" style={{ backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5b631cba5b409b413bb3a633/1537968401007-7CNIR58SO7FN3OEU4TIE/daniel-brunsteiner-1055275-unsplash.jpg?format=1500w')` }}>
        <div className="candidate_none">
          <div className="candidate_none_text">
          <h1>you a bit too thirsty for doggos👀</h1>
          <h1>drink some water, take a break🥵</h1>
          <h1>and come back later!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoomList;
