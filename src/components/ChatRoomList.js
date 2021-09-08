import axios from "axios";
import React, { useState, useEffect } from "react";
import ChatRoom from "./ChatRoom";
import "./ChatRoomList.css"

// recieve profile of current logged in user
function ChatRoomList(props) {
  const [chatrooms, setChatrooms] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
      let timer1 = setTimeout(() => setShow(true), 1 * 1000);
      return () => {
        clearTimeout(timer1);
      };
  }, []);

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

  return show? (chatrooms.length !== 0 ? (
    <p className="messengerList">{chatRoomItems}</p>
  ) : (
    <div className="chat_empty">
      <div className="chat_empty_card" style={{ backgroundImage: `url('https://www.newdoggy.com/wp-content/uploads/2018/03/Taking-your-dog-on-a-date-with-a-lady.jpg')` }}>
        <div className="chat_empty_none">
          <div className="chat_empty_none_text">
          <h1>you don't have a date yet!🤭</h1>
          <h1>check back when you have a match!😏</h1>
          </div>
        </div>
      </div>
    </div>
  )) : (
    <div>Loading page</div>
  );
}

export default ChatRoomList;
