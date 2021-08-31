/* const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const indexRouter = require('./routes/index');
const profileRouter = require('./routes/profile');
const candidateRouter = require('./routes/candidate');
const messageRouter = require('./routes/message');

const app = express();

const PORT = 3001 || process.env.PORT;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', profileRouter);
app.use('/api', candidateRouter);
app.use('/api', messageRouter);
// app.use("/api",(req,res)=>{
//     console.log("this a test ");
// });

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
 */
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, getUser, deleteUser, getUsers } = require('./users');

const router = require('./routes/index');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
// const chatRoomRouter = require("./routes/chatrooms");

app.use(cors());
app.use(router);
// app.use("/chatroom", chatRoomRouter);

io.on('connection', (socket) => {
  socket.on('login', ({ name, room }, callback) => {
      const { user, error } = addUser(socket.id, name, room)
      if (error) return callback(error)
      socket.join(user.room)
      socket.in(room).emit('notification', { title: 'Someone\'s here', description: `${user.name} just entered the room` })
      io.in(room).emit('users', getUsers(room))
      callback()
  })

  socket.on('sendMessage', message => {
      const user = getUser(socket.id)
      io.in(user.room).emit('message', { user: user.name, text: message });
  })

  socket.on("disconnect", () => {
      console.log("User disconnected");
      const user = deleteUser(socket.id)
      if (user) {
          io.in(user.room).emit('notification', { title: 'Someone just left', description: `${user.name} just left the room` })
          io.in(user.room).emit('users', getUsers(user.room))
      }
  })
})

server.listen(process.env.PORT || 3001, () => console.log(`Server has started.`));