import React from "react";
import ChatRoom from "./ChatRoom";
import "./ChatRoomList.css";

// get all chatrooms for current user from database
const chatRooms = [
  {id: 1, sender_id: 1, receiver_id: 2},
  {id: 2, sender_id: 1, receiver_id: 3}
]

// sample database profiles
const profiles = [{
  id: 2,
  name: "dog1",
  url: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  info: "I like to sniff things",
  location: "Vancouver",
  breed: "shiba inu",
  gender: "femall",
  age: 2,
  size: "small",
  owner: "dog1owner",
  email: "dog1@a.com"
},
{
  id: 3,
  name: "dog2",
  url: "https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  info: "Gimme treatz",
  location: "Richmond",
  breed: "corgi",
  gender: "male",
  age: 5,
  size: "small",
  owner: "dog2owner",
  email: "dog2@a.com"
}]

// find the profile of the recipient 
const getProfile = (receiver_id) => {
  const recipientProfile = profiles.find((profile) => profile.id === receiver_id);
  return recipientProfile;
}


function ChatRoomList() {

  const chatRoomItems = chatRooms.map((room) => {
    return <ChatRoom
      key={room.id}
      room_id={room.id}
      sender_id={room.sender_id}
      receiver_id={room.receiver_id}
      profile={getProfile(room.receiver_id)}
    />
  })

  return (
    <ul className="messengerList">
      {chatRoomItems}
    </ul>
  );
}

export default ChatRoomList;