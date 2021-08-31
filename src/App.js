// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// import './App.css';
// import Messages from './Messages/Messages';
// import MessageInput from './Messages/MessageInput';

// function App() {

//     const [socket, setSocket] = useState(null);
  
//      useEffect(() => {
//       const newSocket = io(`http://${window.location.hostname}:3001`);
//       setSocket(newSocket);
//       return () => newSocket.close();
//     }, [setSocket]);
 
//     return (
//       <div className="App">
//         <header className="app-header">
//           Sniffles?
//         </header>
//         { socket ? (
//           <div className="chat-container">
//             <Messages socket={socket}/>
//             <MessageInput socket={socket}/>
//           </div>
//         ) : (
//           <div>Not Connected</div>
//         )}
//       </div>
//     );
//   }
// export default App;
/* 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login'
import Chat from './components/Chat/Chat'
import { SocketProvider } from './socketContext'
import { MainProvider } from './mainContext'
import './App.css'
import { ChakraProvider, Flex } from "@chakra-ui/react"
import { UsersProvider } from './usersContext'
import DefaultPage from './components/DefaultPage'

function App() {
  return (
    <ChakraProvider>
      <MainProvider>
        <UsersProvider>
          <SocketProvider>
            <Flex className="App" align='center' justifyContent='center'>
              <Router>
                <Switch>
                  <Route path='/join' component={Login} />
                  <Route path='/chat' component={Chat} />
                  <Route component={DefaultPage} />
                </Switch>
              </Router>
            </Flex>
          </SocketProvider>
        </UsersProvider>
      </MainProvider>
    </ChakraProvider>
  );
}

export default App;
 */