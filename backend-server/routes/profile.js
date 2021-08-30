const express = require("express");
const router = express.Router();
const db = require("../db/index");

/* GET profiles listing. */
router.get("/profile", (req, res) => {
  db.query("Select * from profile")
    .then((data) => {
      const profiles = data.rows;
      res.json(profiles);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;