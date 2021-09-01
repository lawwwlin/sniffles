const express = require("express");
const router = express.Router();
const db = require("../db/index");

/* GET profiles listing. */
router.get("/profile/:profile", (req, res) => {
  const profileID = req.params.profile;
  db.query(`Select * from profile EXCEPT select * from profile WHERE id=$1`, [profileID])
    .then((data) => {
      const profiles = data.rows;
      res.json(profiles);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;