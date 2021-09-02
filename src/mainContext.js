import React, { useState } from 'react'

const MainContext = React.createContext()

const MainProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    
    <MainContext.Provider value={{ name, room, setName, setRoom }}>
      {console.log('current user:', name)}
      {console.log('chat room:', room)}
      {children}
    </MainContext.Provider>
  )
}

export { MainContext, MainProvider } 