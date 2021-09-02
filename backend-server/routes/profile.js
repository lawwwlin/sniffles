const express = require("express");
const router = express.Router();
const db = require("../db/index");

/* GET all profiles listing */
router.get("/profile/", (req, res) => {
  const profileID = req.params.profile;
  db.query(`Select * from profile`, [profileID])
    .then((data) => {
      const profiles = data.rows;
      res.json(profiles);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/* GET profiles listing except user's*/
router.get("/profiles/:profile", (req, res) => {
  const profileID = req.params.profile;
  db.query(`Select * from profile EXCEPT select * from profile WHERE id=$1`, [
    profileID,
  ])
    .then((data) => {
      const profiles = data.rows;
      res.json(profiles);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/* get user profile */
router.get("/profile/:profile", (req, res) => {
  const profileID = req.params.profile;
  db.query(`Select * from profile WHERE id=$1`, [profileID])
    .then((data) => {
      const profiles = data.rows;
      res.json(profiles);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/* Create profile */
router.post("/profile", (req, res) => {
  const {
    name,
    breed,
    location,
    gender,
    age,
    size,
    owner,
    email,
    password,
    imageurl,
    description,
  } = req.body;
  db.query(
    `INSERT INTO profile (name, breed, location, gender, age, size, owner, email, password, imageurl, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id;`,
    [
      name,
      breed,
      location,
      gender,
      age,
      size,
      owner,
      email,
      password,
      imageurl,
      description,
    ]
  )
    .then((data) => {
      const profile = data.rows;
      res.json(profile);
    })
    .catch((err) => {
      console.log(err.response)
    });
});
module.exports = router;
