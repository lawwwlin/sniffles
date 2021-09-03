const express = require('express');
const router = express.Router();
const db = require("../db/index");

/* GET message from sender */
// CAUTION: ordering of timestamp might be wrong
router.get("/message/:sender", (req, res) => {
  const senderId = req.params.sender;
  db.query(`
    SELECT * FROM message
    WHERE sender_id = $1
    ORDER BY timestamp
    `, [senderId])
    .then((data) => {
      const messages = data.rows;
      res.json(messages);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/* create message upon send */
// axios.post(`/api/message/${sender_id}`, { message })
// message = {sender_id: xxx, receiver_id: xxx, text: adfadsf}
router.post("/message/:sender", (req, res) => {
  console.log("req.body in /message/:sender :", req.body);
  const { text, sender_id, receiver_id} = req.body;
  db.query(`
    INSERT INTO message (text, sender_id, receiver_id) VALUES ($1, $2, $3)
  `, [text, sender_id, receiver_id])
    .then((data) => {
      const messages = data.rows;
      res.json(messages);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;