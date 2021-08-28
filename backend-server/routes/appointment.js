// const router = require("express").Router();

// module.exports = () => {
//   router.get("/", (request, response) => {
//     console.log("we are hitting the appointments route")
//     // db.query(
//     //   `
//     //   SELECT
//     //     appointments.id,
//     //     appointments.time,
//     //     CASE WHEN interviews.id IS NULL
//     //     THEN NULL
//     //     ELSE json_build_object('student', interviews.student, 'interviewer', interviews.interviewer_id)
//     //     END AS interview
//     //   FROM appointments
//     //   LEFT JOIN interviews ON interviews.appointment_id = appointments.id
//     //   GROUP BY appointments.id, interviews.id, interviews.student, interviews.interviewer_id
//     //   ORDER BY appointments.id
//     // `
//     // ).then(({ rows: appointments }) => {
//     //   console.log("sdfasdf", rows)
//     //   response.json(
//     //     appointments.reduce(
//     //       (previous, current) => ({ ...previous, [current.id]: current }),
//     //       {}
//     //     )
//     //   );
//     // });
//   });
//   return router;
// }

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
  // db.query(
  // //   `
  // //   SELECT
  // //     appointments.id,
  // //     appointments.time,
  // //     CASE WHEN interviews.id IS NULL
  // //     THEN NULL
  // //     ELSE json_build_object('student', interviews.student, 'interviewer', interviews.interviewer_id)
  // //     END AS interview
  // //   FROM appointments
  // //   LEFT JOIN interviews ON interviews.appointment_id = appointments.id
  // //   GROUP BY appointments.id, interviews.id, interviews.student, interviews.interviewer_id
  // //   ORDER BY appointments.id
  // // `
  // `
  //   select * from users;  
  // `


  // ).then((result) => {
  //   console.log("sdfasdf", result)
  //   // response.json(
  //   //   appointments.reduce(
  //   //     (previous, current) => ({ ...previous, [current.id]: current }),
  //   //     {}
  //   //   )
  //   // );
  // });
});


// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
