const express = require("express");
const router = express.Router();
const db = require("../db/index");

/* GET all profiles listing */
router.get("/profiles", (req, res) => {
  db.query(`Select * from profile`)
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
  db.query(`
    SELECT * FROM profile 
    WHERE id != $1
  `, [profileID,])
    .then((data) => {
      const profiles = data.rows;
      res.json(profiles);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/* GET profile for login */
router.get("/profile/:email/:password", (req, res) => {
  const {email, password} = req.params;
  db.query(`Select * from profile WHERE email=$1 AND password=$2;`, [email, password])
    .then((data) => {
      const profiles = data.rows;
      res.json(profiles);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/* get user profile -- for candidate msging? */
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

/* update profile */
router.put("/profile/:id", (req, res) => {
  console.log(req.body)
  const {
    id,
    name,
    breed,
    gender,
    location,
    age,
    size,
    owner,
    email,
    description,
    password,
    imageurl,
  } = req.body;
  db.query(`
    UPDATE profile 
    SET age = $2, breed = $3, description = $4, email = $5, gender = $6, imageUrl = $7, location = $8, name = $9, owner = $10, password = $11, size = $12
    WHERE id = $1;
    `,
    [
      id,
      age,
      breed,
      description,
      email,
      gender,
      imageurl,
      location,
      name,
      owner,
      password,
      size,
    ]
  )
    .then((data) => {
      const profile = data.rows;
      res.json(profile);
      console.log(profile)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
module.exports = router;

/* Create profile */
router.post("/profile", (req, res) => {
  const {
    name,
    breed,
    gender,
    location,
    age,
    size,
    owner,
    email,
    description,
    password,
    imageUrl,
  } = req.body;
  db.query(
    `INSERT INTO profile (age, breed, description, email, gender, imageUrl, location, name, owner, password, size) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id;`,
    [
      age,
      breed,
      description,
      email,
      gender,
      imageUrl,
      location,
      name,
      owner,
      password,
      size,
    ]
  )
    .then((data) => {
      const profile = data.rows;
      res.json(profile);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
module.exports = router;
