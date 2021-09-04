const express = require("express");
const router = express.Router();
const db = require("../db/index");

// get all candidates for dev
router.get("/candidate", (req, res) => {
  db.query(`
    SELECT * FROM candidate
  `)
    .then((data) => {
      const candidates = data.rows;
      res.json(candidates);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});



/* GET candidate listing. */
router.get("/candidate/:profile/:candidate", (req, res) => {
  const profileId = req.params.profile;
  const candidateId = req.params.candidate;
  db.query(`
    SELECT * FROM candidate
    WHERE profile_id = $1 AND candidate_dog_id = $2
  `, [profileId, candidateId])
    .then((data) => {
      const candidates = data.rows;
      res.json(candidates);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//get candidates of user
router.get("/candidate/:userId", (req, res) => {
  const userId = req.params.userId;
  db.query(`SELECT candidate_dog_id from candidate where profile_id = $1`, [userId])
  .then((data) => {
    const candidateProfiles= data.rows;
    res.json(candidateProfiles);
  })
  .catch((err) => {
    res.status(500).json({ error: err.message });
  });
});


/* create candidate upon swipe */
// axios.post(`/api/candidate/${id}`, { candidate })
// candidate = {profile_id: xxx, candidate_dog_id: xxx, approve: true/false}
router.post("/candidate", (req, res) => {
  const { approve, profile_id, candidate_dog_id} = req.body.candidate;
  db.query(`
    INSERT INTO candidate (approve, profile_id, candidate_dog_id) VALUES ($1, $2, $3)
  `, [approve, profile_id, candidate_dog_id])
    .then((data) => {
      const candidates = data.rows;
      console.log("after saving to database:", candidates);
      res.json(candidates);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;