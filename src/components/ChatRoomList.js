import { PowerOffOutlined } from "@material-ui/icons";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ChatRoom from "./ChatRoom";
import "./ChatRoomList.css";

// get all chatrooms for current user from database

// const chatRooms = [
//   { id: 1, sender_id: 1, receiver_id: 2 },
//   { id: 2, sender_id: 1, receiver_id: 3 },
// ];

// sample database profiles
// const profiles = [
//   {
//     id: 2,
//     name: "dog1",
//     url: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     info: "I like to sniff things",
//     location: "Vancouver",
//     breed: "shiba inu",
//     gender: "femall",
//     age: 2,
//     size: "small",
//     owner: "dog1owner",
//     email: "dog1@a.com",
//   },
//   {
//     id: 3,
//     name: "dog2",
//     url: "https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     info: "Gimme treatz",
//     location: "Richmond",
//     breed: "corgi",
//     gender: "male",
//     age: 5,
//     size: "small",
//     owner: "dog2owner",
//     email: "dog2@a.com",
//   },
// ];

// recieve profile of current logged in user
function ChatRoomList(props) {
  const [chatrooms, setChatrooms] = useState([]);

  // get all chatrooms for current user from database
  console.log(props);
  useEffect(() => {
    // this is only executed once
    axios
      .get(`api/chatroom/${props.profile.id}`)
      .then((res) => {
        console.log("response after axios get", res.data);
        setChatrooms(res.data);
        console.log('after setChatrooms:', chatrooms);
      })
      .catch((error) => console.log(error));
  }, []);

  chatrooms.sort((room1, room2) => room1.updatedat - room2.updatedat).reverse()
  
  const chatRoomItems = chatrooms.map((room) => {
    console.log("room", room)
    console.log("room matched time:", room.matchedat)

    let sender_id = -1;
    let receiver_id = -1;
    if (props.profile.id === room.profile1_id) {
      sender_id = room.profile1_id;
      receiver_id = room.profile2_id;
    } else {
      sender_id = room.profile2_id;
      receiver_id = room.profile1_id;
    }

    console.log('sender:', sender_id, 'receiver:', receiver_id)

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

  return <ul className="messengerList">{chatRoomItems}</ul>;
}

export default ChatRoomList;
