const express = require('express');
const router = express.Router();
const db = require("../db/index");

/* GET chatroom for given profile ids */
router.get("/chatroom/:profile1_id/:profile2_id", (req, res) => {
  const profile1_id = req.params.profile1_id;
  const profile2_id = req.params.profile2_id;
  db.query(`
    SELECT * FROM chatroom
    WHERE profile1_id = $1 AND profile2_id = $2
    OR profile1_id = $2 AND profile2_id = $1
    `, [profile1_id, profile2_id])
    .then((data) => {
      const chatroom = data.rows;
      res.json(chatroom);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/* GET chatrooms for given profile id */
router.get("/chatroom/:profile1_id", (req, res) => {
  const profile1_id = req.params.profile1_id;
  db.query(`
    SELECT id, profile1_id, profile2_id, messages, EXTRACT(epoch FROM updatedAt) as updatedAt
    FROM chatroom
    WHERE profile1_id = $1 OR profile2_id = $1
    `, [profile1_id])
    .then((data) => {
      const chatrooms = data.rows;
      res.json(chatrooms);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/* FOR DEV: GET chatrooms for given profile id */
router.get("/chatroom", (req, res) => {
  db.query(`SELECT * FROM chatroom`)
    .then((data) => {
      const chatrooms = data.rows;
      res.json(chatrooms);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/* create message upon send */
// axios.post(`/api/message/${sender_id}`, { message })
// message = {sender_id: xxx, receiver_id: xxx, text: adfadsf}
router.post("/chatroom", (req, res) => {
  console.log("req.body in post/chatroom:", req.body);
  const { profile1_id, profile2_id, messages} = req.body.room;
  console.log("checking messages: ", messages);
  console.log("checking profile1:", profile1_id, "2:", profile2_id);
  for (const i in messages) {
    console.log(`checking messages ${i}: `, messages[i]);
  }
  const msgs = JSON.stringify(messages);
  console.log(`checking stringify: `, msgs);
  db.query(`
    INSERT INTO chatroom (profile1_id, profile2_id, messages) VALUES ($1, $2, $3)
  `, [profile1_id, profile2_id, msgs])
    .then((data) => {
      const chatrooms = data.rows;
      res.json(chatrooms);
      console.log("after saving to database chatroom.js 68")
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/* create message upon send */
// axios.post(`/api/message/${sender_id}`, { message })
// message = {sender_id: xxx, receiver_id: xxx, text: adfadsf}
router.put("/chatroom/:room_id", (req, res) => {
  console.log("req.body in put/chatroom:", req.body);
  const { id, profile1_id, profile2_id, messages} = req.body.room;
  console.log("checking messages: ", messages);
  console.log("checking profile1:", profile1_id, "2:", profile2_id);
  console.log("chatroom id:", id);
  for (const i in messages) {
    console.log(`checking messages ${i}: `, messages[i]);
  }
  const msgs = JSON.stringify(messages);
  console.log(`checking stringify: `, msgs);
  db.query(`
    INSERT INTO chatroom (id, profile1_id, profile2_id, messages) VALUES ($1, $2, $3, $4)
    ON CONFLICT (id) DO
    UPDATE SET messages = $4
  `, [id, profile1_id, profile2_id, msgs])
    .then((data) => {
      const chatrooms = data.rows;
      res.json(chatrooms);
      console.log("after saving to database chatroom.js 93");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});


module.exports = router;