var express = require('express');
var router = express.Router();
const db = require("../db/index")

/* GET users listing. */
router.get("/", (request, response) => {
  console.log("we are hitting the appointments route")
  db.query("Select * from users")
  .then((result)=>{
    console.log("RESULTS ",result);
  });
});


module.exports = router;
