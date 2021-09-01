const express = require("express");
const router = express.Router();
const db = require("../db/index");

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

//get profile of candidate
router.get("/candidate/:profile", (req, res) => {
  const profileId = req.params.profile;
  db.query(`SELECT * from profile where id= $1`, [profileId])
  .then((data) => {
    const candidateProfile = data.rows;
    res.json(candidateProfile);
  })
  .catch((err) => {
    res.status(500).json({ error: err.message });
  });
});


/* create candidate upon swipe */
// axios.post(`/api/candidate/${id}`, { candidate })
// candidate = {profile_id: xxx, candidate_dog_id: xxx, approve: true/false}
router.post("/candidate/:profile", (req, res) => {
  const { approve, profile_id, candidate_dog_id} = req.body.candidate;
  db.query(`
    INSERT INTO candidate (approve, profile_id, candidate_dog_id) VALUES ($1, $2, $3)
  `, [approve, profile_id, candidate_dog_id])
    .then((data) => {
      const candidates = data.rows;
      res.json(candidates);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;